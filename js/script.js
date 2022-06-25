"use strict"

let burger = document.querySelector('.burger');
let menu = document.querySelector('.list-menu');
let weareBlock = document.querySelector('.weare');
let scrollArrow = document.querySelector('.header__arrow-block');
let headerBlock = document.querySelector('.header');
let headerHeight = headerBlock.clientHeight;


function addActive(){
	burger.classList.toggle('active')
	menu.classList.toggle('active');
	document.body.classList.toggle('_ovhid');
};


scrollArrow.addEventListener('click', function(event){
	console.log(headerHeight);
	console.log(window.pageYOffset);
	let scrollingPx = headerHeight - window.pageYOffset;
	window.scrollBy(0, scrollingPx);
});
burger.addEventListener('click', addActive);

