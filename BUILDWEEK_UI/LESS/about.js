const toggleMenu = () =>{
    menu.classList.toggle("show");
}

const menu=document.querySelector(".leftNavBar");

const menuBtn=document.querySelector(".menuBtn");

menuBtn.addEventListener("click", toggleMenu);
