import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';


function Address({address,addaddress,addressRemove,updatechange,update,isupdate}) {
   
const [index,setIndex] = useState(0)
    const [localAddress,setLocalAddress]=useState({
        username: '',
        doorNumber:'',
        street:'',
        post:'',
        city:'',
        state:'',
        phone: ''
      })

   const inputChangeHandler = (e) => {
   // console.log(e);
        const newaddress = {...localAddress};
        newaddress[e.target.name] = e.target.value;
        setLocalAddress(newaddress);
        // console.log(localAddress);

        
      }
    const  onFormSubmitted = (e) => {
        e.preventDefault();
     addaddress(localAddress)

      }
   
      const addresschange=(i,list)=>{
        setLocalAddress(list);
        isupdate()
        setIndex(i)
      };
    

    return ( <>
    <div className='container m-3'>

                    <div className="row  ">
                        <div className="col-3">
                            <Link to='/market' className='btn btn-sm btn-secondary text-start'>
                                back
                            </Link>
                    
                        </div>
                    </div>
                            
                    <div className="row mt-4 col-6 col-md-4 ">
                                    <form className='user-form ' onSubmit={onFormSubmitted}>

                                                <div className='container'>

                                                            <div className="row">
                                                                <div className="col"><label htmlFor='username' className='label-control'>Name: </label><br />
                                                                <input id="username" type="text" className="input-control" name="username" onChange={inputChangeHandler} value={localAddress.username}></input>
                                                                </div>

                                                                <div className="col"> <label htmlFor='doorName' className='label-control'>DoorNumber: </label><br />
                                                                <input id="doorName" type="text" className="input-control" name="doorNumber" onChange={inputChangeHandler} value={localAddress.doorNumber}></input>
                                                                </div>

                                                                <div className="col">
                                                                <label htmlFor='street' className='label-control'>Street: </label><br />
                                                                <input id="street" type="text" className="input-control" name="street" onChange={inputChangeHandler} value={localAddress.street}></input>
                                                                </div>
                                                                <div className="col">

                                                                <label htmlFor='post' className='label-control'>Post: </label><br />
                                                                <input id="post" type="text" className="input-control" name="post" onChange={inputChangeHandler} value={localAddress.post}></input>
                                                                </div>

                                                                <div className="col">
                                                                <label htmlFor='city' className='label-control'>City: </label><br />
                                                                <input id="city" type="text" className="input-control" name="city" onChange={inputChangeHandler} value={localAddress.city}></input>
                                                                </div>

                                                                <div className="col">
                                                                <label htmlFor='state' className='label-control'>State: </label><br />
                                                                <input id="state" type="text" className="input-control" name="state" onChange={inputChangeHandler} value={localAddress.state}></input>
                                                                </div>

                                                                <div className="col">
                                                                <label htmlFor='phone' className='label-control'>Phone: </label><br />
                                                                <input id="phone" type="text" className="input-control" name="phone" onChange={inputChangeHandler} value={localAddress.phone}></input>
                                                                </div>

                                                                <div className="col"></div>
                                                                <div className="col"></div>
                                                            </div>

                                                        
                                                        <div className="row  mt-3 ">
                                                                            <div className="col">

                                                                                    <button type="submit" className=' btn btn-success'>Add</button>
                                                                                    {update? <span onClick={()=>updatechange(index,localAddress)}
                                                                                        className=' btn btn-warning ms-2'>update</span>: <></>} 
                                                                            </div>
                                                            
                                                            
                                                        </div>
                                                </div>
                                                
                                </form>
                    </div>


                    <div className="row  mt-4">

                            
                        
                        {
                            address.map((list,i)=>
                                //console.log(list);
                                <div className='col-12 col-md-6 col-lg-4 mb-2 d-flex justify-content-around' key={list.phone}>
                                    <div>
                                            <h5>
                                                {list.username}
                                            </h5>
                                            
                                            <p>
                                            {
                                            `${list.doorNumber},${list.street},${list.post}
                                            ${list.city},${list.state}`
                                            }<br/>
                                            {
                                            `${list.phone}`
                                            }
                                            </p>
                                            

                                    </div>
                                    <div className='d-flex gap-2 align-items-center'>
                                        <button className='btn btn-info btn-sm' onClick={()=>{addresschange(i,list)}}>
                                            Edit
                                        </button>
                                        <button className='btn btn-danger btn-sm' onClick={()=>{addressRemove(i)}}>
                                        delete
                                        </button>
                                    </div>
                            

                                </div>
                            )
                        }
                        </div>


    </div>

    </> );
}

export default Address;