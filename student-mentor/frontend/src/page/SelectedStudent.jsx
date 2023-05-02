import React, { useContext, useEffect } from 'react';
import SideNav from './SideNav';
import Lists from "../component/list";
import Selector from "../component/selector";
import PeopleContext from '../context/context';
import { useNavigate } from 'react-router-dom';

function SelectedStudentPage() {
  const navigate = useNavigate();
const peopleContext = useContext(PeopleContext)
  const {list_mentor,list_student,student,history_of_mentor_for_student,add_mentor_for_student} =peopleContext

  useEffect(()=>{
    if(list_student.length===0||list_mentor.length===0)  navigate("/home");
  },[])


  const changeMentor=(mentor)=>{
    if(mentor.length!==0) add_mentor_for_student(student,mentor);
    else alert("pls add mentor")

  }
    return ( 
        
        <SideNav nav ={student.name}>
     <div className="container-fluid " id="student_page">
        <div className="row justify-content-center gap-5">
          <div className="col col-md-5 d-flex flex-column">
            <Selector placeholder={"select_mentor"} handleSubmit={changeMentor} button={"Change_Mentor"} type={false} name_list={list_mentor} />
          </div>
          <div className="col col-md-5 d-flex flex-column">
            <span className="fs-3 fw-bold  badge rounded-pill bg-primary">
              Mentor- <span>{list_mentor.find(mentor=>mentor._id===student.mentor)?list_mentor.find(mentor=>mentor._id===student.mentor).name:""}</span>
                           </span>
            <div className='d-flex flex-column mt-4'>
                <span className='fs-4 fw-bold text-start'>Previos mentors:</span>
                <Lists name_list = {history_of_mentor_for_student} path={"/mentor"}/>
            </div>
         
          </div>
        </div>
      </div>
        </SideNav>
        
     );
}

export default SelectedStudentPage;