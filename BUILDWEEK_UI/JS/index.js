
var slideIndex = 0;

showSlides();

function showSlides() {
  var i;
  const slides = document.querySelectorAll(".mySlides")
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1} 
  slides[slideIndex-1].style.display = "block"; 
  setTimeout(showSlides, 4000); 
};



const toggleMenuu = () => {
  menu1.classList.toggle("show");
}
const menu1 = document.querySelector(".menu1")

const menuBtn1 = document.querySelector(".menuBtn1")

menuBtn1.addEventListener("click", toggleMenuu)

const toggler = () => {
  learnMore.classList.toggle("show")
}

const learnBtn = document.querySelector('.bold')

const learnMore = document.querySelector('.textBox2')



learnBtn.addEventListener('click', toggler)

