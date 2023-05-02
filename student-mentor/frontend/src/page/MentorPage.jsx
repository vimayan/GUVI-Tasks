import React,{useContext, useEffect} from "react";
import SideNav from "./SideNav";
import Lists from "../component/list";
import Inputs from "../component/input";
import PeopleContext from "../context/context";

function MentorPage() {
  const peopleContext = useContext(PeopleContext)
  const {list_mentor,list_people,create_mentor,selected_mentor} =peopleContext
  useEffect(()=>{
    if(list_mentor.length===0)  list_people();
  },[])
 const addMentor = (name, email) => {
  if(!name||!email) alert("pls add name and email");
 else{
  const mentor = {name:name,email:email};
  create_mentor(mentor);
 } 
  };
  return (
    <SideNav nav={"MENTORS"}>
      <div className="container-fluid " id="mentor_page">
        <div className="row justify-content-center gap-5">
          <div className="col col-md-5 d-flex flex-column">
            <Inputs button={"Add_Mentor"} handleSubmit={addMentor} />
          </div>
          <div className="col col-md-5 d-flex flex-column">
            <span className="fs-3 fw-bold  badge rounded-pill bg-primary">
              Mentor_List
            </span>
            <Lists name_list = {list_mentor} path={"/mentor"} selectors={selected_mentor}/>
          </div>
        </div>
      </div>
    </SideNav>
  );
}

export default MentorPage;
