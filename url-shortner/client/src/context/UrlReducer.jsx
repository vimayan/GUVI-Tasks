const UrlReducer = (state, action) => {
  switch (action.type) {
    case "GET_URLS":
      return {
        ...state,
        urls: [...action.payload],
      };
    case "GET_VIEWCOUNT":
      return {
        ...state,
        viewCount: action.payload,
      };
    case "SET_TINY":
      return {
        ...state,
        tinyUrl: action.payload,
      };
    case "SET_LONG":
      return {
        ...state,
        longUrl: action.payload,
      };

    case "SET_SELECTEDURL":
      return {
        ...state,
        selectedUrl: action.payload,
      };

    case "SET_EDIT":
      return {
        ...state,
        edit:action.payload,
      };

    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };

    case "LOADED":
      return {
        ...state,
        loading: false,
      };

    case "ERROR":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default UrlReducer;
