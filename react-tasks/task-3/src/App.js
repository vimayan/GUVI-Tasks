import './App.css';
import React,{useState,useEffect} from 'react';

import UserLogin from './component/ShopUserLogin';
import { Routes, Route } from "react-router-dom";
import FrontPage from './component/FrontPage';
import VegMarket from './shop/VegMarket';
import Address from './shop/Address';


import { data } from '../src/Data/ImgData';
import { count } from '../src/Data/ImgData';





function App() {

  const[cartValue,setCartValue]=useState(count);
  const[cardItems,setCardItems]=useState(data);
  const [showCart,setShowCart] = useState(false)
  const [addToCart,setAddToCart] = useState([])

  const [isloggedin,setIsloggedin]=useState(false)

  function showCartDetails(){

    setShowCart(!showCart);
    console.log(showCart);
  
  }
  function handleCart(Items){
   
    if(Items.added){
                    setCartValue([cartValue[0]+1]);
                    const  cardItem =[...cardItems]
                    const index = cardItem.indexOf(Items)
                    cardItem[index] = {...Items}
                    cardItem[index].added=!(cardItem[index].added)
                    setCardItems(cardItem)
                    setAddToCart([...addToCart,Items])

                    
                
                  }
    else {
                    setCartValue([cartValue[0]-1]);
                    const  cardItem =[...cardItems]
                    const index = cardItem.indexOf(Items)
                    cardItem[index] = {...Items}
                    cardItem[index].added=!(cardItem[index].added)
                    const removeCart = [...addToCart]

                    let removed = removeCart.filter((c)=> c.id!==Items.id)
                    console.log(removed);
                    setAddToCart([...removed])


                    setCardItems(cardItem)
          
          }
  }





  const [update,setUpdate] = useState(false)

  

  const [address,setAddress] = useState([{id:1,username:'jhon',
                                            doorNumber:123,
                                            street:'new street',
                                          post:123456,
                                          city:'New city',
                                          state:'TN',
                                          phone:123456789
                                          
                                          
                                          }])


  const addnewaddress=(localAddress)=>{
    
      const addaddress=[];
      addaddress[0]= {...localAddress};
      setAddress([...address,...addaddress]);
  

  }

  const addressRemove=(i)=>{
    const remove=[...address];
  
remove.splice(i,1)
setAddress(remove)
  }

 
const updatechange=(index,localAddress)=>{
    const changed=[...address];
  
    changed.splice(index,1,localAddress)
    setAddress(changed)
    setUpdate(false)
  }

 const isupdate = ()=>{
  setUpdate(true)
 }
 useEffect(()=>{
  const addId = [...address]
  for(let i = 0;i<=addId.length-1;++i){
    addId[i].id = i;

  }

},[address])

  return (
 
          
      <Routes>

            <Route path="/" element={<FrontPage isloggedin={isloggedin} setIsloggedin={()=>setIsloggedin(!isloggedin)} />}/>
            <Route path="login" element={<UserLogin/>} />
            <Route path = '/market' element={<VegMarket deliver_to ={address} cartValue={cartValue} cardItems={cardItems} showCart={showCart}
             addToCart={addToCart} showCartDetails={showCartDetails} handleCart={handleCart} />}></Route>

            <Route path = '/address' element={<Address address={address} addaddress ={addnewaddress} addressRemove={addressRemove}
              updatechange={updatechange} update={update} isupdate={isupdate} />}></Route>
      </Routes>
   
    
  );
}

export default App;
