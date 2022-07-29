// console.log("Вёрстка соответствует макету. \n Ширина экрана 390px + 48 \n блок <header> +6 \n секция preview +9 \n секция steps +9 \n секция destinations +9 \n секция stories +9 \n блок <footer> +6 \n Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15 \n нет полосы прокрутки при ширине страницы от 1440рх до 390px +7 \n нет полосы прокрутки при ширине страницы от 390px до 320рх +8 \n На ширине экрана 390рх и меньше реализовано адаптивное меню +22 \n при ширине страницы 390рх панель навигации скрывается, появляется бургер-иконка +2 \n при нажатии на бургер-иконку плавно появляется адаптивное меню +4 \n адаптивное меню соответствует макету +4 \n при нажатии на крестик адаптивное меню плавно скрывается уезжая за экран +4 ссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям +4 (все кроме Account, она пока что просто закрывает меню) \n при клике по ссылке в адаптивном меню адаптивное меню плавно скрывается, также скрытие меню происходит если сделать клик вне данного окна +4 " )

const burgerMenu = document.querySelector('.burger-logo');
const burgerNav = document.querySelector('.nav-container');
const burgerClose = document.querySelector('.close-burger');
const pupUp = document.querySelector('.pupIn');
const pupUpUp = document.getElementById('PupUp');
const Login = document.querySelector('.form-container');
const SignIn = document.querySelector('button.color2');
const Account = document.getElementById('Account');
const Register = document.getElementById('buttonIn');

if (Register) {
  Register.addEventListener("click", function (e) {
    // pupUp.classList.display = none;
    pupUpUp.classList.toggle('pupUp')
    pupUp.classList.toggle('_active');
  });
};

function onRegisterLinkClick(e) {
  if (pupUpUp.classList.contains('pupUp')) {
    document.body.classList.remove('_lock');
    pupUpUp.classList.remove('pupUp');
  };
};

const LogIn = document.getElementById('buttonUp')

if (LogIn) {
  LogIn.addEventListener("click", function (e) {
    // document.body.classList.toggle('_lock');
    pupUp.classList.toggle('_active');
    pupUpUp.classList.toggle('pupUp');
  });
};


// const RegisterRoot = document.getElementById('PupUp');
document.addEventListener('mousedown', (e) => {
  if (!LoginRoot.contains(e.target) ) {
    onRegisterLinkClick()
  }
});

if (Login) {
  Login.addEventListener("click", function (e) {
    document.body.classList.toggle('_lock');
    pupUp.classList.toggle('_active');
  });
};


if (SignIn) {
  SignIn.addEventListener("click", function () {
    var val = document.getElementById('Email').value;
    var vali = document.getElementById('Password').value;
    let a = document.getElementById('Email').innerHTML = "E-mail: " + val;
    let b = document.getElementById('Password').innerHTML = "Password: " + vali;
    alert(a + " \n" + b);
  });
};

if (Account) {
  Account.addEventListener("click", function (e) {
    document.body.classList.toggle('_lock');
    pupUp.classList.toggle('_active');
  });
};

function onLoginLinkClick(e) {
  if (pupUp.classList.contains('_active')) {
    document.body.classList.remove('_lock');
    pupUp.classList.remove('_active');
  pupUpUp.classList.remove('pupUp');
  }
//  else (pupUpUp.classList.contains('pupUp')) {
  //   document.body.classList.remove('_lock');
  //   pupUp.classList.remove('_active');
  // pupUpUp.classList.remove('pupUp');;
    // document.body.classList.remove('_lock');
// };
}

const LoginRoot = document.querySelector('div.pup-up_list');
document.addEventListener('mousedown', (e) => {
  if (!LoginRoot.contains(e.target) ) {
    onLoginLinkClick();
    // onRegisterLinkClick()&& !RegisterRoot.contains(e.target )
  }
});


if (burgerMenu) {
  burgerMenu.addEventListener("click", function (e) {
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
  if (!menuRoot.contains(e.target)) {
    onMenuLinkClick()
  }
});

let offset = 0;
const sliderLine = document.querySelector('.destinations-photo');
const circle3 = document.querySelector('.circle-v3')
const circle1 = document.querySelector('.circle-v1')
const circle2 = document.querySelector('.circle-v2')

document.querySelector('.destination3').addEventListener('click', function () {
  offset = offset + -800;
  if (offset < -800 ) {
    offset = -800;
    circle2.classList.toggle('_circle-activ');
    circle3.classList.remove('_circle-activ');
  }
  sliderLine.style.left = offset + 'px';
  circle2.classList.remove('_circle-activ');
  circle3.classList.toggle('_circle-activ')
});

document.querySelector('.destination1').addEventListener('click', function () {
  offset = offset + 800;
  if (offset > 800 ) {
    offset = 800;
    circle1.classList.toggle('_circle-activ');
    circle2.classList.remove('_circle-activ');
  }
  sliderLine.style.left = offset + 'px';
  circle2.classList.remove('_circle-activ');
  circle1.classList.toggle('_circle-activ')
});

document.querySelector('.destination2').addEventListener('click', function () {
  offset = 0;
  sliderLine.style.left = offset + 'px';
  circle1.classList.remove('_circle-activ');
  circle3.classList.remove('_circle-activ');
    circle2.classList.add('_circle-activ');
});

let offsetMob = -70;
const switch1 = document.querySelector('.switch-photo1');
const switch2 = document.querySelector('.switch-photo2');

switch2.addEventListener('click', function () {
  offsetMob = offsetMob + -385;
  if (offsetMob <= -840) {
    offsetMob = -840;
    circle3.classList.add('_activeMobSlide');
    circle2.classList.remove('_activeMobSlide');
    circle2.classList.toggle('_activeMobSlide');
   }

  sliderLine.style.left = offsetMob + 'px';
  circle1.classList.remove('_activeMobSlide');
  circle2.classList.toggle('_activeMobSlide');
  // switch1.classList.toggle('_activeMobSlide')
});

switch1.addEventListener('click', function () {
  offsetMob = offsetMob + 385;
  if (offsetMob >= -70) {
    offsetMob = -70;
    circle2.classList.remove('_activeMobSlide');
    circle1.classList.add('_activeMobSlide');
    circle2.classList.toggle('_activeMobSlide');
  }

  sliderLine.style.left = offsetMob + 'px';
  circle3.classList.remove('_activeMobSlide');
  circle2.classList.toggle('_activeMobSlide');
});

