/*=======Preloader=======*/var preloader=document.getElementById('preloader');function myFunction(){preloader.style.display='none';}/*=======Hamburger Menu=======*/function openMenu(){document.querySelector(".navbar").setAttribute("style","width:100%");}function closeMenu(){document.querySelector(".navbar").setAttribute("style","width:0%");}$(document).ready(function (){/*=======Mixitup=======*/ var mixer=mixitup('.grid-prf-contain');/*=======Smooth Scroll=======*/ $(function (){$('a').on('click', function (){$('html, body').animate({scrollTop: $($.attr(this, 'href')).offset().top}, 800); return false;});});});