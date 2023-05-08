import React from 'react';
import { Link} from 'react-router-dom';
function LandingPage() {
    return ( <>
<div className='container-fluid' id='landing_page'>
    <div className='row h-100'>
        <div className='col-11 my-auto '>
            <h1>Please Click here! </h1>
            <div className='btn-group'>
        
            <Link  to='/add_user' className='btn btn-success'>
                addUser
            </Link>
         
            </div>
           
        </div>
       
    </div>
</div>
  
    </> );
}

export default LandingPage;