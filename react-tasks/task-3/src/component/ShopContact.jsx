import React from 'react';


function ShopContact() {
    return ( <>

  <div id="Contact"  className="container">
   <div className="row">
     <div className="col-md-12">
                <div className="titlepage">
                  <h2>Contact <strong className="llow">us</strong></h2>
                </div>
   </div>

</div>
    <div className="white_color">
      <div className="row">

        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
           <form className="contact_bg">
            <div className="row">
              <div className="col-md-12">
              
                <div className="col-md-12">
                  <input className="contactus" placeholder="Your Name" type="text" name="Your Name"/>
                </div>
                <div className="col-md-12">
                  <input className="contactus" placeholder="Email" type="text" name="Email"/>
                </div>
                <div className="col-md-12">
                  <input className="contactus" placeholder="Phone Number" type="text" name="Phone Number"/>
                </div>
                <div className="col-md-12">
                  <textarea className="textarea" placeholder="Message" type="text" name="Message"></textarea>
                </div>
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                  <button className="send">Send</button>
                </div>
              </div>
              </div>
            </form>
          </div>
            </div>
      
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
<div id="map">
          </div>
           </div>
          </div>
        </div>

      
    </> );
}

export default ShopContact;