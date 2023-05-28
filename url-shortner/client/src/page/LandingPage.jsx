import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Io from "socket.io-client";
import UrlContext from "../context/UrlContext";

let socket;
function LandingPage() {
  const urlContext = useContext(UrlContext);
  const { getViewCount, viewCount, setViewCount } = urlContext;

  const url = "http://localhost:4500";
  useEffect(() => {
    getViewCount();
  }, []);
  useEffect(() => {
    socket = Io(url);
    socket.on("viewCountUpdated", (counts) => {
      setViewCount(counts);
    });
  }, []);
  return (
    <div className="container-fluid" id="Landing">
      <div className="row align-items-center">
        <div className="col-6 col-md-4  mx-auto my-5">
          <p className="fs-5 fw-bold my-0">welcome to</p>
          <p className="fs-1 fw-bolder">TINYURL</p>
          <span className="fs-5 fw-bold">create free account to enjoy</span>

          <ol>
            <li> Easy Link Shortening</li>
            <li> Full Link History</li>
            <li> Customized TinyURLs</li>
          </ol>
          <Link to="/login" className="btn btn-success">
            Enter
          </Link>
        </div>
        <div className="col-4 my-5">
          <h3>
            View Count{" "}
            <span className="fs-2 badge bg-success">{viewCount}</span>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
