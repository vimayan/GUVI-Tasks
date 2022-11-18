var b =document.getElementById('hell')
let a  = () => {
b.innerText = '10';
   setTimeout(  ()=>{
    b.innerText = '9'
    setTimeout(  () =>{
        b.innerText = '8'
        setTimeout(  ()=>{
            b.innerText = '7'
            setTimeout(   ()=>{
                b.innerText = '6'
                setTimeout( ()=>{
                    b.innerText = '5'
                    setTimeout(    
                        ()=>{
                                            b.innerText = '4'
                                            setTimeout(     () =>{
                                                b.innerText = '3'
                                                setTimeout( 
                                                    () => {
                                                         b.innerText = '2'
                                                        setTimeout(            () => {
                                                            b.innerText = '1'
                                                            setTimeout(            () => {
                                                                b.innerText = 'Happy Independence Day'
                                                            //console.log(b.innerText )
                                                                
                                                                },1000)
                                                        //console.log(b.innerText )
                                                            
                                                            },1000)
                                                         //console.log(b.innerText )
                                                         },1000)
                                                //console.log(b.innerText )
                                                },1000)
                                            //console.log(b.innerText )
                                            },1000)
                    //console.log(b.innerText )
                    
                    },1000)
                //console.log(b.innerText )
                },1000)
            //console.log(b.innerText )
            
            },1000)
        //console.log(b.innerText )
        
        },1000)
   // console.log(b.innerText )
    
    },1000);
   //console.log(b.innerText)

}

    
   
      

                                    window.onload = a();