import React, { useReducer } from "react";
import axios from "axios";
import UrlReducer from "./UrlReducer";
import UrlContext from "./UrlContext";

function UrlAction(props) {

  const UrlInitialState = {
    urls: [],
    error: [],
    loading: false,
    viewCount: 0,
    tinyUrl: "",
    longUrl: "",
    selectedUrl:"",
    edit:false,
  };

  const [state, dispatch] = useReducer(UrlReducer, UrlInitialState);

  const setLoading = (load) => {
    dispatch({ type: load });
  };
  const setTinyUrl = (tiny) => {
    console.log(tiny);
    dispatch({ type: "SET_TINY", payload: tiny });
  };

  const SetSelectedUrl = (url) => {
    dispatch({ type: "SET_SELECTEDURL", payload: url });
  };

  const setLongUrl = (long) => {
    console.log(long);
    dispatch({ type: "SET_LONG", payload: long });
  };

  const setViewCount = (viewCount) => {
    dispatch({
      type: "GET_VIEWCOUNT",
      payload: viewCount,
    });
  };

  const setEdit = (value) => {
    dispatch({
      type: "SET_EDIT",
      payload: value,
    });
  };

  const updateUrls = (urls) => {
    dispatch({
      type: "GET_URLS",
      payload: [...urls],
    });
  };

  const getUrls = async (token) => {
    try {
      setLoading("SET_LOADING");
      const config = {
        headers: {
          token: token,
        },
      };
      const res = await axios.get(`https://tinyshortner.onrender.com/get_url`, config);
      dispatch({
        type: "GET_URLS",
        payload: [...res.data],
      });
      setLoading("LOADED");
    } catch (error) {
      dispatch({
        type: "ERROR",
        payload: error.response.data,
      });
      setLoading("LOADED");
    }
  };

  const ShortenUrls = async (url,token) => {
    try {
      setLoading("SET_LOADING");
      const config = {
        headers: {
          token: token,
        },
      };
      const res = await axios.post(
        `https://tinyshortner.onrender.com/shorten_url`,
        url,
        config
      );
      dispatch({
        type: "GET_URLS",
        payload: [...res.data],
      });
      setLoading("LOADED");
    } catch (error) {
      setLoading("LOADED");
      dispatch({
        type: "ERROR",
        payload: error.response.data,
      });
     
      alert(error.response.data)
    }
  };

  const editUrl = async (selectedUrl,token) => {
    try {
      setLoading("SET_LOADING");
      const config = {
        headers: {
          token: token,
        },
      };
      const res = await axios.put(
        `https://tinyshortner.onrender.com/edit_shortner`,
        selectedUrl,
        config
      );
      // console.log(res);
      dispatch({
        type: "GET_URLS",
        payload: [...res.data],
      });
      setLoading("LOADED");
      setEdit(false);
    } catch (error) {
      setLoading("LOADED");
      dispatch({
        type: "ERROR",
        payload: error.response.data,
      });
      alert(error.response.data) 
    }
  };

  const deleteUrls = async (id,token) => {
    try {
      setLoading("SET_LOADING");
      const config = {
        headers: {
          token: token,
        },
      };
      const res = await axios.delete(
        `https://tinyshortner.onrender.com/delete_shortner/${id}`,
        config
      );

      dispatch({
        type: "GET_URLS",
        payload: [...res.data],
      });
      setLoading("LOADED");
    } catch (error) {
      console.log(error.response.data);
      dispatch({
        type: "ERROR",
        payload: error.response.data,
      });
      setLoading("LOADED");
    }
  };

  const getViewCount = async () => {
    try {
      setLoading("SET_LOADING");
      const res = await axios.get(`https://tinyshortner.onrender.com/get_viewcount`);
      dispatch({
        type: "GET_VIEWCOUNT",
        payload: res.data,
      });
      setLoading("LOADED");
    } catch (error) {
      dispatch({
        type: "ERROR",
        payload: error.response.data,
      });
      setLoading("LOADED");
    }
  };
  return (
    <UrlContext.Provider
      value={{
        urls: state.urls,
        loading: state.loading,
        // userName: state.userName,
        tinyUrl: state.tinyUrl,
        longUrl: state.longUrl,
        selectedUrl: state.selectedUrl,
        viewCount: state.viewCount,
        edit:state.edit,
        setLoading,
        getUrls,
        ShortenUrls,
        editUrl,
        deleteUrls,
        setTinyUrl,
        setLongUrl,
        updateUrls,
        getViewCount,
        setViewCount,
        SetSelectedUrl,
        setEdit
      }}
    >
      {props.children}
    </UrlContext.Provider>
  );
}

export default UrlAction;
