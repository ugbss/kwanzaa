const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secsEl = document.getElementById("secs");


const kwanzDate = "26 december 2022"

function countdown(){
    const kwanzNewDate = new Date(kwanzDate);
    const currentDate = new Date();
    const totalSeconds = (kwanzNewDate - currentDate) / 1000;
    const days = Math.floor (totalSeconds / 3600 / 24);
    const hours = Math.floor (totalSeconds / 3600) % 24;
    const mins = Math.floor (totalSeconds / 60) % 60;
    const secs = Math.floor (totalSeconds % 60);
    
    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minsEl.innerHTML = mins;
    secsEl.innerHTML = secs;

} 
 countdown();
 setInterval(countdown, 1000); 