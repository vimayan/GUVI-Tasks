const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mentor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "mentors",
  },
  mentorlist: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "mentors",
    },
  ],
});

const mentorSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

module.exports = {
  StudentSchema: mongoose.model("students", studentSchema),
  MentorSchema: mongoose.model("mentors", mentorSchema),
};
