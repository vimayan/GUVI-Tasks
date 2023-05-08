const { UserSchema, TokenSchema } = require("../model/mongooseModel");
const nodemailer = require("nodemailer");
const bcrypt = require("bcryptjs");
const joi = require("joi");
const crypto = require("crypto");
const getAccessToken = require("../model/token");

const registerSchema = joi.object({
  email: joi.string().min(6).required(),
  firstname: joi.string().min(3).max(16).required(),
  lastname: joi.string().min(3).max(16).required(),
  password: joi
    .string()
    .regex(/^[a-zA-Z0-9]{6,16}$/)
    .min(8)
    .required(),
});

exports.createUser = async (req, res) => {
  const email = req.body.email;
  const firstname = req.body.firstname;

  try {
    const { error } = await registerSchema.validateAsync(req.body);

    // Save Tutorial in the database

    const users = await UserSchema.findOne({ email: email });
    if (users) {
      return res.status(400).end("email already exist");
    }

    const hashpassword = await bcrypt.hash(req.body.password, 10);

    const userAccount = new UserSchema({
      email: req.body.email,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      password: hashpassword,
    });

    await userAccount.save();

    return res.status(200).send("user added");
  } catch (error) {
    res.status(500).send(new Error(error).message);
  }
};

const loginSchema = joi.object({
  email: joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net"] },
  }),
  password: joi
    .string()
    .regex(/^[a-zA-Z0-9]{6,16}$/)
    .min(8)
    .required(),
});

exports.loginUser = async (req, res) => {
  const email = req.body.email;

  try {
    const { error } = await loginSchema.validateAsync(req.body);

    if (error) {
      return res.status(400).send(error);
    }

    const user = await UserSchema.findOne({ email: email });

    if (!user) {
      return res.status(400).end("email id not exist please register");
    }

    const validpassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!validpassword) {
      return res.status(400).send("please enter valid password");
    } else {
      return res.status(200).end("user name and password valid");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.requestPassword = async (req, res) => {
  try {
    const schema = joi.object({ email: joi.string().email().required() });
    const { error } = schema.validate(req.body);
    if (error) return res.status(400).send(new Error(error).message);

    const user = await UserSchema.findOne({ email: req.body.email });
    if (!user)
      return res.status(400).send("user with given email doesn't exist");

    let token = await TokenSchema.findOne({ userid: user._id });
    if (!token) {
      token =await new TokenSchema({
        userid: user._id,
        token: crypto.randomBytes(32).toString("hex"),
      }).save();
    }

    const link = `${process.env.URL}/reset-password/${user._id}/${token.token}`;
    const accessToken = await getAccessToken();
    const transporter = await nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: process.env.userMail,
        accessToken: accessToken,
        clientId: process.env.clientId,
        clientSecret: process.env.secret,
        refreshToken: process.env.refreshToken,
      },
    });
    const mailOptions = {
      from: process.env.userMail,
      to: user.email,
      subject: "reset password",
      html: link,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
        res.status(500).send("couldn't send the mail");
      } else {
        res.status(200).send("password reset link sent to your email account");
        console.log("Email sent:", info.response);
      }
    });
  } catch (error) {
    res.status(500).send("An error occured");
    console.log(error);
  }
};

exports.enterPassword = async (req, res) => {
  try {
    const user = await UserSchema.findById(req.params.id);
    if (!user) return res.status(400).send("invalid link");

    let token = await TokenSchema.findOne({ token: req.params.token });
    if (!token) {
      return res.status(400).send("token expired");
    }

    res.render("resetpassword", {
      id: req.params.id,
      token: req.params.token,
    });
  } catch (error) {
    res.send(error);
  }
};

exports.resetPassword = async (req, res) => {
  console.log(req.body);
  // return res.send(req.body)
  try {
    const passwordSchema = joi.object({
      password: joi.string().required(),
      confirmpassword: joi.string().required().valid(joi.ref("password")),
    });
    const { error } = passwordSchema.validate(req.body);
    if (error) return res.status(400).send(error.details[0]);

    const token = await TokenSchema.findOne({
      userid: req.params.id,
      token: req.params.token,
    });

    if (!token) return res.status(400).send("invalid link or expired");

    const user = await UserSchema.findById(req.params.id);

    if (!user) return res.status(400).send("Invalid link or expired");
    const hashpassword = await bcrypt.hash(req.body.password, 10);
    user.password = hashpassword;
    await user.save();
    await token.delete();

    res.send("password reset sucessfully.");
  } catch (error) {
    res.send(error);
  }
};
