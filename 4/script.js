let A =[document.getElementById("firstName"),
 document.getElementById("lastName"),
  document.getElementById("address"),
document.getElementById("state"),
document.getElementById("country"),
 document.getElementById("pinCode"),
 document.getElementById("food"),
 document.getElementsByName("gender")];
 let B = ['First Name','Last Name ','address','state','country','pincode','food','gender',];

var res = document.getElementById('reset')
var thead = document.getElementsByTagName("thead")
var tbody = document.getElementsByTagName("tbody")
var submit = document.getElementById("submit");
var selectfood = document.getElementById("selectedFood");
var g = true;






function onSubmit (e){
    event.preventDefault()
    
    while(g){
    //  console.log('hi')
      header();
       g= false;
  }

    //console.log('iam here');
    content();

    res.reset()

}




function header() {
  let row = document.createElement("tr");  

    
   for(let i=0 ; i<=A.length-1;++i){
    let th = document.createElement("th");
    row.append(th);
    //console.log('header')
}

     let header = row.getElementsByTagName("th");
  // header[0].innerText = A[0].value;
   //  header[1].innerText = A[0].value;
     for(let i=0 ; i<=A.length-1;++i){
         header[i].innerText = B[i];
       //  console.log(B[i])
    }
   // console.log(header)
  
   thead[0].append(row);
   console.log('iam there');
}


let v = false;



function content (){
  let row = document.createElement("tr");
  

  
 for(let i=0 ; i<=A.length-1;++i){
  let td = document.createElement("td");
  row.append(td);
  //console.log('header')
}

   let C  = row.getElementsByTagName("td");
   for(let i=0 ; i<=A.length-3;++i){
       C[i].innerText = A[i].value;
      // console.log(A[i].value)
  }
  //console.log(C[0].innerText)
 foodChoice(C);
 gender(C);
 
 if (C[0].innerText&&C[1].innerText&&C[2].innerText&&C[3].innerText&&C[4].innerText&&C[5].innerText&&C[6].innerText&&C[7].innerText ){
  if(C[6].innerText.split(",").length>1){
    submit.innerText = " "
    selectfood.innerText = " "
    tbody[0].append(row);
   
  }
 else{
  submit.innerText = " "
  selectfood.innerText = " pls atleast select 2"

 }

 }
 else{
submit.innerText = "pls enter all value"
v = true;

 }
 
// console.log('iam content');


}






  

function foodChoice(c){
  let D = c;

 let g = Array.from(A[6].selectedOptions).map(({ value }) => value).join(",");
 D[6].innerText = g
  //console.log(g);

}




// function gender(c){
//   let D = c;

//   let g = A[7].innerText;
//   D[7].innerText = g
//   console.log(g)

// }

function gender(c) {
    let D = c;

    
  for(i = 0; i < A[7].length; i++) {
      if(A[7][i].checked)
      D[7].innerText = A[7][i].value;
      console.log(D[7].innerText)
  }
}



// function displayRadioValue() {
//   var ele = document.getElementsByName('gender');
    
//   for(i = 0; i < ele.length; i++) {
//       if(ele[i].checked)
//       document.getElementById("result").innerHTML
//               = "Gender: "+ele[i].value;
//   }
// }
