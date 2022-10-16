        //slider

let offset = 0; // смещение 
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.arrow-right').addEventListener("click",function(){
    offset = offset + 1600;
    if (offset > 3200) {
        offset = 0;
    }
    sliderLine.style.left = - offset + 'px';
});

document.querySelector('.arrow-left').addEventListener("click",function(){
    offset = offset - 1600;
    if (offset < 0) {
        offset = 3200;
    }
    sliderLine.style.left = - offset + 'px';
});

        //drop menu

// document.getElementsByClassName('button_catalog').onmouseover = function(event) {
//     var target = event.target;
//     if (target.className == 'drop-items') {
//         var s = target.getElementsByClassName('drop-items')
//         closeMenu();
//         s[0].style.display = 'flex';
//     }
// }

// document.onmouseover = function(event) {
//     var target = event.target;
//     console.log(event.target);
//     if (target.className == 'button_catalog' && target.className == 'drop-items'){
//         closeMenu();
//     }
// }

// function closeMenu(){
//     var menu = document.getElementsByClassName('button_catalog');
//     var submen = document.getElementsByClassName('drop-items');
//     for (var i = 0; i < subm.length; i++) {
//         subm[i].style.display = "none";
//     }
// }

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