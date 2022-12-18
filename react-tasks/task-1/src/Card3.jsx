import React from 'react';


function Card() {
    return (  
      <div className="col-lg-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title text-muted text-uppercase text-center">Pro</h5>
          <h6 className="card-price text-center">$49<span className="period">/month</span></h6>
          <hr/>
          <ul className="fa-ul">
            <li><span className="fa-li"><i className="fas fa-check"></i></span><strong>Unlimited Users</strong>
            </li>
            <li><span className="fa-li"><i className="fas fa-check"></i></span>150GB Storage</li>
            <li><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited Public Projects</li>
            <li><span className="fa-li"><i className="fas fa-check"></i></span>Community Access</li>
            <li><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited Private Projects</li>
            <li><span className="fa-li"><i className="fas fa-check"></i></span>Dedicated Phone Support</li>
            <li><span className="fa-li"><i className="fas fa-check"></i></span><strong>Unlimited</strong> Free
              Subdomains</li>
            <li><span className="fa-li"><i className="fas fa-check"></i></span>Monthly Status Reports</li>
          </ul>
          <div className="d-grid">
            <a href="#" className="btn btn-primary text-uppercase">Button</a>
          </div>
        </div>
      </div>
    </div>
 

    );
}

export default Card;