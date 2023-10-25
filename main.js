//swiper slider

var swiper = new Swiper(".bg-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });



//navigation bar effect on scroll//
window.addEventListener("scroll", function(){
  const header = this.document.querySelector("header");
  header.classList.toggle("sticky",window.scrollY > 0);
 })

 //responsive navigation  menu toggle
 const menuBtn = document.querySelector(".nav-menu-btn");
 const closeBtn = document.querySelector(".nav-close-btn");
 const navigation = document.querySelector(".navigation");
   
 
 menuBtn.addEventListener("click", () => {
  navigation.classList.add("active");
 });

 closeBtn.addEventListener("click", () => {
  navigation.classList.remove("active");
 });




//======================================
