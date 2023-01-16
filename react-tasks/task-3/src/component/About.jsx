import React from 'react';
import Banner from '../Data/img/about.jpg'
function VegShopAbout() {
    return ( <>
  <div className="container mt-5 shadow " id='About'>
    <div className="row align-items-center">
      <div className=" col-lg-6 col-sm-12  text-center pb-5 pb-lg-1 ">
          <h2 className='fs-1 fw-bolder badge bg-success mb-5'>About us</h2>
          <p>It is a long established fact that a reader will be distracted by the
             readable content of a page when looking at its layout. The point of 
             using Lorem Ipsum is that it has a more-or-less normal distribution 
             of letters, as opposed to using 'Content here, content here', making
              it look like readable English. Many desktop publishing packages 
              andIt is a long established fact that a reader will be distracted
               by the readable content of a page when looking at its layout. 
               The point of using Lorem Ipsum is that it has a more-or-less 
               normal distribution of letters, as opposed to using 'Content here, 
               content here', making it look like readable English. Many</p>
          <a href="#void" className='badge rounded-pill bg-warning fs-5 text-decoration-none mt-3'>Read more</a>
      </div>
      <div className="col  ">
          <img className='float-end img-fluid ' src={Banner} alt="#" />
      </div>
    </div>

  </div>
    </> );
}

export default VegShopAbout;