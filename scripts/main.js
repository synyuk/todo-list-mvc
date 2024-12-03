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

