import React from 'react';
import Logo from '../Data/img/logo.png'


function ShopFooter() {
    return ( <>


        <div className="container-fluid mt-5  px-5 text-white" style={{background:"#3b3b3b"}}>
            <div className="row mx-5 py-4 px-5 ">
                            <div className="col-md-12 mb-4">
                            <a href="#" > <img src={Logo} alt="#"/></a>
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 ">
                                    <div className="row">
                                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 ">
                                        
                                            <h2>Address </h2>
                                            <ul className="list-unstyled">
                                            <li >
                                                It is a long established fact 
                                                <br/>that a reader will be  </li>
                                                <li>
                                               (+71 1234567890) </li>
                                                <li>
                                                   praroz@gmail.com</li>
                                                </ul>
                                              
                                            </div>
                                            <div className="col-lg-4 col-md-6 col-sm-6">
                                                
                                                <h2>Social Link</h2>
                                                <ul className="list-unstyled fs-5">
                                                    <li > <a className='text-decoration-none text-white' href="#"><i className="fa-brands fa-twitter me-2"></i>Twitter</a> </li>
                                                    <li><a   className='text-decoration-none text-white' href="#"> <i className="fa-brands fa-facebook me-2"></i>Facebook</a> </li>
                                                    <li><a  className='text-decoration-none text-white'  href="#"><i className="fa-brands fa-instagram me-2"></i>Instagram</a> </li>
                                                    <li><a  className='text-decoration-none text-white' href="#"><i className="fa-brands fa-linkedin me-2"></i>Linkdin</a> </li>
                                                </ul>
                                            
                                            </div>
                                            

                                            <div className="col-lg-4 col-md-6 col-sm-6 ">
                                              
                                                <h2>Newsletter</h2>
                                                <div className="input-group mb-3">
  <input type="text" className="form-control" placeholder="Recipient's username" aria-label="enter mail" aria-describedby="button-addon2"/>
  <button className="btn btn-success" type="button" id="button-addon2">Subcribe</button>
</div>
                                                </div>
                                           
                                        </div>
                                </div>

                </div>

        </div>

        
              
        <div className="container-fluid bg-success text-white text-center fs-5 ">
  <div className="jumbotron py-4 ">
  <p className='m-0 '>Copyright © 2021 Design by <a className='text-decoration-none text-white' href="https://www.youtube.com/channel/UCc5GjlNTdSV4ZZCsX61mccg">PraRoz Channel </a></p>
  </div>

        </div>
              
           
          
    </> );
}

export default ShopFooter;