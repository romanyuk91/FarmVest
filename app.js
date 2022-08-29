$( function() {
  $( "#pathway-accordion" ).accordion({
    collapsible: true
  });
} );

AOS.init({
once: true
});

// Nav icon
const navBtn = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav')

navBtn.onclick = function () {
	nav.classList.toggle('nav-mobile');
	document.body.classList.toggle('no-scroll');
};