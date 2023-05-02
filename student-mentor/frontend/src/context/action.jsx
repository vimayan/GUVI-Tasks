import React, { useReducer } from "react";
import PeopleReducer from "./reducer";
import PeopleContext from "./context";
import axios from "axios";

const PeopleAction = (props) => {
  const initialstate = {
    list_student: [],
    list_mentor: [],
    student: "",
    mentor: "",
    students_for_selected_mentor: [],
    history_of_mentor_for_student: [],
  };
  const [state, dispatch] = useReducer(PeopleReducer, initialstate);

  const list_people = async () => {
    const res = await axios.get("https://student-mentor-0a6k.onrender.com/people");
    // console.log(res.data);
    dispatch({ type: "list_mentor", payload: res.data.mentors });
    dispatch({ type: "list_student", payload: res.data.students });
  };
  const selected_student = (student) => {
    dispatch({ type: "student", payload: student });
  };
  const selected_mentor = (mentor) => {
    dispatch({ type: "mentor", payload: mentor });
  };

  const create_student = async (student) => {
    try {
      const res = await axios.post(
        "https://student-mentor-0a6k.onrender.com/create_students",
        student
      );
      // console.log(res.data);
      dispatch({ type: "list_student", payload: res.data });
      alert("student created");
    } catch (err) {
      alert(err.response.data);
      console.log(new Error(err).message);
    }
  };

  const create_mentor = async (mentor) => {
    try {
      const res = await axios.post(
        "https://student-mentor-0a6k.onrender.com/create_mentors",
        mentor
      );
      // console.log(res.data);
      dispatch({ type: "list_mentor", payload: res.data });
      alert("mentor created");
    } catch (err) {
      alert(err.response.data);
      console.log(new Error(err).message);
    }
  };

  const student_list_for_selected_mentor = async (mentor) => {
    try {
      const res = await axios.get(
        `https://student-mentor-0a6k.onrender.com/${mentor}/list_students`
      );
      dispatch({ type: "show_students_forMentor", payload: res.data });
      // console.log(res.data);
    } catch (err) {
      dispatch({ type: "show_students_forMentor", payload: [] });
      console.log(new Error(err).message);
    }
  };

  const mentor_list_for_selected_student = (student) => {
    dispatch({
      type: "mentor_history_forStudent",
      payload: student.mentorlist,
    });
  };

  const add_students_for_mentor = async (mentor, student_ids) => {
    try {
      const res = await axios.post(
        `https://student-mentor-0a6k.onrender.com/${mentor._id}/add_student`,
        { student: student_ids }
      );
      dispatch({ type: "show_students_forMentor", payload: res.data });
      // console.log(res.data);
    } catch (err) {
      alert(err.response.data);
      dispatch({ type: "show_students_forMentor", payload: [] });
      console.log(new Error(err).message);
    }
  };

  const add_mentor_for_student = async (student, mentor) => {
    // console.log(mentor);
    try {
      const res = await axios.post(
        `https://student-mentor-0a6k.onrender.com/${student._id}/add_mentor/${mentor[0]}`
      );
      dispatch({ type: "mentor_history_forStudent", payload: res.data.mentorlist });
      dispatch({ type: "student", payload: res.data });
      alert("mentor added");
    } catch (err) {
      alert(err.response.data);
      console.log(new Error(err));
    }
  };

  return (
    <PeopleContext.Provider
      value={{
        list_student: state.list_student,
        list_mentor: state.list_mentor,
        students_for_selected_mentor: state.students_for_selected_mentor,
        mentor_for_selected_student: state.mentor_for_selected_student,
        history_of_mentor_for_student: state.history_of_mentor_for_student,
        student: state.student,
        mentor: state.mentor,
        list_people,
        create_student,
        create_mentor,
        student_list_for_selected_mentor,
        mentor_list_for_selected_student,
        add_students_for_mentor,
        add_mentor_for_student,
        selected_student,
        selected_mentor,
      }}
    >
      {props.children}
    </PeopleContext.Provider>
  );
};

export default PeopleAction;
