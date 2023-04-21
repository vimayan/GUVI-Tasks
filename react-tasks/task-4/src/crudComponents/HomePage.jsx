import React from "react";
import { Link } from "react-router-dom";
function HomePage({userList}) {
  console.log(userList);
  return (
    <>
      <div className="container-fluid p-3 bg-dark text-white" id="adduser">
        <div className="row">
          <div className="col col-sm-4 text-danger">
            <span className="fs-3 fw-bold bg-white rounded-circle px-2">V</span>
          </div>
          <div className="col col-sm-3 btn-group">
            <Link to="/adduser" className="btn btn-success">
              AddUser
            </Link>
            <Link to="/userlists" className="btn btn-info">
              userList
            </Link>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">

          {userList.map((user,index)=><div key={index} className="row text-start"  >

<h4>{user.name}</h4>
    <h6>email:{user.email}</h6>
    <p>password:{user.password}</p>
    <p>address:{user.address}</p> 


</div>)}
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
