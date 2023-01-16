import React from 'react';
import VegBanner1 from '../Data/img/v1.jpg';
import VegBanner2 from '../Data/img/v2.jpg';

function ShopVegetables() {
    return (<>
    <div id="Vegetable" className=" mb-5">
  <div className="container ">
    <div className="row ">
      <div className="col-md-12 text-center fs-1 fw-bolder my-5">
          <span> FRESH <strong className="text-success">VEGETABLES</strong> </span>
      </div>
    </div>
    <div className="row m-5 m-sm-0">
      <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12 ">
      
          <h2>Best Vegetables Shop</h2>
          <p className='fs-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages andIt is a long established fact that a reader will be distracted </p>
       
      </div>
       <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12  ">
        <div className="d-flex position-relative   ">
       <img src={VegBanner1} className = 'w-100' alt="#"/>
         <span className=' badge rounded-circle p-4 fs-6 bg-success position-absolute 
         align-self-center start-100 translate-middle-x '>01</span>
        </div>
      </div>
       <div className="col-md-8 col-sm-12 d-none d-md-block mt-n3">
        <div className="d-flex position-relative">
         <img src={VegBanner2 } className='w-100 img-fluid' alt="#"/>
         <span className=' badge rounded-circle p-4 fs-6 bg-success position-absolute 
         align-self-center start-100 translate-middle-x '>02</span>
        </div>
      </div>
    </div>
  </div>
</div></>  );
}

export default ShopVegetables;