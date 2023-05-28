import React, { useEffect } from "react";
import { useContext } from "react";
import UrlContext from "../context/UrlContext";
import { useNavigate } from "react-router-dom";
import Io from "socket.io-client";

let socket;
function UrlList({ urlformdata }) {
  const navigate = useNavigate();

  const url = "http://localhost:4500";

  const urlContext = useContext(UrlContext);
  const { urls, getUrls, updateUrls, deleteUrls, SetSelectedUrl, setEdit } =
    urlContext;
  const token = localStorage.getItem("token");
  const username = localStorage.getItem("username");

  useEffect(() => {
    socket = Io(url);

    socket.on("clickCountUpdated", (urls) => {
      updateUrls(urls);
    });
  }, []);

  useEffect(() => {
    token && username ? getUrls(token) : navigate("/login");
  }, []);

  const deleteUrl = (id) => {
    deleteUrls(id, token);
  };
  const handleEdit = (url) => {
    setEdit(true);
    SetSelectedUrl(url);
    urlformdata.setValues({
      longUrl: url.longUrl,
      tinyUrl: url.tinyUrl,
    });
  };

  return (
    <>
      <ul className="list-group">
        {urls.map((url) => (
          <li
            key={url._id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span className="d-flex gap-1">
              <span className="d-flex flex-column">
                {`http://localhost:4500/${url.tinyUrl}`}
                <span>{url.longUrl} </span>
              </span>

              <span className="badge bg-primary rounded-pill align-self-start d-flex">
                <span className="align-self-center"> Cicks-</span>{" "}
                <span className="fs-6"> {url.clickCount}</span>
              </span>
            </span>

            <div
              className="btn-group"
              role="group"
              aria-label="Basic mixed styles example"
            >
              <button
                onClick={() => handleEdit(url)}
                type="button"
                className="btn btn-sm btn-warning"
              >
                Edit
              </button>
              <button
                onClick={() => deleteUrl(url._id)}
                type="button"
                className="btn btn-sm btn-danger"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default UrlList;
