function showTime(){
    let currentTime = document.getElementById("time");
    let date = new Date();

    currentTime.innerHTML = date.toLocaleTimeString();
}
document.addEventListener('DOMContentLoaded', showTime());