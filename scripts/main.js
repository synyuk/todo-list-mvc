// light/dark theme
let checkbox = document.querySelector(".switch input");
let theme = localStorage.getItem("isChecked");

checkbox.addEventListener("change", () => {
    localStorage.setItem("isChecked", checkbox.checked);
    document.body.classList.toggle("dark-theme");
    document.body.classList.toggle("light-theme");
})

if(theme === "true"){
    document.body.classList.add("dark-theme");
    document.body.classList.remove("light-theme");
    checkbox.checked = true;
}else {
    document.body.classList.remove("dark-theme");
    document.body.classList.add("light-theme");
    checkbox.checked = false;
}



//clock
let clock = document.querySelector(".clock");
let hours = document.querySelector(".hours");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");


let pushTime = function(){
    hours.innerHTML =  String(new Date().getHours()).padStart(2, '0');
    minutes.innerHTML = String(new Date().getMinutes()).padStart(2, '0');
    seconds.innerHTML = String(new Date().getSeconds()).padStart(2, '0');
}
setInterval(pushTime, 1);

