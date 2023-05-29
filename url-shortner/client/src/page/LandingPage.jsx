import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Io from "socket.io-client";
import UrlContext from "../context/UrlContext";

let socket;
function LandingPage() {
  const urlContext = useContext(UrlContext);
  const { getViewCount, viewCount, setViewCount } = urlContext;

  const url = "https://tinyshortner.onrender.com";
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
      <div className="row align-items-center justify-content-end">
        <div className="col-9 col-sm-6  mx-auto my-4">
          <p className="fs-5 fw-bold my-0">welcome to</p>
          <p className="fs-1 fw-bolder">TINYURL</p>
          <span className="fs-5 fw-bold">create free account to enjoy</span>

          <ol>
            <li> Easy Link Shortening</li>
            <li> Full Link History</li>
            <li> Customized TinyURLs</li>
          </ol>

          <div className="d-flex gap-1">
            <ul className="list-group ">
              <li className="list-group-item bg-transparent">
                newuser@user.com
              </li>
              <li className="list-group-item bg-transparent">newuser123</li>
            </ul>
            <Link to="/login" className="btn btn-success align-self-end">
              Enter
            </Link>
          </div>
        </div>
        <div className="col-9 col-sm-5 my-sm-5">
          <h3>
            View Count{" "}
            <span className="ms-1 fs-2 badge bg-success">{viewCount}</span>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
