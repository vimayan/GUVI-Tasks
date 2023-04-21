import React, { useState } from "react";
import { Link } from "react-router-dom";

function AddUser({UpdateUser,currentUser,index,Adduser}) {
  // console.log(currentUser);

  const [user,setUser]=useState(currentUser?currentUser:{ name:'',
  email:'',
  password:'',
  address:''})

const handlechange = (e)=>{
  setUser ({...user,[e.target.name]:e.target.value})
}


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
            <form className="row g-3" >
              <div className="col-md-6 d-flex gap-2 align-items-center">
                <label htmlFor="inputName" className="form-label badge bg-secondary py-2 ">
                  Name
                </label>
                <input type="text" className="form-control" id="inputName"
                name="name" value={user.name} onChange={handlechange} required />
              </div>
              <div className="col-md-6 d-flex gap-2">
                <label htmlFor="inputEmail4" className="form-label badge bg-secondary py-2">
                  Email
                </label>
                <input type="email" className="form-control" id="inputEmail4" 
                  name="email" value={user.email} onChange={handlechange} required />
              </div>
              <div className="col-md-6 d-flex gap-2">
                <label htmlFor="inputPassword4" className="form-label badge bg-secondary py-2">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword4"
                  name="password"
                  value={user.password}
                  onChange={handlechange}
                  required
                />
              </div>
              <div className="col-12 d-flex gap-2">
                <label htmlFor="inputAddress" className="form-label badge bg-secondary py-2">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress"
                  placeholder="1234 Main St"
                  name="address"
                  value={user.address}
                  onChange={handlechange}
                />
              </div>

              <div className="col-3 mx-auto btn-group">
                <button onClick={(e)=>{ e.preventDefault();Adduser(user);}} className="btn btn-primary">
                  ADD
                </button>
               { currentUser?
                <button className="btn btn-warning" onClick={(e)=>{e.preventDefault();UpdateUser(user,index);}}>
                  Update
                </button>:<></>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddUser;
