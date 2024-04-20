setTimeout(() => {
  alert("Enter your birth-date in 'year-month-day' format");
}, 100);

let days = document.querySelector(".days");
let hrs = document.querySelector(".hours");
let mins = document.querySelector(".minutes");
let secs = document.querySelector(".seconds");
let birthDate = document.querySelector("#date");



birthDate.addEventListener("blur",()=>{
  // Check if the date is in the format yyyy-mm-dd using a regular expression
const datePattern = /^\d{4}-\d{2}-\d{2}$/;
if (!datePattern.test(birthDate.value)) {
    alert("Enter Valid date in the format 'year-month-date'(ex: 2023-01-01)");
    return;// Stop further execution if the date is not in the correct format
}
let timer = null;

   function countdown(){
    let now = new Date();
    let birthDay = new Date(birthDate.value);
    //5hrs,30mins is exceeding in birthDay timezone..so substarcting 5hrs,30mins(in millisecs) from birthDay to match the timeZones
    let bd = birthDay - 19800000;
    let diff = bd - now;
    let remainingDays = Math.floor(diff / (1000 * 60 * 60 * 24));
    let remainingHours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    let remainingMinutes = Math.floor((diff / (1000 * 60)) % 60);
    let remainingSeconds = Math.floor((diff / 1000) % 60);

    if(diff===0){
      alert("Happy Birthday!!");
      return;
    }
    if(diff<0){
      alert("Your birthday has completed this year!");
      clearInterval(timer);
      return;
    }
    days.value = remainingDays;
    hrs.value = remainingHours;
    mins.value = remainingMinutes;
    secs.value = remainingSeconds;
   
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

 

 let buttonStart = document.querySelector(".start");
 buttonStart.addEventListener("click",()=>{
   timer = setInterval(countdown,1000);
 });

 let buttonReset = document.querySelector(".reset");
  buttonReset.addEventListener("click",()=>{
    clearInterval(timer);
    days.value = "00";
    hrs.value = "00";
    mins.value = "00";
    secs.value = "00";
    birthDate.value = ""
  })
})
