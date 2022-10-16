let buttonCatalog = document.querySelector('.button_catalog');
let dropMenu = document.querySelector('.drop-menu');
let menu = buttonCatalog + dropMenu;

document.querySelector('.focus_btn').addEventListener("mouseover",function(){
    dropMenu.style.display = 'flex';
    console.log('click');
});

document.querySelector('.focus_btn').addEventListener("mouseout",function(){
    dropMenu.style.display = 'none';
});