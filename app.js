let menu = document.querySelector(".menu");
let ul = document.querySelector("ul");
menu.onclick = () =>{
  menu.classList.contains("show")? menu.classList.remove("show"): menu.classList.add("show");
}
ul.onclick = ()=>{
  menu.classList.remove("show")
}