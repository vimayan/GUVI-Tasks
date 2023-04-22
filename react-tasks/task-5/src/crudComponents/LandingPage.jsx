import React from 'react';
import { Link } from 'react-router-dom';
function LandingPage() {
    return ( <>
<div className='container-fluid' id='landing_page'>
    <div className='row h-75'>
        <div className='col-11 my-auto'>
            <h1>Please Click here! </h1>
            <div className='btn-group'>
        
            <Link  to='/register' className='btn btn-success'>
                register
            </Link>
           
            
            <Link  to='/login' className='btn btn-info'>
                Login
            </Link>
         
            </div>
           
        </div>
    </div>
</div>
  
    </> );
}

export default LandingPage;