"use strict"
/*
1 cibler les element declarer variable
2 ajouter comportements
3 declarer fonction
*/
const tabLinks=document.querySelectorAll(".tab__el a")




/*parcourir les éléments de la nodlist pour ajouter listner*/
if(tabLinks.length>0){
    for(let tabLink of tabLinks){
        tabLink.addEventListener("click", tabTrigger);
    } 
}



function tabTrigger(event){
    event.preventDefault();

    const parentTab= event.currentTarget.closest(".tab");
    
    const activeLink= parentTab.querySelector(".tab__el--active");
    activeLink.classList.remove("tab__el--active");

    event.currentTarget.parentElement.classList.add("tab__el--active");


    //tab content
    const activeTab=parentTab.querySelector(".tab__content--active")
    activeTab.classList.remove("tab__content--active")

    const tabID=event.currentTarget.getAttribute("href");
    console.log(tabID);
    const tabSelect=parentTab.querySelector(tabID);
    tabSelect.classList.add("tab__content--active");
}