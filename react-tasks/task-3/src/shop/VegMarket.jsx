import React from 'react';
import VegShopmenu from '../component/NavbarHeader.jsx';
import Banner from './Banner.jsx';
import ShopCart from './Cart'
import Card from './Card';

function VegMarket({deliver_to,cartValue,cardItems,showCart,addToCart,showCartDetails,handleCart}){



  const navmenu={page:'market',home:'Home',
store:['Store','All Product','Product Items','New Arrivals']
}

  return (
   <>
   <div className='text-center'>

   <VegShopmenu navmenu={navmenu}
   showCartDetails = {showCartDetails}
   cartValue = {cartValue}
   /> 
    {showCart?<ShopCart addToCart = {addToCart} deliver_to={deliver_to}/>: <Banner/>}


   <div className='container-fluid '>   
   
   {cardItems.map(Items =>

  
   
 <Card
    
    handleCart={()=>handleCart(Items)}
    key={Items.id}
    value={cartValue}
    items={Items}
    />
  
  
   )}
   
    </div>


   </div>
   
   </>
    

  );
}

export default VegMarket;