
 import React, { useState } from 'react';
import { Link,Outlet } from 'react-router-dom';



 



function ShopCart(props) {
        
 

    const [cartWeight,setCartWeight] = useState([0])

     function addCartWeight(Items) {
        if(cartWeight[Items.id]){
        let NewcartWeight = [...cartWeight]
        let index = Items.id; 
      
       
      NewcartWeight[index]=NewcartWeight[index]+1

        console.log( NewcartWeight);
      setCartWeight(NewcartWeight)
        }
        else{
            let NewcartWeight = [...cartWeight]
            let index = Items.id; 
            NewcartWeight[index]=1;
            NewcartWeight[index]=NewcartWeight[index]+1

        console.log( NewcartWeight);
      setCartWeight(NewcartWeight)
          

        }

    }

   function decreaseCartWeight(Items){
    let NewcartWeight = [...cartWeight]
    let index = Items.id; 
    
  NewcartWeight[index]=NewcartWeight[index]-1

    console.log( NewcartWeight);
  setCartWeight(NewcartWeight)


   }


    console.log('child');
    return ( <>
    <div className="container my-5">
        <div className="row  gap-4 align-items-center">
                        <div className="col col-lg-4  " >

                        
                        {props.addToCart.map((Items,index) =>

              
                                                                <div className='container '>
                                                                                            <div className="row justify-content-center  mb-1 " key={Items.id} >
                                                                                                            
                                                                                                            
                                                                                                            <div className="col-6 d-flex align-items-center gap-4   ">
                                                                                                                <span className=' badge bg-danger fw-bolder '>
                                                                                                                {index+1}
                                                                                                                </span>
                                                                                                                <span className=' badge bg-success fw-bolder rounded-pill'>
                                                                                                                {Items.name}
                                                                                                                </span>
                                                                                                                </div>
                                                                                                            <div className="col-4  d-flex gap-2 align-items-center">

                                                                                                          
                                                                                                                <button onClick={()=>addCartWeight(Items)} className='btn btn-primary btn-sm '>+</button>
                                                                                                                <span className=' badge bg-success fw-bolder rounded-pill'>
                                                                                                                {!(cartWeight[Items.id])?1:cartWeight[Items.id]}kg
                                                                                                                </span>
                                                                                                                <button onClick={()=>decreaseCartWeight(Items)} className='btn btn-info btn-sm'>-</button>
                                                                                                            </div>
                                                                                            </div>

                                                                </div>

                                                      

                                                     )}

                        {props.addToCart.length===0?<span className='badge rounded-1 bg-danger '>please add item to Cart</span>:<></>}
                    
                    </div>




              <div className=' col-10 col-lg  d-flex flex-column mt-4 mt-md-auto ms-auto '>
                <div className='d-flex gap-5 mb-4  '> 
                <span className='badge rounded-1 bg-dark align-self-start   '>
                  deliver to
                  
                  </span>
                  <Link to='/address' className='badge rounded-1 bg-success p-1 text-decoration-none  ms-5  ' >  addnew </Link>


                </div>
                  
                 
                                {
                                  props.deliver_to.map(list=>
                                //console.log(list);
                                                        <div className='col-7 mb-4 ms-5 d-flex gap-3 text-start' key={list.phone}>
                                                             
                                                              <input type="radio" name="address" id="add" className='align-self-start mt-2' />
                                                              <label htmlFor="add" >
                                                                  <p >
                                                                  <b>{list.username}</b><br/>
                                                                  {list.doorNumber}
                                                                  {list.street},{list.post}
                                                                  {list.city},{list.state}
                                                                  </p>
                                                                
                                                              </label>

                                                          </div>
                                                        )
                              }


              

              </div>
        </div>
    </div>
    <Outlet/>
    </> );
}

export default ShopCart;