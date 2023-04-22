import React from 'react';
import * as yup from "yup";
import RegisterBanner from "../data/login.jpg"
import { Link } from 'react-router-dom';
import { useFormik} from 'formik';
import { useNavigate } from "react-router-dom";





function Login({userList}) {

const navigate = useNavigate();
   

    const loginformdata =useFormik({
        initialValues:{

            email:'',
            password:'',
       
        },
        validationSchema:yup.object({
            email:yup.string().required('Email is required').email(),
            password:yup.string().required('Email is required').min(6,'enter minimum 6 char').required('password is required'),
        }),
        onSubmit:(userdata)=>{
         const user  = userList.find(element => element.email===userdata.email);
         const password =   userList.find(element =>element.password===userdata.password);
         
             if(!user){
                alert('email is not exist')}
               else if(!password){
                    alert('password does not match')}
                    else  navigate('/home');
         

            
         
        }
        
    })
   



    return (  <>
     <div className="container-fluid bg-dark text-white" id='login_page'>
     <div className="row">
                                 <img className='img-fluid col-md-5 d-none d-md-block ' src={RegisterBanner} alt="none" />
                                   <div className="col-lg-6 col-md p-5 align-self-center d-flex flex-column">
                       
                            <div className="text-center">
                                <h4 className="mb-4">Welcome !</h4>
                            </div>

                      <form className="user" onSubmit={loginformdata.handleSubmit}>
  
                                <div className="form-group" >
                                    <input type="email" className="form-control form-control-user rounded-5 p-2 mb-3 text-center"
                                    placeholder="Enter Email Address..." name='email'  value={loginformdata.values.email} onChange={loginformdata.handleChange}/>
                                        
                                         {loginformdata.errors.email?<div  className='text-danger'>{loginformdata.errors.email}</div>:<></>}
                                </div>
                                <div className="form-group d-flex ">
                                    
                                    <input type="password" className=" form-control form-control-user rounded-5 p-2 my-2 text-center  "
                                        id="password" placeholder="Password"  name='password'  value={loginformdata.values.password} onChange={loginformdata.handleChange}/>
                                        
                               
                                </div>
                                
                                {loginformdata.errors.password?<div  className='text-danger'>{loginformdata.errors.password}</div>:<></>}
                                    
                              
                                        <button className=" col-4 btn btn-danger rounded-pill my-3 mx-auto "  type='submit'>
                                    <i className="fab fa-google fa-fw"></i>Login</button>        
                                
                        
                    </form>
                          
                            <div className="text-center">
                                <Link  to='/register' className=" small text-white text-decoration-none" >Create an Account!</Link>
                            </div>
                       
                                 </div>
                            </div>
        

    </div>
    </>);
}

export default Login;