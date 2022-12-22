import Card from './component/Card';
import './App.css';
import Banner from './component/BannerJumbotran';
import Navbarnew from "./component/Navbar";
import React, { useState } from 'react';
import Footer from './component/footer';
import { data } from './component/imgdata';




function App() {
  const[cartValue,setCartValue]=useState(0);
  const[cardItems,setCardItems]=useState()

  useEffect(() => {
    setCardItems(data)
    //Runs on every render
  },[]);


 function handleCart(Items){
                        if(Items.added){
                          setCartValue(prevstate=> prevstate+1);
                          let  cardItem =[...cardItems]
                          const index = cardItem.indexOf(Items)
                          cardItem[index].added=!(cardItem[index].added)
                          // setCardItems(cardItems)
                      
                                      }
                        else {
                        setCartValue(prevstate=> prevstate-1)
                        let  cardItem =[...cardItems]
                          const index = cardItem.indexOf(Items)
                          cardItem[index].added=!(cardItem[index].added)
                        
                              }
                        }

  return (
    <div className="App">
     <Navbarnew cartValue = {cartValue}/>
     <Banner/>
     {cardItems.map(Items =>
     <Card
    
     handleCart={()=>handleCart(Items)}
     key={Items.id}
     value={cartValue}
     items={Items}
     />

     )}
     <Footer/>

    </div>
  );
}

export default App;
