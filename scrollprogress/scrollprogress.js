"use strict"
/*
1 cibler les element declarer variable
2 ajouter comportements
3 declarer fonction
*/

const progressBar=document.querySelector(".scrollbar__progress");

if(progressBar){
    window.addEventListener("scroll", updateScrollProgress);
}

function updateScrollProgress(){
    const maxScroll=document.body.scrollHeight - window.innerHeight;
    const currentScroll=window.scrollY;
    const readPercentage= (currentScroll/maxScroll)*100;
    console.log(readPercentage)
    if (currentScroll>=0){
        progressBar.style.setProperty("--scrollbar-width", readPercentage+ "%")
    }
}