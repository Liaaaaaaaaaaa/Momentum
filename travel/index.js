// console.log("Вёрстка соответствует макету. \n Ширина экрана 390px + 48 \n блок <header> +6 \n секция preview +9 \n секция steps +9 \n секция destinations +9 \n секция stories +9 \n блок <footer> +6 \n Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15 \n нет полосы прокрутки при ширине страницы от 1440рх до 390px +7 \n нет полосы прокрутки при ширине страницы от 390px до 320рх +8 \n На ширине экрана 390рх и меньше реализовано адаптивное меню +22 \n при ширине страницы 390рх панель навигации скрывается, появляется бургер-иконка +2 \n при нажатии на бургер-иконку плавно появляется адаптивное меню +4 \n адаптивное меню соответствует макету +4 \n при нажатии на крестик адаптивное меню плавно скрывается уезжая за экран +4 ссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям +4 (все кроме Account, она пока что просто закрывает меню) \n при клике по ссылке в адаптивном меню адаптивное меню плавно скрывается, также скрытие меню происходит если сделать клик вне данного окна +4 " )


const burgerMenu= document.querySelector('.burger-logo');
const burgerNav = document.querySelector('.nav-container');
const burgerClose = document.querySelector('.close-burger');
const pupUp = document.querySelector('.pup-up_container');
const Login = document.querySelector('.form-container');
const SignIn = document.querySelector('button.color2');
const Account = document.getElementById('Account')


if (SignIn) {
  SignIn.addEventListener("click", function() {
    var val = document.getElementById('Email').value;
    var vali = document.getElementById('Password').value;
       let a = document.getElementById('Email').innerHTML="E-mail: " + val;
       let b =document.getElementById('Password').innerHTML="Password: " + vali;
       alert(a + " \n" + b);
  });
};

if (Login) {
  Login.addEventListener("click", function(e) {
 document.body.classList.toggle('_lock');
    pupUp.classList.toggle('_active');
  });
};

if (Account) {
  Account.addEventListener("click", function(e) {
 document.body.classList.toggle('_lock');
    pupUp.classList.toggle('_active');
  });
};

function onLoginLinkClick(e) {
  if (pupUp.classList.contains('_active')) {
document.body.classList.remove('_lock');
  pupUp.classList.remove('_active');
};
};


const LoginRoot = document.querySelector('div.pup-up_list');
document.addEventListener('mousedown', (e) => {
   if (!LoginRoot.contains(e.target) ) {
    onLoginLinkClick()
   }
});


if (burgerMenu) {
  burgerMenu.addEventListener("click", function(e) {
 document.body.classList.toggle('_lock');
    burgerMenu.classList.toggle('_active');
    burgerNav.classList.toggle('_active');
  });
};


if (burgerClose) {
  burgerClose.addEventListener("click", onMenuLinkClick);
};

  function onMenuLinkClick(e) {
    if (burgerMenu.classList.contains('_active')) {
 document.body.classList.remove('_lock');
    burgerMenu.classList.remove('_active');
    burgerNav.classList.remove('_active');
  };
};


const burgerLinks = document.querySelectorAll('.nav-link');
burgerLinks.forEach((link) => {
  link.addEventListener("click", onMenuLinkClick);
});


const menuRoot = document.querySelector('nav.nav-container');
document.addEventListener('mousedown', (e) => {
   if (! menuRoot.contains(e.target)) {
    onMenuLinkClick()
   }
});

