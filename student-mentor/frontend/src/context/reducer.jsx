const PeopleReducer = (state, action) => {
  switch (action.type) {
    case "list_mentor":
      return (state = { ...state, list_mentor: action.payload });
    case "list_student":
      return (state = { ...state, list_student: action.payload });
    case "student":
      return (state = { ...state, student: action.payload });
    case "mentor":
      return (state = { ...state, mentor: action.payload });

    case "show_students_forMentor":
      return (state = {
        ...state,
        students_for_selected_mentor: action.payload,
      });
    case "mentor_history_forStudent":
      return (state = {
        ...state,
        history_of_mentor_for_student:action.payload.map((id)=>{
          const sets = state.list_mentor.find(mentor=>mentor._id===id)
          return sets}),
      });
      
      default:
        return state;  
  }
};

export default PeopleReducer;
