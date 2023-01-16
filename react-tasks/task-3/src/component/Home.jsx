import React from 'react';
import HomeBanner from '../Data/img/img2.png';


function VegHome() {
    return ( <>
    <div id="carouselExampleDark" className="carousel carousel-dark slide mt-5" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
      <div className="carousel-item active " data-bs-interval="10000">
        <div className='d-flex justify-content-center'>
        <div className=" container align-self-center ms-md-5">
                                <div className="text-bg mb-5 pb-5 mb-md-0 pb-md-0 text-center text-md-start">
                                                <h3>Welcome To ENTRO</h3>
                                                <h1 className='text-success fw-bold '>Vegetables Shop</h1>
                                                <p className='fs-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal </p>
                                                <div className='col-lg-7 col mb-lg-1 mb-md-5 '>
                                                <div className="input-group shadow bg-body input-group-lg rounded-1  " style={{zIndex:'5000'}}>
                                                  <input type="text" className="form-control" placeholder="Recipient's" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                                                  <button className="btn btn-success" type="button" id="button-addon2">Search</button>
                                                </div>
                                                </div>
                                               

                                </div>
              </div>

      <img src={HomeBanner} className=" d-none d-md-inline-block w-50 img-fluid " alt="..."/>
    
        </div>
   </div>
    <div className="carousel-item" data-bs-interval="2000">
    <div className='d-flex justify-content-center'>
        <div className=" container align-self-center ms-md-5">
                                <div className="text-bg mb-5 pb-5 mb-md-0 pb-md-0 text-center text-md-start">
                                                <h3>Welcome To ENTRO</h3>
                                                <h1 className='text-success fw-bold'>Vegetables Shop</h1>
                                                <p className='fs-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal </p>
                                                <div className='col-lg-7 col mb-lg-1 mb-md-5 '>
                                                <div className="input-group shadow bg-body input-group-lg rounded-1   " style={{zIndex:'5000'}}>
                                                  <input type="text" className="form-control" placeholder="Recipient's" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                                                  <button className="btn btn-success" type="button" id="button-addon2">Search</button>
                                                </div>
                                                </div>

                                </div>
              </div>

      <img src={HomeBanner} className=" d-none d-md-inline-block w-50 img-fluid " alt="..."/>
    
        </div>
    </div>
    <div className="carousel-item">
    <div className='d-flex justify-content-center'>
        <div className=" container align-self-center ms-md-5">
                                <div className="text-bg mb-5 pb-5 mb-md-0 pb-md-0 text-center text-md-start">
                                                <h3>Welcome To ENTRO</h3>
                                                <h1 className='text-success fw-bold'>Vegetables Shop</h1>
                                                <p className='fs-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal </p>
                                                <div className='col-lg-7 col mb-lg-1 mb-md-5 '>
                                                <div className="input-group shadow bg-body input-group-lg rounded-1  " style={{zIndex:'5000'}}>
                                                  <input type="text" className="form-control" placeholder="Recipient's" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                                                  <button className="btn btn-success" type="button" id="button-addon2">Search</button>
                                                </div>
                                                </div>

                                </div>
              </div>

      <img src={HomeBanner} className=" d-none d-md-inline-block w-50 img-fluid " alt="..."/>
    
        </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon d-none" aria-hidden="true"></span>
    <span className="visually-hidden ">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon d-none" aria-hidden="true"></span>
    <span className="visually-hidden ">Next</span>
  </button>
</div>

    </> );
}

export default VegHome;