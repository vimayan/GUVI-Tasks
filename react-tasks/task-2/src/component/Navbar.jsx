import React from 'react';
import Logo from'../img/logo.png'




function Navbarnew(props) {

   return (
    <nav className="navbar navbar-expand-md navbar-light">
    <div className="container-md">
      <a className="navbar-brand" href="#none"><img src={Logo} alt="here logo" className='img-thumbnail bg-dark img-fluid w-50'  /></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="mynavbar">
        <ul className="navbar-nav me-auto text-start">
          <li className="nav-item">
            <a className="nav-link" href="#none">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#none">About</a>
          </li>
          <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#none" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Shop
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#none">All Products</a></li>
            <li><a className="dropdown-item" href="#none">Product Items</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#none">New Arrivals</a></li>
          </ul>
        </li>
              
        </ul>
        <form className="d-flex mt-1">
          <button className="btn btn-outline-dark" type="button"><i className="fa-sharp fa-solid fa-cart-arrow-down pe-1"></i>Cart
          <span className="badge bg-primary ms-1 rounded-circle">{props.cartValue}</span></button>
        </form>
      </div>
    </div>
  </nav>
  );
}

export default Navbarnew;