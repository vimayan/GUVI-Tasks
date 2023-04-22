import React from 'react';
import * as yup from "yup";
import RegisterBanner from "../data/register.webp"
import { Link } from 'react-router-dom';
import { useFormik} from 'formik';
import { useNavigate } from "react-router-dom";





function Register({Adduser}) {

const navigate = useNavigate();
   

    const loginformdata =useFormik({
        initialValues:{
            username:'',
            email:'',
            password:'',
            age:'',
        },
        validationSchema:yup.object({
            username:yup.string().required('Email is required').max(16),
            email:yup.string().required('Email is required').email(),
            password:yup.string().required('Email is required').min(6,'enter minimum 6 char').required('password is required'),
            age:yup.number().min(18).max(100).required()
        }),
        onSubmit:(userdata)=>{
            Adduser(userdata)
         navigate('/login')
  
            
         
        }
        
    })
   



    return (  <>
     <div className="container-fluid bg-dark text-white register_page"  id='register_page'>
     <div className="row">
                                 <img className='img-fluid col-md-5 d-none d-md-block ' src={RegisterBanner} alt="none" />
                                   <div className="col-lg-6 col-md p-5 align-self-center d-flex flex-column">
                       
                            <div className="text-center">
                                <h4 className="mb-4">Welcome !</h4>
                            </div>

                      <form className="user" onSubmit={loginformdata.handleSubmit}>
                            <div className="form-group d-flex">
                                    <input type="text" className=" form-control form-control-user rounded-5 p-2 my-2 text-center"
                                        placeholder="Enter Username..."  name='username' value={loginformdata.values.username} onChange={loginformdata.handleChange}/>

                                        {loginformdata.errors.name?<div  className='text-danger'>{loginformdata.errors.name}</div>:<></>}
                                       
                                </div>
                                <div className="form-group" >
                                    <input type="email" className="form-control form-control-user rounded-5 p-2 mb-3 text-center"
                                    placeholder="Enter Email Address..." name='email'  value={loginformdata.values.email} onChange={loginformdata.handleChange}/>
                                        
                                         {loginformdata.errors.email?<div  className='text-danger'>{loginformdata.errors.email}</div>:<></>}
                                </div>
                                <div className="form-group d-flex ">
                                    
                                    <input type="password" className=" form-control form-control-user rounded-5 p-2 my-2 text-center  "
                                        id="password" placeholder="Password"  name='password'  value={loginformdata.values.password} onChange={loginformdata.handleChange}/>
                                        
                                     <input type="text" className=" form-control form-control-user rounded-5 p-2 my-2 text-center w-25 "
                                        placeholder="age" id='age'   value={loginformdata.values.age} onChange={loginformdata.handleChange}/>

                               
                                </div>
                                
                                {loginformdata.errors.password?<div  className='text-danger'>{loginformdata.errors.password}</div>:<></>}
                                        {loginformdata.errors.age?<div  className='text-danger'>{loginformdata.errors.age}</div>:<></>}
                              
                                        <button className=" btn  btn-danger rounded-pill my-3 w-75 mx-auto "  type='submit'>
                                    <i className="fab fa-google fa-fw"></i> register</button>        
                                
                        
                    </form>
                          
                            <div className="text-center">
                                <Link  to='/login' className=" small text-white text-decoration-none" >login an Existing Account!</Link>
                            </div>
                       
                                 </div>
                            </div>
        

    </div>
    </>);
}

export default Register;