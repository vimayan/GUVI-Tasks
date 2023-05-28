const jwt = require("jsonwebtoken");
const {
  UrlSchema,
  CountSchema,
  UserSchema,
} = require("../model/mongooseModel");
const joi = require("joi");
const { getIO, getId } = require("../socket");
const tinySchema = joi
  .object({
    longUrl: joi.string().uri().required(),
    tinyUrl: joi.string(),
  })
  .with("longUrl", "tinyUrl");

exports.getUrl = async (req, res) => {
  try {
    //checking the availability
    const user = await UserSchema.findOne({ _id: req._id });
    if (!user) return res.status(401).end("user not exists");
    else {
      const urls = await UrlSchema.find({ userid: req._id });
      return res.status(200).send(urls);
    }
  } catch (error) {
    res.status(401).send(new Error(error).message);
  }
};

exports.shorteningUrl = async (req, res) => {
  const longUrl = req.body.longUrl;
  const tinyUrl = req.body.tinyUrl;
  // const tinyUrl = `http://localhost:4500/${req.body.tinyUrl}`;
  console.log(req.body);
  try {
    //validate the body
    const { error } = await tinySchema.validateAsync(req.body);
    if (error) return res.status(400).end(error.details[0].message);

    //checking the availability
    const url = await UrlSchema.findOne({ tinyUrl: tinyUrl });
    if (url) return res.status(401).end("Url shortner already exists");

    const newUrl = await new UrlSchema({
      userid: req._id,
      longUrl,
      tinyUrl,
    });
    await newUrl.save();
    const urls = await UrlSchema.find({ userid: req._id });
    return res.status(200).send(urls);
  } catch (error) {
    res.status(401).send(new Error(error).message);
  }
};

exports.EditUrl = async (req, res) => {
  const longUrl = req.body.longUrl;
  const tinyUrl = req.body.tinyUrl;
  const id = req.body._id;

  try {
    // Validate the body
    const { error } = await tinySchema.validateAsync({ longUrl, tinyUrl });
    if (error) return res.status(400).end(error.details[0].message);

    // Checking the url
    const url = await UrlSchema.findById(id);
    if (!url) return res.status(401).end("Url does not exist");

   //checking the availability
   const tiny = await UrlSchema.findOne({ tinyUrl: tinyUrl });
   if ( tiny && (id!==tiny._id.toString())) return res.status(401).end("Url shortner already exists");


    UrlSchema.findOneAndUpdate(
      { userid: req._id, _id: req.body._id },
      req.body,
      { returnDocument: "after" }
    ).then((doc) => {
      // Retrieve the updated URLs
      UrlSchema.find({ userid: req._id }).then((urls) => {
        return res.status(200).json(urls);
      });
    });
  } catch (error) {
    res.status(401).send(error.message);
  }
};

exports.deleteUrl = async (req, res) => {
  const id = req.params["id"];

  try {
    //checking the url
    const url = await UrlSchema.findById(id);
    if (!url) return res.status(401).end("Url not exists");
    else {
      await UrlSchema.findByIdAndRemove(id);

      const urls = await UrlSchema.find({ userid: req._id });
      return res.status(200).json(urls);
    }
  } catch (error) {
    res.status(401).send(new Error(error).message);
  }
};

exports.redirectUrl = async (req, res) => {
  // const tinyUrl = `http://localhost:4500/${req.params["tiny_url"]}`;
  const tinyUrl = req.params["tiny_url"];
  try {
    const url = await UrlSchema.findOne({ tinyUrl: tinyUrl });
    console.log(url);
    if (url) {
      UrlSchema.updateOne(
        { _id: url._id },
        { $inc: { clickCount: 1 } },
        { returnDocument: "after" },
        (err, doc) => {
          if (err) {
            return res.status(401).send(new Error(err).message);
          } else {
            console.log(doc);
            res.redirect(url.longUrl);
          }
        }
      );

      const countDocument = await CountSchema.findOneAndUpdate(
        {},
        { $inc: { viewCount: 1 } },
        { returnDocument: "after" }
      );
      const viewCount = countDocument ? countDocument.viewCount : 0;

      // Emit the updated view count to all connected clients
      const urls = await UrlSchema.find({ userid: url.userid });
      // console.log("this is url",urls);
      getIO().to(`${getId()}`).emit("clickCountUpdated", urls);

      getIO().emit("viewCountUpdated", viewCount);

      return;
    } else {
      return res.status(404).end("Page Not Found");
    }
  } catch (error) {
    console.error(`Error in redirectUrl: ${error}`);
    res.status(500).send(new Error(error).message);
  }
};

exports.getViewCount = async (req, res) => {
  try {
    //checking the availability
    const countDocument = await CountSchema.findOne();
    console.log(countDocument);
    if (!countDocument) {
      const newCount = await new CountSchema({ viewCount: 0 });
      await newCount.save();
      console.log(newCount);
      return res.status(200).end(`${newCount.viewCount}`);
    } else {
      return res.status(200).end(`${countDocument.viewCount}`);
    }
  } catch (error) {
    console.log(error);
    return res.status(401).send(new Error(error).message);
  }
};
