import React from 'react';
import { Link } from 'react-router-dom';
import LoginBanner from '../Data/img/login.jpg'
function UserLogin() {
    return (  <>
     <div className="container-fluid bg-primary" >

<div className="row justify-content-center p-5 fw-light">

    <div className="col-xl-8 col-lg-10 col-md-9 m-4 ">

        <div className="card  border-0 shadow-lg ">
            <div className="card-body p-0">
               
                <div className="row">
                     <img className='img-fluid col-lg-6 d-none d-lg-block ' src={LoginBanner} alt="none" />
                    <div className="col-lg-6 p-5">
                       
                            <div className="text-center">
                                <h4 className="mb-4">Welcome Back!</h4>
                            </div>
                            <form className="user">
                                <div className="form-group" >
                                    <input type="email" className="form-control form-control-user rounded-5 p-3 mb-3"
                                        id="exampleInputEmail" aria-describedby="emailHelp"
                                        placeholder="Enter Email Address..."/>
                                </div>
                                <div className="form-group">
                                    <input type="password" className=" form-control form-control-user rounded-5 p-3 my-2"
                                        id="exampleInputPassword" placeholder="Password" />
                                </div>
                                <div className="form-group mb-2">
                                    <div className="custom-control custom-checkbox small">
                                        <input type="checkbox" className="custom-control-input ms-3 me-1 " id="customCheck" />
                                        <label className="custom-control-label text-secondary" htmlFor="customCheck" >Remember
                                            Me</label>
                                    </div>
                                </div>
                                <Link to="/market" className="btn btn-primary d-block rounded-pill">
                                    Login
                                </Link>
                                <hr/>
                                <Link to="/market" className="small btn btn-google btn-danger d-block rounded-pill mb-3">
                                    <i className="fab fa-google fa-fw"></i> Login with Google
                                </Link>
                                <Link to="/market" className="btn btn-facebook btn-warning d-block rounded-pill ">
                                    <i className="fab fa-facebook-f fa-fw"></i> Login with Facebook
                                </Link>
                            </form>
                            <hr/>
                            <div className="text-center">
                                <Link to='/market' className="small text-decoration-none" >Forgot Password?</Link>
                            </div>
                            <div className="text-center">
                                <Link  to='/market' className="small text-decoration-none" href="register.html">Create an Account!</Link>
                            </div>
                       
                    </div>
                </div>
            </div>
        </div>

    </div>

</div>

</div>
    </>);
}

export default UserLogin;