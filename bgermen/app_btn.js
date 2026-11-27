"use strict";

var btnMenu=document.querySelector(".btn--menu");
var menu = document.querySelector(".menu");
console.log(btnMenu);

btnMenu.addEventListener("click", togglemenu);

function togglemenu(){
    menu.classList.toggle("menu--open");
}
