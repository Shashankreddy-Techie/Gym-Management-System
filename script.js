//Home section
var hamburgerBtn = document.querySelector('.main-navbar .hamburger-btn');
var navList = document.querySelector('.main-navbar .nav-list');
var navListItems = document.querySelector('.nav-list li a')

hamburgerBtn.addEventListener('click',activeClass);

function activeClass(){
    hamburgerBtn.classList.toggle('active');
    navList.classList.toggle('active');
}

for(var i=0; i< navListItems.length; i++){
    navListItems[i].addEventListener('click', listItemsClicked);
}
function listItemsClicked(){
    hamburgerBtn.classList.remove('active');
    navList.classList.remove('active');
}
// code for nav bar
var homeSection = document.querySelector('#home');
window.addEventListener('scroll',pageScrollFunction);
window.addEventListener('load',pageScrollFunction);

function pageScrollFunction(){
    if(window.scrollY > 150){
        homeSection.classList.add('active');
    }
    else{
        homeSection.classList.remove('active');
    }
}
function ookRegister(){
    alert("You registerd Successfully");
}