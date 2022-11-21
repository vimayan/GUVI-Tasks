//creating calculater


let D =  document.createElement('div');   //creating container
document.body.appendChild(D);
D.setAttribute("class","container  col-6 col-md-4 col-xl-3  mt-5  ") 

let Calculator =  document.createElement('div'); //creating the div for the alignment 
D.appendChild(Calculator);
Calculator.setAttribute("class","row cal-c col-10 col-lg-8 d-flex gap-2 shadow-lg flex-column align-content-center rounded-3 pb-2 ")





let display =  document.createElement('div');                       // creating the div to display the result 
display.setAttribute("class"," row display  rounded-top  pt-4 mb-2")

let result =  document.createElement('input');                     // creating the input element as display 
result.setAttribute("type"," text")
result.setAttribute("class"," fs-3 fw-bolder border-0   text-end h-50  mt-2 rounded-3 ")
result.setAttribute("id","display")
result.setAttribute("placeholder"," 0")
result.setAttribute("name", "displayResult")

display.appendChild(result);                                       // inserting the display 
Calculator.append(display);




 let Texts = document.createElement('div');                                         // creating row the buttons for clear and memmory
 Texts.setAttribute("class"," row number  gap-1  d-inline-flex  flex-nowrap")
 Calculator.appendChild(Texts);



 let buttonC = document.createElement('button');                                    // creating  the buttons for clear and memmory
 buttonC.innerText = 'C'
 buttonC.setAttribute("class","  col btn btn-success p-md-3 rounded-circle w-25")


 
 let buttonMc = document.createElement('button');
 buttonMc.innerText = 'Mc'
 buttonMc.setAttribute("class","  col btn  btn-primary py-md-2 align-self-md-center rounded-circle w-25 ")

 
 let buttonMadd = document.createElement('button');
 buttonMadd.innerText = 'M+'
 buttonMadd.setAttribute("class","  col btn  btn-primary py-md-2 align-self-md-center rounded-circle w-25 ")

 
 let buttonMremove = document.createElement('button');
 buttonMremove.innerText = 'M-'
 buttonMremove.setAttribute("class","  col btn  btn-primary py-md-2 align-self-md-center rounded-circle w-25 ")


 Texts.append(buttonC,buttonMc,buttonMadd,buttonMremove);                         // inserting all  the buttons 
 buttonC.innerText = 'C'







var Numerical=[['7','8','9','+'],['4','5','6','-']
,['1','2','3','*'],['.','0','/','=']]


for(var i=0; i<=3;i++){                                                         
var B =  Numerical[i]
  
let number = document.createElement('div');                            //creating the row buttons for the number and arithmatic sign
number.setAttribute("class"," row gap-2  d-inline-flex flex-nowrap")
    for(var j=0; j<=3;j++){
        
    let button = document.createElement('button');                   //creating the row buttons for the number and arithmatic sign
    button.innerText = B[j]
    button.setAttribute("class"," col btn  btn-primary  rounded-circle w-25")
         number.append(button);                                       // inserting all  the buttons 
         } 

Calculator.appendChild(number);
}







// //creating functions to calculate//


function calculation(){






function listner() { 
    var button  =  document.getElementsByTagName("button");                         // Find all <button> tags in the document


   
    for(var i = 0; i <= button.length-1; i++) {
    button[i].addEventListener("click", entered);                               // Loop through them, adding an event handler for "click" events to each
  
    }

 
};

listner();                                                                  // invocation of addevent function





var display  =  document.getElementById("display");                         //getting the input element 
let text =       document.createElement("span");
text.setAttribute("class","overflow-hidden")

var memmory=[];                                                                // creating array for memmory(M)




     function entered (event){                                                  // forming the listener function for arithmatic operation


            if( (event.target.innerText.match(/[^a-zA-Z=]/))                   //filltering digits for entry
             &&  (event.target.innerText !=='M+')   
             && (event.target.innerText !=='M-') )
             {

        display.value += event.target.innerText
        
    }


    if( event.target.innerText==="C"){                                         // to clear display
        display.value = ""
    }


    if( event.target.innerText==="="){                                         // to evaluate the arithmatic operation
        
      display.value = eval(  display.value);
       
    }




    if( event.target.innerText==="M+"){                                       // to memmorise the number
        memmory.push(display.value);
        display.value = ""
       
        text.innerText = memmory;
 display.parentNode.appendChild(text);
    }

    if( event.target.innerText==="M-"){                                       // to  delete memmorised number
        memmory.shift(display.value);
        text.innerText = memmory;
    }
    if( event.target.innerText==="Mc"){                                       // to  clear all memmorised number
        memmory.splice(0, memmory.length);
        text.innerText = memmory;  
    }


}


window.addEventListener("keydown", enteredKey);                             //Adding the keyboard key events



function enteredKey(e){                                                         //keyboard listener function



    if( (e.key).match(/[0-9]/)||e.key ==="+"                                  //to get numbers
    ||e.key ==="-"||e.key ==="*"||e.key ==="/"){
      
        display.value += e.key;

      console.log(e.key)
    }


    else if (e.key==="Escape" ){                                                //to clear the number
        display.value = "";
         }


    else if (e.key==="Enter"){                                                   // to evaluate calculation
        display.value = eval( display.value);
        console.log("hello")
         }
      

         else if ((e.key).match(/[A-Za-z]/)&&(e.key!=="ArrowRight")              // to alert the user to enter 
         &&(e.key!=="ArrowLeft")&&(e.key!=="Backspace" ) ) {
            display.value = "" ;
            alert("please enter number");
        
        
        }
 
    
}
}



window.onload = calculation();                                   //invocation of calculation function