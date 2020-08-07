// поддержка webp 
function testWebP(callback) {

    let webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    
    testWebP(function (support) {
    
    if (support == true) {
    document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
    }
    });


// header
// let burger = document.querySelector('.menu__item');
// burger.addEventListener('click', function(e) {
//     burger.classList.toggle('menu__item_active');
// });

let userIcon = document.querySelector('.user-header__icon');
userIcon.addEventListener('click', function(e){
    let userMenu = document.querySelector('.user-header__menu');
    userMenu.classList.toggle('user-header__menu_active');
});