import React from 'react';
 import { imgdata } from './imgdata';


function Card(props) {
  
    return ( <div className="card col-md-3 col-5 m-2 shadow-lg d-inline-block">
    <img className="card-img-top" src={imgdata[props.items.id]} alt="Card image"/>
    <div className='card-img-overlay h-25 text-end '>
      <span className="badge bg-primary">{props.items.available}</span></div>
    <div className="card-body">
      <h4 className="card-title">{props.items.name}</h4>
      <p className="card-text"><span className='text-decoration-line-through text-muted'>{props.items.price}</span>
      {props.items.discount}</p>
      <a href="#blank" onClick={props.handleCart} className="btn btn-outline-dark">{props.items.added?'Add to Cart':'remove item'}</a>
    </div>
  </div> );
}

export default Card;