import React, { useContext, useEffect } from "react";
import SideNav from "./SideNav";
import Lists from "../component/list";
import PeopleContext from "../context/context";


function HomePage() {
  const peopleContext = useContext(PeopleContext)
  const {list_people,list_student,list_mentor} =peopleContext
useEffect(()=>{
  if(list_student.length===0||list_mentor.length===0)  list_people();;
},[list_student,list_mentor])
  return (
    <SideNav nav={"Tutor Hub"}>
      <div className="container-fluid " id="home_page">
        <div className="row justify-content-center gap-5">
          <div className="col col-md-5 d-flex flex-column">
            <span className="fs-3 fw-bold  badge rounded-pill bg-primary">
              Students
            </span>
            <Lists name_list = {list_student} path={"/student"}/>
          
          </div>

          <div className="col col-md-5 d-flex flex-column">
            <span className="fs-3 fw-bold  badge rounded-pill bg-success">
              Mentors
            </span>
            <Lists name_list = {list_mentor} path={"/mentor"}/>
          </div>
        </div>
      </div>
    </SideNav>
  );
}

export default HomePage;
