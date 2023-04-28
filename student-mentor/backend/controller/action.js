const { MentorSchema, StudentSchema } = require("../model/mongooseModel");

exports.listPeople = async (req, res) => {
  const students = await StudentSchema.find();
  const mentors = await MentorSchema.find();
  return res.status(200).json({ students: students, mentors: mentors });
};
exports.listStudentsForMentor = async (req, res) => {
  const mentor_id = req.params.mentor_id;
  const check_mentor = await MentorSchema.findById(mentor_id);
  try {
    if (!check_mentor) return res.status(400).end("please check mentor id");
    const selected_students = await StudentSchema.find({ mentor: mentor_id });
    console.log(`selected_students: ${selected_students}`);

    if (selected_students.length === 0) {
      console.log(`No students found for mentor with ID ${mentor_id}`);
      return res.status(404).send('No students found');
    }
    return res.status(200).send(selected_students);
  } catch (err) {
    res.status(500).send(new Error(err).message);
  }

};
exports.listMentorsForStudents =async (req, res) => {
  const student_id = req.params.student_id;
  console.log(`student_id: ${student_id}`);

  try {
       const selected_students = await StudentSchema.findById(student_id);
    console.log(`selected_students: ${selected_students}`);
    if(!selected_students) return res.status(200).end("check the the student id");
    return res.status(200).json(selected_students.mentorlist);
  } catch (err) {
    console.error(`Error in listStudentsForMentor: ${err}`);
    res.status(500).send(new Error(err).message);
  }
};

exports.createMentors = async (req, res) => {
  new_mentor = {
    name: req.body.name,
    email: req.body.email,
  };

  const check_mentor_mail = await MentorSchema.findOne({
    email: new_mentor.email,
  });
  try {
    if (check_mentor_mail) return res.status(400).end("email already exist");
    const mentor = await new MentorSchema(new_mentor);
    mentor.save();
    return res.status(200).json(mentor);
  } catch (err) {
    res.status(500).send(err);
  }
};
exports.createStudents = async (req, res) => {
  new_student = {
    name: req.body.name,
    email: req.body.email,
  };

  const check_student_mail = await StudentSchema.findOne({
    email: new_student.email,
  });
  try {
    if (check_student_mail) return res.status(400).end("email already exist");
    const student = await new StudentSchema(new_student);
    student.save();
    return res.status(200).json(student);
  } catch (err) {
    res.status(500).send(new Error(err).message);
  }
};
exports.addStudentForMentor = async (req, res) => {
  const mentor_id = req.params.mentor_id;
  const student_list = req.body.student;
  
  const check_mentor = await MentorSchema.findById(mentor_id);
  try {
    if ( !check_mentor)
      return res.status(400).end("please check mentor id");
    await StudentSchema.updateMany(
      { _id: { $in: student_list } },
      {
        $set: {
          mentor: mentor_id,
        },
        $addToSet: {
          mentorlist: mentor_id,
        },
      },
      { returnDocument: "after" }
    )
      .then(() => {
         StudentSchema.find({ mentor: mentor_id }).then((student)=>{
        return res.status(200).send(student);
        })
        
      })
      .catch((err) => {
        res.status(500).send(new Error(err).message);
      });
  } catch (err) {
    res.status(500).send(new Error(err).message);
  }
};
exports.addMentorForStudent = async (req, res) => {
  const student_id = req.params.student_id;
  const mentor_id = req.params.mentor_id;

  const check_student = await StudentSchema.findById(student_id);
  const check_mentor = await MentorSchema.findById(mentor_id);
  try {
    if (!check_student || !check_mentor)
      return res.status(400).end("please check student or mentor id");
    const selected_mentor = await StudentSchema.findByIdAndUpdate(
      student_id,
      {
        $set: {
          mentor: mentor_id,
        },
        $addToSet: {
          mentorlist: mentor_id,
        },
      },
      { returnDocument: "after" }
    );
    res.status(200).send(selected_mentor);
  } catch (err) {
    res.status(500).send(new Error(err).message);
  }
};
