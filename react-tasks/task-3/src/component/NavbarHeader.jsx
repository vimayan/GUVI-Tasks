import React from 'react';
import Logo from '../Data/img/logo.png';
import { Link,Outlet } from 'react-router-dom';

function VegShopmenu(props) {

    return ( <>
    <nav className="navbar navbar-expand-md navbar-light">
    <div className="container-md">
      <Link className="navbar-brand" to="/"><img src={Logo} alt="here logo" className='img-thumbnail bg-dark img-fluid w-50'  /></Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="mynavbar">
        <ul className="navbar-nav  text-start text-nowrap">
          <li className="nav-item">
            <Link to='/' className="nav-link">{props.navmenu.home}</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#About">{props.navmenu.about}</a>
          </li>
          {props.navmenu.page==='home'?   <li className="nav-item">
            <Link className="nav-link" to="/market">{props.navmenu.store}</Link>
          </li> :<li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#none" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          {props.navmenu.store[0]}
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
           <Link to='/market' className='dropdown-item text-decoration-none'> {props.navmenu.store[1]} </Link>
            <li><a className="dropdown-item" href="#none">{props.navmenu.store[2]}</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#none">{props.navmenu.store[0]}</a></li>
          </ul>
        </li>}
        <li className="nav-item">
            <a className="nav-link" href="#Vegetable">{props.navmenu.vegetables}</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Contact">{props.navmenu.Contact}</a>
          </li>
              
        </ul>
        {props.navmenu.page==='market'?  <div className="input-group mx-md-5 mb-3 mb-md-auto w-50">
  <input type="text" className="form-control" placeholder="Recipient's username" aria-label="enter mail" aria-describedby="button-addon2"/>
  <button className="btn btn-success" type="button" id="button-addon2">VegSearch</button>
</div>:<></>}

      
        <form className="d-flex mt-1 ms-auto text-nowrap">
          {props.navmenu.page==='home' ? (props.isloggedin ?<button className="btn btn-outline-primary fw-bold" onClick={props.setIsloggedin} type="button">User<i className="fa-solid fa-user-check ms-2"></i>
          </button> : <Link  to="/login"  onClick={props.setIsloggedin}> <button className="btn btn-outline-primary fw-bold"     type="button">Sign Up<i className="fa-solid fa-user-check ms-2"></i>
          </button>  </Link> ):
          <button className="btn btn-outline-dark" type="button" onClick={props.showCartDetails}><i className="fa-sharp fa-solid fa-cart-arrow-down pe-1"></i>Cart
          <span className="badge bg-primary ms-1 rounded-circle" >{props.cartValue}</span></button>
        }
        
        </form>
       

      </div>
    </div>
  </nav>
  <Outlet/>
   </> );
}

export default VegShopmenu;