import React,{useContext, useEffect} from "react";
import SideNav from "./SideNav";
import Lists from "../component/list";
import Inputs from "../component/input";
import PeopleContext from "../context/context";

function StudentPage() {
  const peopleContext = useContext(PeopleContext)
  const {list_people,list_student,create_student} =peopleContext


  useEffect(()=>{
    if(list_student.length===0)  list_people();
  },[])
  const addStudent = (name, email) => {
if(!name||!email) alert("pls add name and email");
 else{
  const student = {name:name,email:email}
  create_student(student);
 }  
  };

  return (
    <SideNav nav={"STUDENTS"}>
      <div className="container-fluid " id="student_page">
        <div className="row justify-content-center gap-5">
          <div className="col col-md-5 d-flex flex-column">
            <Inputs button={"Add_Student"} handleSubmit={addStudent} />
          </div>
          <div className="col col-md-5 d-flex flex-column">
            <span className="fs-3 fw-bold  badge rounded-pill bg-primary">
              Student_List
            </span>
            <div className="d-flex flex-column">
            <Lists name_list = {list_student} path={"/student"}/>
            </div>
          </div>
        </div>
      </div>
    </SideNav>
  );
}

export default StudentPage;
