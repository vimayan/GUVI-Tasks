const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },
  isverified: {
    type: Boolean,
    required: true,
    default: false,
  },
});

const tokenSchema = mongoose.Schema({
  userid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
    unique: true,
  },

  token: { type: String, required: true },

  createdAt: { type: Date, default: Date.now(), expires: 36000 },
});

const urlSchema = mongoose.Schema({
  userid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },

  tinyUrl: {
    type: String,
    required: true,
  },
  longUrl: {
    type: String,
    required: true,
  },
  clickCount: {
    type: Number,
    required: true,
    default: 0,
  },
});



const countSchema = mongoose.Schema({
  viewCount: {
    type:Number,
    default: 0,
  }
});



module.exports = {
  UserSchema: mongoose.model("user", userSchema),
  TokenSchema: mongoose.model("token", tokenSchema),
  UrlSchema: mongoose.model("url", urlSchema),
  CountSchema: mongoose.model("viewcount", countSchema),
};
