

let days = document.querySelector(".days");
let hrs = document.querySelector(".hours");
let mins = document.querySelector(".minutes");
let secs = document.querySelector(".seconds");
let  input = document.querySelector("#date");


let now = new Date();
let todaysDate = now.getDate();
let month = now.getMonth();
let year = now.getFullYear();
let currentDate = `${todaysDate}/${(month+1)}/${year}`;

let timer = null;


 function getValue(){
   let inp = input.value;
    function countdown(){ 
    console.log(inp);
    console.log(currentDate);
    let diff = (((((inp - currentDate)/1000)/60)/60)/24);
    //console.log(currentDate);
    console.log(diff);
    days.value = Math.floor(diff + 1);
    hrs.value = Math.floor((((((inp - currentDate)/1000)/60)/60)%24) + 1);
    mins.value = Math.floor(((((inp - currentDate)/1000)/60)%60) + 1);
    secs.value = Math.floor((((inp - currentDate)/1000)%60) + 1);

  //concatinating "0" to the value if the value is less than 10
   if(hrs.value<10){
    hrs.value = "0" + hrs.value;
   }
   if(mins.value<10){
    mins.value = "0" + mins.value;
   }
    if(secs.value<10){
    secs.value = "0" + secs.value;
   }
       
}
countdown();
 }

 let buttonStart = document.querySelector(".start");
 buttonStart.addEventListener("click",()=>{
   timer = setInterval(getValue.countdown,1000);
 });

 let buttonReset = document.querySelector(".reset");
  buttonReset.addEventListener("click",()=>{
    clearInterval(timer);
    days.value = "00";
    hrs.value = "00";
    mins.value = "00";
    secs.value = "00";
  })
 

