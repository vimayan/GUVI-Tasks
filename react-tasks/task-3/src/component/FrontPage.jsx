import React,{useState} from 'react';
import VegShopmenu from './NavbarHeader';
import VegHome from './Home';
import VegShopAbout from './About';
import ShopVegetables from './Vegetables';
import ShopContact from './ShopContact';
import ShopFooter from './VegShopFooter';





function FrontPage({isloggedin,setIsloggedin}) {

   
   


const navmenu={page:'home',home:'Home',about:'About',
store:'Store',vegetables:'Vegetables', Contact:'Contact us'}


    return ( <>
    <VegShopmenu navmenu={navmenu} isloggedin={isloggedin} setIsloggedin ={setIsloggedin}/>
    <VegHome/>
    <VegShopAbout/>
    <ShopVegetables/>
    <ShopContact/>
    <ShopFooter/>
 
    </> );
}

export default FrontPage;