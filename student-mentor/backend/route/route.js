const route = require("express").Router();
const {listPeople,
    listStudentsForMentor,
    listMentorsForStudents,
    createMentors,
    createStudents,
    addStudentForMentor,
    addMentorForStudent
} = require('../controller/action')

route.get("/",(req,res)=>{
    res.status(200).end("welcome to the institue")
})

route.get("/people",listPeople);

route.get("/:mentor_id/list_students",listStudentsForMentor);
route.get("/:student_id/mentors_history",listMentorsForStudents);

route.post("/create_mentors",createMentors);
route.post("/create_students",createStudents);

route.post("/:mentor_id/add_student",addStudentForMentor);
route.post("/:student_id/add_mentor/:mentor_id",addMentorForStudent);

route.use("*",(req,res)=>{
    res.status(404).send("page not exist")

});


module.exports = route