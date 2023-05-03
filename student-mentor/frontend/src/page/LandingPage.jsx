import React, { useContext, useEffect } from 'react';
import PeopleContext from '../context/context';
import { Link} from 'react-router-dom';
import "./page.css"

function LandingPage(){
    const peopleContext = useContext(PeopleContext)
    const {list_people} =peopleContext
useEffect(()=>{
    list_people();
},[])

    return ( <div className='container-fluid' id='landing_page'>
    <div className='row h-75'>
        <div className='col-11 my-auto'>
            <h1>Please Click here! </h1>
           
        
            <Link  to='/home' className='btn btn-success'>
                welcome
            </Link>
        
           
        </div>
    </div>
</div> );
}

export default LandingPage;