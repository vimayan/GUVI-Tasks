import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";

function AddUser({ UpdateUser, currentUser, index, Adduser }) {
  const [userUpdate, setUserUpdate] = useState(false);

  const addFormData = useFormik({
    initialValues: currentUser
      ? currentUser
      : {
          username: "",
          email: "",
          password: "",
          age: "",
        },
    validationSchema: yup.object({
      username: yup.string().required("Email is required").max(16),
      email: yup.string().required("Email is required").email(),
      password: yup
        .string()
        .required("Email is required")
        .min(6, "enter minimum 6 char")
        .required("password is required"),
      age: yup.number().min(18).max(100).required(),
    }),
    onSubmit: (userdata) => {
      if (userUpdate) {
        UpdateUser(userdata, index);
      } else {
        Adduser(userdata);
      }
      setUserUpdate(false);
    },
  });

  return (
    <>
      <div className="container-fluid p-3 bg-dark text-white" id="adduser">
        <div className="row">
          <div className="col col-sm-4 text-danger">
            <Link to="/home" className="btn btn-success">
              Home
            </Link>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row my-3">
          <div className="col">
            <form className="row g-3">
              <div className="col-md-6 d-flex gap-2 align-items-center">
                <label
                  htmlFor="username"
                  className="form-label badge bg-secondary py-2 "
                >
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  name="username"
                  value={addFormData.values.username}
                  onChange={addFormData.handleChange}
                  required
                />
              </div>
              <div className="col-md-6 d-flex gap-2">
                <label
                  htmlFor="inputEmail4"
                  className="form-label badge bg-secondary py-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail4"
                  name="email"
                  value={addFormData.values.email}
                  onChange={addFormData.handleChange}
                  required
                />
              </div>
              <div className="col-md-6 d-flex gap-2">
                <label
                  htmlFor="inputPassword4"
                  className="form-label badge bg-secondary py-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword4"
                  name="password"
                  value={addFormData.values.password}
                  onChange={addFormData.handleChange}
                  required
                />
              </div>
              <div className="col-12 d-flex gap-2">
                <label
                  htmlFor="inputAge"
                  className="form-label badge bg-secondary py-2"
                >
                  Age
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="inputAge"
                  placeholder="25"
                  name="age"
                  value={addFormData.values.age}
                  onChange={addFormData.handleChange}
                />
              </div>

              <div className="col-3 mx-auto btn-group">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    addFormData.handleSubmit();
                  }}
                  className="btn btn-primary"
                >
                  ADD
                </button>
                {currentUser ? (
                  <button
                    className="btn btn-warning"
                    onClick={(e) => {
                      e.preventDefault();
                      setUserUpdate(true);
                      addFormData.handleSubmit();
                    }}
                  >
                    Update
                  </button>
                ) : (
                  <></>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddUser;
