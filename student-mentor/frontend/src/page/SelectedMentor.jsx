import React, { useContext, useEffect } from "react";
import SideNav from "./SideNav";
import Lists from "../component/list";
import Selector from "../component/selector";
import PeopleContext from "../context/context";
import { useNavigate } from "react-router-dom";

function SelectedMentorPage() {
  const navigate = useNavigate()
  const peopleContext = useContext(PeopleContext)
  const {list_mentor,list_student,mentor,students_for_selected_mentor,add_students_for_mentor} =peopleContext
  useEffect(()=>{
    if(list_mentor.length===0)  navigate("/home");
  },[])


  const addStudent=(student)=>{
    if(student.length===0) alert("please select student");
    
    else add_students_for_mentor(mentor,student);
}
  return (
    <SideNav nav={mentor.name}>
      <div className="container-fluid " id="mentor_page">
        <div className="row justify-content-center gap-5">
          <div className="col col-md-5 d-flex flex-column">
            <Selector placeholder={"select_student"} handleSubmit={addStudent} type={true} button={"Add_Student"} name_list={list_student}/>
          </div>
          <div className="col col-md-5 d-flex flex-column">
            <span className="fs-3 fw-bold  badge rounded-pill bg-primary">
              Student_List
            </span>
            <Lists name_list = {students_for_selected_mentor} path={"/student"}/>
          </div>
        </div>
      </div>
    </SideNav>
  );
}

export default SelectedMentorPage;
