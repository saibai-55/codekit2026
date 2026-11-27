"use strict"
/*
1 cibler les element declarer variable
2 ajouter comportements
3 declarer fonction
*/

const back2top=document.querySelector(".back2top")

if(back2top){
    window.addEventListener("scroll", scrollListener);
}
function scrollListener(){
    const currentScroll= window.scrollY;
    console.log(currentScroll);
    if(currentScroll>300){
        back2top.classList.add("back2top--show");
    } else{
        back2top.classList.remove("back2top--show");
    }
}