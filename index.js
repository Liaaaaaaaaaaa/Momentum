//------Настройки приложения +20--------------------------------------------

const imageSetting = document.querySelector('.image_setting');
const settingContainer = document.querySelector('.setting__container');
const options = document.querySelectorAll('option');

const languageList = document.getElementsByName('language-list')[0];
// languageList.value = "RU";
console.log(languageList.value);

languageList.value = localStorage.getItem('changeLanguage');
languageList.addEventListener('change', changeLanguage);


function changeLanguage() {
    localStorage.setItem('changeLanguage', languageList.value);
    weather(city.value);
    quoteLang();
    settingLang ();
}



const backgroundList = document.getElementsByName('background-list')[0];
backgroundList.value = localStorage.getItem('changeBackground');
backgroundList.addEventListener('change', changeBackground);
function changeBackground() {
    localStorage.setItem('changeBackground', backgroundList.value)
}


imageSetting.addEventListener('click', openSetting);
function openSetting() {
    settingContainer.classList.toggle('none');
}
 function settingLang () {
    if (languageList.value === 'EN') {
        document.querySelector('.setting__language div').textContent = 'Choose language: ';
        document.querySelector('.setting__backgroundImage div').textContent = 'Background image:';
        document.querySelector('.tegs__API div').textContent = 'Tegs API';
        document.querySelector('.setting__hideBlock div').textContent = 'Hide block';
        document.querySelector('.setting__showBlock div').textContent = 'Show block';
        Array.from(options).filter(e => e.value === 'time').map(e => e.textContent = 'time');
        Array.from(options).filter(e => e.value === 'date').map(e => e.textContent = 'date');
        Array.from(options).filter(e => e.value === 'greeting-container').map(e => e.textContent = 'greeting');
        Array.from(options).filter(e => e.value === 'quote__container').map(e => e.textContent = 'quote');
        Array.from(options).filter(e => e.value === 'weather').map(e => e.textContent = 'weather');
        Array.from(options).filter(e => e.value === 'player').map(e => e.textContent = 'audioplayer');
    }
    if (languageList.value === 'RU') {
        document.querySelector('.setting__language div').textContent = 'Выберите язык: ';
        document.querySelector('.setting__backgroundImage div').textContent = 'Фоновое изображение:';
        document.querySelector('.tegs__API div').textContent = 'Теги API';
        document.querySelector('.setting__hideBlock div').textContent = 'Скрыть блок';
        document.querySelector('.setting__showBlock div').textContent = 'Показать блок';
        Array.from(options).filter(e => e.value === 'time').map(e => e.textContent = 'время');
        Array.from(options).filter(e => e.value === 'date').map(e => e.textContent = 'дата');
        Array.from(options).filter(e => e.value === 'greeting-container').map(e => e.textContent = 'приветствие');
        Array.from(options).filter(e => e.value === 'quote__container').map(e => e.textContent = 'цитата');
        Array.from(options).filter(e => e.value === 'weather').map(e => e.textContent = 'погода');
        Array.from(options).filter(e => e.value === 'player').map(e => e.textContent = 'аудиоплеер');
    }
    if (languageList.value === 'BE') {
        document.querySelector('.setting__language div').textContent = 'Абярыце мову: ';
        document.querySelector('.setting__backgroundImage div').textContent = 'Фонавы малюнак: ';
        document.querySelector('.tegs__API div').textContent = 'Тэгі API';
        document.querySelector('.setting__hideBlock div').textContent = 'Схаваць блок';
        document.querySelector('.setting__showBlock div').textContent = 'Паказаць блок';
        Array.from(options).filter(e => e.value === 'time').map(e => e.textContent = 'час');
        Array.from(options).filter(e => e.value === 'date').map(e => e.textContent = 'дата');
        Array.from(options).filter(e => e.value === 'greeting-container').map(e => e.textContent = 'прывітанне');
        Array.from(options).filter(e => e.value === 'quote__container').map(e => e.textContent = 'цытата');
        Array.from(options).filter(e => e.value === 'weather').map(e => e.textContent = "надвор'е");
        Array.from(options).filter(e => e.value === 'player').map(e => e.textContent = 'айдыяплэер');
    }
 }
 settingLang();

const tegApi = document.getElementsByName('teg-Api')[0];
tegApi.value = localStorage.getItem('changeTegApi');
tegApi.addEventListener('change', changeTegApi);
function changeTegApi() {
    localStorage.setItem('changeTegApi', tegApi.value)
}

const selectHideBlock = document.getElementsByName('hide-block')[0];
selectHideBlock.value = localStorage.getItem('hideBlock');
selectHideBlock.addEventListener('change', hideBlock);
function hideBlock(e) {
    let classHide = '';
    if (e === undefined) {
        classHide = "." + localStorage.getItem('hideBlock');
    } else {
        classHide = "." + e.target.value;
    }

    if (classHide !== '.none') {
        document.querySelector(`${classHide}`).classList.add('none');
    }
    localStorage.setItem('hideBlock', selectHideBlock.value);
}

const selectDisplayBlock = document.getElementsByName('display-block')[0];
selectDisplayBlock.value = localStorage.getItem('displayBlock');
selectDisplayBlock.addEventListener('change', displayBlock);

function displayBlock(e) {
    let classDisplay = '';
    if (e === undefined) {
        classDisplay = "." + localStorage.getItem('displayBlock');
    } else {
        classDisplay = "." + e.target.value;
    }
    if (classDisplay !== '.none') {
        document.querySelector(`${classDisplay}`).classList.remove('none');
    }
    localStorage.setItem('displayBlock', selectDisplayBlock.value);
}

window.addEventListener('load', function () {

    // console.log(selectHideBlock.value);
    if (selectHideBlock.value !== '') {
        hideBlock();
    }

    // console.log(selectDisplayBlock.value);
    if (selectDisplayBlock.value !== '') {
        displayBlock();
    }
});


// ---------Смена фонового изображения +20---------------------------------
const imagesMorning = [
    'https://raw.githubusercontent.com/Liaaaaaaaaaaa/stage1-tasks/assets/images/morning/01.jpg',
    'https://raw.githubusercontent.com/Liaaaaaaaaaaa/stage1-tasks/assets/images/morning/02.jpg',
    'https://raw.githubusercontent.com/Liaaaaaaaaaaa/stage1-tasks/assets/images/morning/03.jpg',
    'https://raw.githubusercontent.com/Liaaaaaaaaaaa/stage1-tasks/assets/images/morning/04.jpg',
    'https://raw.githubusercontent.com/Liaaaaaaaaaaa/stage1-tasks/assets/images/morning/05.jpg',
    'https://raw.githubusercontent.com/Liaaaaaaaaaaa/stage1-tasks/assets/images/morning/06.jpg',
    'https://raw.githubusercontent.com/Liaaaaaaaaaaa/stage1-tasks/assets/images/morning/07.jpg',
    'https://raw.githubusercontent.com/Liaaaaaaaaaaa/stage1-tasks/assets/images/morning/08.jpg',
    'https://raw.githubusercontent.com/Liaaaaaaaaaaa/stage1-tasks/assets/images/morning/09.jpg',
    'https://raw.githubusercontent.com/Liaaaaaaaaaaa/stage1-tasks/assets/images/morning/10.jpg',
    'https://raw.githubusercontent.com/Liaaaaaaaaaaa/stage1-tasks/assets/images/morning/11.jpg',
    'https://raw.githubusercontent.com/Liaaaaaaaaaaa/stage1-tasks/assets/images/morning/12.jpg',
    'https://raw.githubusercontent.com/Liaaaaaaaaaaa/stage1-tasks/assets/images/morning/13.jpg',
    'https://raw.githubusercontent.com/Liaaaaaaaaaaa/stage1-tasks/assets/images/morning/14.jpg',
    'https://raw.githubusercontent.com/Liaaaaaaaaaaa/stage1-tasks/assets/images/morning/15.jpg',
    'https://raw.githubusercontent.com/Liaaaaaaaaaaa/stage1-tasks/assets/images/morning/16.jpg',
    'https://raw.githubusercontent.com/Liaaaaaaaaaaa/stage1-tasks/assets/images/morning/17.jpg',
    'https://raw.githubusercontent.com/Liaaaaaaaaaaa/stage1-tasks/assets/images/morning/18.jpg',
    'https://raw.githubusercontent.com/Liaaaaaaaaaaa/stage1-tasks/assets/images/morning/19.jpg',
    'https://raw.githubusercontent.com/Liaaaaaaaaaaa/stage1-tasks/assets/images/morning/20.jpg'
];
const imagesAfternoon = [
    'https://raw.githubusercontent.com/Liaaaaaaaaaaa/stage1-tasks/assets/images/afternoon/01.jpg',
    'https://raw.githubusercontent.com/Liaaaaaaaaaaa/stage1-tasks/assets/images/afternoon/02.jpg',
    'https://raw.githubusercontent.com/Liaaaaaaaaaaa/stage1-tasks/assets/images/afternoon/03.jpg',
    'https://raw.githubusercontent.com/Liaaaaaaaaaaa/stage1-tasks/assets/images/afternoon/04.jpg',
    'https://raw.githubusercontent.com/Liaaaaaaaaaaa/stage1-tasks/assets/images/afternoon/05.jpg',
    'https://raw.githubusercontent.com/Liaaaaaaaaaaa/stage1-tasks/assets/images/afternoon/06.jpg',
    'https://raw.githubusercontent.com/Liaaaaaaaaaaa/stage1-tasks/assets/images/afternoon/07.jpg',
    'https://raw.githubusercontent.com/Liaaaaaaaaaaa/stage1-tasks/assets/images/afternoon/08.jpg',
    'https://raw.githubusercontent.com/Liaaaaaaaaaaa/stage1-tasks/assets/images/afternoon/09.jpg',
    'https://raw.githubusercontent.com/Liaaaaaaaaaaa/stage1-tasks/assets/images/afternoon/10.jpg',
    'https://raw.githubusercontent.com/Liaaaaaaaaaaa/stage1-tasks/assets/images/afternoon/11.jpg',
    'https://raw.githubusercontent.com/Liaaaaaaaaaaa/stage1-tasks/assets/images/afternoon/12.jpg',
    'https://raw.githubusercontent.com/Liaaaaaaaaaaa/stage1-tasks/assets/images/afternoon/13.jpg',
    'https://raw.githubusercontent.com/Liaaaaaaaaaaa/stage1-tasks/assets/images/afternoon/14.jpg',
    'https://raw.githubusercontent.com/Liaaaaaaaaaaa/stage1-tasks/assets/images/afternoon/15.jpg',
    'https://raw.githubusercontent.com/Liaaaaaaaaaaa/stage1-tasks/assets/images/afternoon/16.jpg',
    'https://raw.githubusercontent.com/Liaaaaaaaaaaa/stage1-tasks/assets/images/afternoon/17.jpg',
    'https://raw.githubusercontent.com/Liaaaaaaaaaaa/stage1-tasks/assets/images/afternoon/18.jpg',
    'https://raw.githubusercontent.com/Liaaaaaaaaaaa/stage1-tasks/assets/images/afternoon/19.jpg',
    'https://raw.githubusercontent.com/Liaaaaaaaaaaa/stage1-tasks/assets/images/afternoon/20.jpg'
];
const imagesEvening = [
    'https://raw.githubusercontent.com/Liaaaaaaaaaaa/stage1-tasks/assets/images/evening/01.jpg',
    'https://raw.githubusercontent.com/Liaaaaaaaaaaa/stage1-tasks/assets/images/evening/02.jpg',
    'https://raw.githubusercontent.com/Liaaaaaaaaaaa/stage1-tasks/assets/images/evening/03.jpg',
    'https://raw.githubusercontent.com/Liaaaaaaaaaaa/stage1-tasks/assets/images/evening/04.jpg',
    'https://raw.githubusercontent.com/Liaaaaaaaaaaa/stage1-tasks/assets/images/evening/05.jpg',
    'https://raw.githubusercontent.com/Liaaaaaaaaaaa/stage1-tasks/assets/images/evening/06.jpg',
    'https://raw.githubusercontent.com/Liaaaaaaaaaaa/stage1-tasks/assets/images/evening/07.jpg',
    'https://raw.githubusercontent.com/Liaaaaaaaaaaa/stage1-tasks/assets/images/evening/08.jpg',
    'https://raw.githubusercontent.com/Liaaaaaaaaaaa/stage1-tasks/assets/images/evening/09.jpg',
    'https://raw.githubusercontent.com/Liaaaaaaaaaaa/stage1-tasks/assets/images/evening/10.jpg',
    'https://raw.githubusercontent.com/Liaaaaaaaaaaa/stage1-tasks/assets/images/evening/11.jpg',
    'https://raw.githubusercontent.com/Liaaaaaaaaaaa/stage1-tasks/assets/images/evening/12.jpg',
    'https://raw.githubusercontent.com/Liaaaaaaaaaaa/stage1-tasks/assets/images/evening/13.jpg',
    'https://raw.githubusercontent.com/Liaaaaaaaaaaa/stage1-tasks/assets/images/evening/14.jpg',
    'https://raw.githubusercontent.com/Liaaaaaaaaaaa/stage1-tasks/assets/images/evening/15.jpg',
    'https://raw.githubusercontent.com/Liaaaaaaaaaaa/stage1-tasks/assets/images/evening/16.jpg',
    'https://raw.githubusercontent.com/Liaaaaaaaaaaa/stage1-tasks/assets/images/evening/17.jpg',
    'https://raw.githubusercontent.com/Liaaaaaaaaaaa/stage1-tasks/assets/images/evening/18.jpg',
    'https://raw.githubusercontent.com/Liaaaaaaaaaaa/stage1-tasks/assets/images/evening/19.jpg',
    'https://raw.githubusercontent.com/Liaaaaaaaaaaa/stage1-tasks/assets/images/evening/20.jpg'
];
const imagesNight = [
    'https://raw.githubusercontent.com/Liaaaaaaaaaaa/stage1-tasks/assets/images/night/01.jpg',
    'https://raw.githubusercontent.com/Liaaaaaaaaaaa/stage1-tasks/assets/images/night/02.jpg',
    'https://raw.githubusercontent.com/Liaaaaaaaaaaa/stage1-tasks/assets/images/night/03.jpg',
    'https://raw.githubusercontent.com/Liaaaaaaaaaaa/stage1-tasks/assets/images/night/04.jpg',
    'https://raw.githubusercontent.com/Liaaaaaaaaaaa/stage1-tasks/assets/images/night/05.jpg',
    'https://raw.githubusercontent.com/Liaaaaaaaaaaa/stage1-tasks/assets/images/night/06.jpg',
    'https://raw.githubusercontent.com/Liaaaaaaaaaaa/stage1-tasks/assets/images/night/07.jpg',
    'https://raw.githubusercontent.com/Liaaaaaaaaaaa/stage1-tasks/assets/images/night/08.jpg',
    'https://raw.githubusercontent.com/Liaaaaaaaaaaa/stage1-tasks/assets/images/night/09.jpg',
    'https://raw.githubusercontent.com/Liaaaaaaaaaaa/stage1-tasks/assets/images/night/10.jpg',
    'https://raw.githubusercontent.com/Liaaaaaaaaaaa/stage1-tasks/assets/images/night/11.jpg',
    'https://raw.githubusercontent.com/Liaaaaaaaaaaa/stage1-tasks/assets/images/night/12.jpg',
    'https://raw.githubusercontent.com/Liaaaaaaaaaaa/stage1-tasks/assets/images/night/13.jpg',
    'https://raw.githubusercontent.com/Liaaaaaaaaaaa/stage1-tasks/assets/images/night/14.jpg',
    'https://raw.githubusercontent.com/Liaaaaaaaaaaa/stage1-tasks/assets/images/night/15.jpg',
    'https://raw.githubusercontent.com/Liaaaaaaaaaaa/stage1-tasks/assets/images/night/16.jpg',
    'https://raw.githubusercontent.com/Liaaaaaaaaaaa/stage1-tasks/assets/images/night/17.jpg',
    'https://raw.githubusercontent.com/Liaaaaaaaaaaa/stage1-tasks/assets/images/night/18.jpg',
    'https://raw.githubusercontent.com/Liaaaaaaaaaaa/stage1-tasks/assets/images/night/19.jpg',
    'https://raw.githubusercontent.com/Liaaaaaaaaaaa/stage1-tasks/assets/images/night/20.jpg'
];

let date = new Date();
let time = date.getHours();

function timeOfDay() {
    if (time >= 0 && time < 6) return imagesNight;
    if (time >= 6 && time < 12) return imagesMorning;
    if (time >= 12 && time < 18) return imagesAfternoon;
    if (time >= 18) return imagesEvening
};


function mixImage(arr) {
    return arr.map(i => [Math.random(), i]).sort().map(i => i[1])
};


let imgUrl = mixImage(timeOfDay());

document.body.style.background = 'center/100% url("' + imgUrl[1] + '")';


function imgNumber() {
    if (timeOfDay() === imagesAfternoon) {
        return imgUrl[1].slice(85, 87)
    }
    if (timeOfDay() === imagesNight) {
        return imgUrl[1].slice(81, 82)
    } else {
        return imgUrl[1].slice(83, 85)
    }
}

let timeOfDayNow = timeOfDay();

let imgNumberNow = imgNumber();

const slidePrev = document.querySelector('.slide-prev');
const slideNext = document.querySelector('.slide-next');

function SwitchPrev() {
    if (imgNumberNow === 1) {
        document.body.style.background = 'url("' + timeOfDayNow[19] + '")';
        imgNumberNow = 20;
    }
    else {
        document.body.style.background = 'url("' + timeOfDayNow[imgNumberNow - 2] + '")';
        imgNumberNow = imgNumberNow - 1
    }
};


slidePrev.onclick = SwitchPrev;


function SwitchNext() {
    if (imgNumberNow === 20) {
        document.body.style.background = 'url("' + timeOfDayNow[0] + '")';
        imgNumberNow = 1;
    }
    else {
        document.body.style.background = 'url("' + timeOfDayNow[imgNumberNow] + '")';
        imgNumberNow++
    }
};


slideNext.onclick = SwitchNext;



// -----------------Clock and Calendar ------------------


const times = document.querySelector('.time');
const dates = document.querySelector('.date');

function zero_first_format(value) {
    if (value < 10) {
        value = '0' + value;
    }
    return value;
}

function timeNow() {
    let current_datetime = new Date();
    let hours = zero_first_format(current_datetime.getHours());
    let minutes = zero_first_format(current_datetime.getMinutes());
    let seconds = zero_first_format(current_datetime.getSeconds());
    return hours + ":" + minutes + ":" + seconds;
}

setInterval(function () {
    times.innerText = timeNow();
    greeting.innerText = greetingTime();
    dates.innerText = dateNow();
}, 1000);



function dateNow() {

let current_datetime = new Date();
let day = current_datetime.getDay();
let dayM = zero_first_format(current_datetime.getDate());
let month = current_datetime.getMonth();
// console.log(languageList.value);
let dayMassiv = '';
let monthMassiv = '';

if (languageList.value === 'EN') {
  dayMassiv = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  monthMassiv = ['January', 'February',' March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',' November', 'December'];
}
if (languageList.value === 'RU') {
    dayMassiv = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    monthMassiv = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
}
if (languageList.value === 'BE'){
    dayMassiv = ['Нядзеля', 'Панядзелак', 'Аўторак', 'Серада', 'Чацвер', 'Пятніца','Субота'];
    monthMassiv = ['Студзеня', 'Лютага', 'Сакавіка', 'Красавіка', 'Мая', 'Чэрвеня', 'Ліпеня', 'Жніуня', 'Верасня', 'Кастрычніка', ' Лістапада', 'Нежаня'];
}

    return dayMassiv[day] + ", " + dayM + " " + monthMassiv[month];
}

dates.innerText = dateNow();

//----------Greetings-----------------------------------------------

const greeting = document.querySelector('.greeting');
let inputNames = document.querySelector('.name');

function greetingTime() {

    if (timeOfDayNow === imagesMorning) {
        if (languageList.value === 'RU') {
            inputNames.placeholder = '[Введите Имя]';
        return 'Доброе утро';
        }
        if (languageList.value === 'EN') {
            inputNames.placeholder = '[Enter your Name]';
            return 'Good morning';
        }
        if (languageList.value === 'BE') {
                inputNames.placeholder = '[ Увядзіце Імя]';
            return 'Добрай раницы';
        }

    }
    if (timeOfDayNow === imagesAfternoon) {
        if (languageList.value === 'RU') {
            inputNames.placeholder = '[Введите Имя]';
            return 'Добрый день';
            }
            if (languageList.value === 'EN') {
                inputNames.placeholder = '[Enter your Name]';
                return 'Good afternoon';
            }
            if (languageList.value === 'BE') {
                inputNames.placeholder = '[ Увядзіце Імя]';
                return 'Добры дзень';
            }
    }
    if (timeOfDayNow === imagesEvening) {
        if (languageList.value === 'RU') {
            inputNames.placeholder = '[Введите Имя]';
            return 'Добрый вечер';
            }
            if (languageList.value === 'EN') {
                inputNames.placeholder = '[Enter your Name]';
                return 'Good evening';
            }
            if (languageList.value === 'BE') {
                inputNames.placeholder = '[ Увядзіце Імя]';
                return 'Добры вечар';
            }

    }
    if (timeOfDayNow === imagesNight) {
        if (languageList.value === 'RU') {
            inputNames.placeholder = '[Введите Имя]';
            return 'Доброй ночи';
            }
            if (languageList.value === 'EN') {
                inputNames.placeholder = '[Enter your Name]';
                return 'Good night';
            }
            if (languageList.value === 'BE') {
                inputNames.placeholder = '[ Увядзіце Імя]';
                return 'Добранач';
            }
        
    }
};

greeting.innerText = greetingTime();

inputNames.oninput = function () {
    let value = this.value;
    localStorage.setItem('.name', value);
}



window.onload = () => {
    inputNames.value = localStorage.getItem('.name');
    treck = 0;
}




// ------------Quotes----------------------------------------------

let authorLang =  {
    'RU': "Уильям Шекспир",
    'EN': 'William Shakespeare',
    'BE': 'Уільям шэкспір',
  }
let quotes = {
    "quote0": {
    'RU': "Грехи других судить Вы так усердно рветесь, начните со своих и до чужих не доберетесь. Генрих VI",
    'EN': 'Forbear to judge, for we are sinners all. Henry VI',
    'BE': 'Грахі іншых судзіць вы так старанна дзярэцеся, пачніце са сваіх і да чужых не даберацеся',
    },
    "quote1": {
        'RU':  "Что значит имя? Роза пахнет розой, хоть розой назови ее, хоть нет. Ромео и Джульетта",
        'EN': 'That which we call a rose by any other name would smell as sweet.Romeo and Juliet',
        'BE': 'Што значыць імя? Ружа пахне ружай, хоць ружай назаві яе, хоць не. Рамэо і Джульета',
    },
    "quote2": {
        'RU': "Совсем не знак бездушья — молчаливость. Гремит лишь то, что пусто изнутри. Король Лир",
        'EN': 'Nor are those empty-hearted whose low sound reverbs no hollowness. King Lear',
        'BE': 'Зусім не знак бяздушнасці - маўклівасць. Грыміць толькі тое, што пуста знутры. Кароль Лір',
        },
    "quote3": {
        'RU': "Ничего само по себе не хорошо или плохо, это лишь то, как человек об этом думает",
        'EN': 'There is nothing either good or bad, but thinking makes it so.',
        'BE': 'Нічога само па сабе не добра ці дрэнна, гэта толькі тое, як чалавек пра гэта думае',
        }, 
    "quote4": {
        'RU': "Трусливые люди умирают много раз перед своей смертью. Макбет",
        'EN': ' Coward people die many times before their deaths. Macbeth',
        'BE': 'Баязлівыя людзі паміраюць шмат разоў перад сваёй смерцю. Макбет',
            }, 
        }; 
         // {
    //     "quote": "Лживое лицо скроет все, что задумало коварное сердце. Макбет",
    //     "author": "Уильям Шекспир"
    // },
    
    // {
    //     "quote": "Влюбиться можно в красоту, но полюбить – лишь только душу!",
    //     "author": "Уильям Шекспир"
    // },
    
    // {
    //     "quote": "Наши сомнения — это наши предатели. Они заставляют нас терять то, что мы возможно могли бы выиграть, если бы не боялись попробовать. Мера за меру",
    //     "author": "Уильям Шекспир"
    // },
    // {
    //     "quote": "Во всяком деле, чтобы добиться успеха, нужна некоторая доля безумия",
    //     "author": "Уильям Шекспир"
    // },
   
    // {
    //     "quote": "Тогда лишь двое тайну соблюдают, когда один из них её не знает. Ромео и Джульетта",
    //     "author": "Уильям Шекспир"
    // },
    // {
    //     "quote": "Одним взглядом можно убить любовь, одним же взглядом можно воскресить ее. Венера и Адонис",
    //     "author": "Уильям Шекспир"
    // },
    
    // {
    //     "quote": "Можно улыбаться, улыбаться и быть подлецом. (Можно жить с улыбкой и с улыбкой быть подлецом…). Гамлет",
    //     "author": "Уильям Шекспир"
    // },
    // {
    //     "quote": "Я смею всё, что можно человеку, кто смеет больше, тот не человек! Макбет",
    //     "author": "Уильям Шекспир"
    // },
    // {
    //     "quote": "Так сладок мёд, что, наконец, он горек. Избыток вкуса убивает вкус. Ромео и Джульетта",
    //     "author": "Уильям Шекспир"
    // },
    // {
    //     "quote": "Имей больше, чем показываешь. Говори меньше, чем знаешь.Король Лир",
    //     "author": "Уильям Шекспир"
    // },
    // {
    //     "quote": "Во всяком деле, чтобы добиться успеха, нужна некоторая доля безумия",
    //     "author": "Уильям Шекспир"
    // },
    // {
    //     "quote": "Искать того напрасно, кто не желает, чтоб его нашли.(Зачем искать того, кто найден быть не хочет?) Ромео и Джульетта",
    //     "author": "Уильям Шекспир"
    // },
    // {
    //     "quote": "Вбирай все мненья, но храни своё. Гамлет",
    //     "author": "Уильям Шекспир"
    // },
    // {
    //     "quote": "Тогда лишь двое тайну соблюдают, когда один из них её не знает.",
    //     "author": "Уильям Шекспир"
    // },
    // {
    //     "quote": "Все влюбленные клянутся исполнить больше, чем могут, и не исполняют даже возможного. Троил и Крессида",
    //     "author": "Уильям Шекспир"
    // },
    // {
    //     "quote": "Быть иль не быть — вот в чем вопрос. Гамлет",
    //     "author": "Уильям Шекспир"
    // },

    // {
    //     "quote": "Любовь бежит от тех, кто гонится за нею, а тем, кто прочь бежит, кидается на шею. Виндзорские насмешницы",
    //     "author": "Уильям Шекспир"
    // },
    // {
    //     "quote": "Как можешь ты судить о том, чего не знаешь?. Ромео и Джульетта",
    //     "author": "Уильям Шекспир"
    // },
    // {
    //     "quote": "Когда пылает кровь, как щедр язык на клятвы! Гамлет",
    //     "author": "Уильям Шекспир"
    // },
    // {
    //     "quote": "Только настоящий друг может терпеть слабости своего друга.Юлий Цезарь",
    //     "author": "Уильям Шекспир"
    // },
    // {
    //     "quote": "Любовь юнцов не в душах, а в глазах. Ромео и Джульетта",
    //     "author": "Уильям Шекспир"
    // },
    // {
    //     "quote": "Чтобы поймать счастье, надо уметь бегать. Король Лир",
    //     "author": "Уильям Шекспир"
    // },
    // {
    //     "quote": "... Быть может, твой единственный алмаз простым стеклом окажется на глаз. Ромео и Джульетта",
    //     "author": "Уильям Шекспир"
    // },
    // {
    //     "quote": "У бурных чувств неистовый конец, он совпадает с мнимой их победой, разрывом слиты порох и огонь. Ромео и Джульетта",
    //     "author": "Уильям Шекспир"
    // },
    // {
    //     "quote": "Из женщины не трудно сделать дуру, когда она боится дать отпор! Укрощение строптивой",
    //     "author": "Уильям Шекспир"
    // },
    // {
    //     "quote": "... Не будь ни расточителем, ни скрягой: лишь в чувстве меры истинное благо. Ромео и Джульетта",
    //     "author": "Уильям Шекспир"
    // },
    // {
    //     "quote": "Живи пока ты жив, приятель...Ромео и Джульетта",
    //     "author": "Уильям Шекспир"
    // },
    // {
    //     "quote": "Весь мир — театр. В нем женщины, мужчины — все актеры. У них свои есть выходы, уходы, и каждый не одну играет роль.",
    //     "author": "Уильям Шекспир"
    // },
    // {
    //     "quote": "Подарок нам не мил, когда разлюбит тот, кто подарил. Гамлет",
    //     "author": "Уильям Шекспир"
    // },
    // {
    //     "quote": "А впрочем, что ж, на свете нет чудес: как волка ни корми, он смотрит в лес. Гамлет",
    //     "author": "Уильям Шекспир"
    // },
    // {
    //     "quote": "Стремясь к лучшему, мы часто портим хорошее. Король Лир",
    //     "author": "Уильям Шекспир"
    // },
    // {
    //     "quote": "Как часто нас спасала слепота, где дальновидность только подводила. Гамлет",
    //     "author": "Уильям Шекспир"
    // },
    // {
    //     "quote": "Любовь нежна? Она груба и зла. И колется, и жжётся, как терновник. Ромео и Джульетта",
    //     "author": "Уильям Шекспир"
    // },
    // {
    //     "quote": "Слова — всегда слова. Отелло",
    //     "author": "Уильям Шекспир"
    // },
    // {
    //     "quote": "Стал мир невыносим, c тех пор, как лесть учтивостью назвали. Двенадцатая ночь, или что угодно",
    //     "author": "Уильям Шекспир"
    // },
    // {
    //     "quote": "Быть честным — по нашим временам значит быть единственным из десяти тысяч. Гамлет",
    //     "author": "Уильям Шекспир"
    // },

    // {
    //     "quote": "Лучше опасаться без меры, чем без меры доверять. От бед спасает только осторожность. Король Лир",
    //     "author": "Уильям Шекспир"
    // },
    // {
    //     "quote": "В уме нечутком не место шуткам. Гамлет",
    //     "author": "Уильям Шекспир"
    // },
    // {
    //     "quote": "Есть многое на свете, друг Горацио, что и не снилось нашим мудрецам. Гамлет",
    //     "author": "Уильям Шекспир"
    // },
    // {
    //     "quote": "Напрасно думать, будто резкий тон есть признак прямодушия и силы. Король Генрих IV",
    //     "author": "Уильям Шекспир"
    // },
    // {
    //     "quote": "Слыхали так, услышали вы плохо! Зовусь я Катарина.... И всем известен злой ее язык",
    //     "author": "Уильям Шекспир"
    // },
// };



let quote = document.querySelector('.quote');
let author = document.querySelector('.author');
let random = Math.floor(Math.random() * Object. keys(quotes).length);


async function quoteLang() {
    let quoteNumber = 'quote' + random;
    quote.innerText = quotes[quoteNumber][languageList.value];
    author.innerText = authorLang[languageList.value];
}


async function randomQuote() {
     if (random === Object. keys(quotes).length -1) {
        random = 0;  
    } else {
        random++
    }
    quote.innerText = quotes[('quote' + random)][languageList.value];
    author.innerText = authorLang[languageList.value];
};

randomQuote();

const changeQuote = document.querySelector('.change-quote');



if (changeQuote) {
console.log(random);
console.log(Object. keys(quotes).length);

    changeQuote.addEventListener("click", randomQuote);
};


// -----Weather ------------------------------------------------


// function translit(word) {
//     let answer = '';
//     let converter = {
//         'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd',
//         'е': 'e', 'ё': 'e', 'ж': 'zh', 'з': 'z', 'и': 'i',
//         'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n',
//         'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't',
//         'у': 'u', 'ф': 'f', 'х': 'h', 'ц': 'c', 'ч': 'ch',
//         'ш': 'sh', 'щ': 'sch', 'ь': '', 'ы': 'y', 'ъ': '',
//         'э': 'e', 'ю': 'yu', 'я': 'ya',

//         'А': 'A', 'Б': 'B', 'В': 'V', 'Г': 'G', 'Д': 'D',
//         'Е': 'E', 'Ё': 'E', 'Ж': 'Zh', 'З': 'Z', 'И': 'I',
//         'Й': 'Y', 'К': 'K', 'Л': 'L', 'М': 'M', 'Н': 'N',
//         'О': 'O', 'П': 'P', 'Р': 'R', 'С': 'S', 'Т': 'T',
//         'У': 'U', 'Ф': 'F', 'Х': 'H', 'Ц': 'C', 'Ч': 'Ch',
//         'Ш': 'Sh', 'Щ': 'Sch', 'Ь': '', 'Ы': 'Y', 'Ъ': '',
//         'Э': 'E', 'Ю': 'Yu', 'Я': 'Ya', '': ' '
//     };




//     for (let i = 0; i < word.length; ++i) {
//         if (converter[word[i]] == undefined  ) {

//             answer += word[i];
//         } else {
//             answer += converter[word[i]];
//         }
//     }

//     return answer.trim();
// }



// let city = document.querySelector('.city');
// let lang = '';
// let placeholderLang = '';
// let errorText = '';


// async function weather(value) {
//     if (languageList.value === 'RU') {
//         lang = 'ru';
//         placeholderLang = 'Введите город';
//         errorText = 'Ошибка! Город не найден!';
//     }
//     if (languageList.value === 'EN') {
//         lang = 'en';
//         placeholderLang = 'Enter the city';
//         errorText = 'Error! City not found!';
//     }
//     if (languageList.value === 'BE') {
//         lang = 'be';
//         placeholderLang = 'Увядзіце горад';
//         errorText = 'Памылка! Горад не знойдзены!'
//     }
//     // console.log(translit(value));
//     console.log(lang);
//     fetch('https://api.openweathermap.org/data/2.5/weather?q=' + translit(value) + '&appid=34924d29b902927c46d4b8ec90a661b7&lang=' + lang + '').then(function (resp) { return resp.json() }).then(function (data) {
//         city.value = data.name;
//         city.placeholder = placeholderLang;
//         // console.log(data.name);
//         // console.log(value);
//          try {
//             document.querySelector('.weather-icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png" >`;
//             document.querySelector('.temperature').innerHTML = Math.round(data.main.temp - 273) + ' &deg' + 'C';
//             document.querySelector('.weather-description').textContent = data.weather[0]['description'];
//             // console.log(data);
//             let speedWindy = 'Скорость ветра:';
//             let himadity = 'Влажность: ';
//             // console.log(data.weather[0]['description']);
//             if (languageList.value === 'EN') {  
//                 speedWindy = 'wind speed: ';
//                 himadity = 'Himadity: '; 
//             }
//             if (languageList.value === 'BE') {
//                 speedWindy = 'Хуткасць ветру: ';
//                 himadity = 'Вільготнасць: ';
//             }
//             document.querySelector('.wind ').textContent = speedWindy + Math.round(data.wind['speed']) + ' м/с';   
//             document.querySelector('.humidity').textContent = himadity + data.main['humidity'] + ' %';



//         }
//         catch (error) {
//             city.value = value;
//             document.querySelector('.weather-icon').innerHTML = errorText;
//             document.querySelector('.temperature').innerHTML = '';
//             document.querySelector('.weather-description').textContent = '';
//             document.querySelector('.wind ').textContent = '';
//             document.querySelector('.humidity').textContent = '';
//         }

//     })
// };



// weather('Минск');

// city.oninput = function () {
//     value = this.value;

//     // localStorage.setItem('.city', value);
//      weather(value);
// };


// if (localStorage.getItem('city')) {
//     city.value = localStorage.getItem('city');
//     weather(city.value);
// }


// -------Audioplayer--------------------------------

let audio = document.getElementById("audio");

let btnPlay = document.querySelectorAll(".play");
let btnPrev = document.querySelector(".play-prev");
let btnNext = document.querySelector(".play-next");
let nameTrack = document.querySelector('.nameTrack');
let activePlay = document.querySelectorAll('.activePlay');

document.querySelector('.song0').classList.toggle('activeSong');


let activeSong = document.querySelector(".activeSong");

let playlist = [
    'Bob Dylan — Knockin On Heavens Door.mp3',
    'Kansas — Carry On Wayward Son.mp3',
    'The Cranberries — Zombie.mp3',
];

let treck;

function switchTreck(numTreck) {
    audio.src = './soungs/' + playlist[numTreck];

    nameTrack.textContent = playlist[numTreck].slice(0, playlist[numTreck].length - 4);

    audio.currentTime = 0;
    audio.play();
};



// console.log(btnPlay);

btnPlay.forEach(button => {
    button.addEventListener("click", function (e) {
        let numberTreckButton = playlist.findIndex(elem => elem === (e.target.previousElementSibling.textContent + '.mp3'));
        let nameTreckButton = e.target.previousElementSibling.textContent;

        if (numberTreckButton !== treck && nameTreckButton.length > 0 && button.classList.contains('activePlay')) {
            switchTreck(numberTreckButton);
            treck = numberTreckButton;
        }

        
        if (button.classList.contains('activePlay')
            // && numberTreckButton >= 0
        ) {

            btnPlay.forEach(e => e.classList.add('activePlay'));
            btnPlay.forEach(e => e.classList.remove('pause'));

            btnPlay[treck + 1].classList.remove('activePlay');
            btnPlay[0].classList.remove('activePlay');

            btnPlay[0].classList.add('pause');
            btnPlay[treck + 1].classList.add('pause');

            // console.log(treck);
            document.querySelector('.activeSong').classList.remove('activeSong');

            document.querySelector('.song' + treck).classList.add('activeSong');
            audioProgressBar();
            audio.volume = 0.5;
            audio.play();
        } else {
            btnPlay[treck + 1].classList.add('activePlay');
            btnPlay[0].classList.add('activePlay');
            btnPlay[0].classList.remove('pause');
            btnPlay[treck + 1].classList.remove('pause');
            audio.pause();
            // console.log(activePlay);

        };

    })
});


//--------------------------
audioPlay = setInterval(function () {
    let audioTime = Math.round(audio.currentTime);
    let audioLength = Math.round(audio.duration);
    if (audioTime === audioLength && treck < 2) {
        document.querySelector('.song' + treck).classList.toggle('activeSong');
        document.querySelector('.song' + (treck + 1)).classList.toggle('activeSong');
        treck++;
        switchTreck(treck);

    } else if (audioTime === audioLength && treck >= 2) {
        document.querySelector('.song2').classList.remove('activeSong');
        document.querySelector('.song0').classList.add('activeSong');
        treck = 0;
        switchTreck(treck);

    }
    if (audioTime === audioLength) {
        btnPlay.forEach(e => e.classList.add('activePlay'));
        btnPlay.forEach(e => e.classList.remove('pause'));

        btnPlay[0].classList.add('pause');
        btnPlay[treck + 1].classList.add('pause');

        btnPlay[0].classList.remove('activePlay');
        btnPlay[treck + 1].classList.remove('activePlay');
    }


}, 10);


btnPrev.addEventListener("click", function () {
    // console.log(treck);
    if (treck > 0) {
        document.querySelector('.song' + treck).classList.remove('activeSong');
        document.querySelector('.song' + (treck - 1)).classList.add('activeSong');

        treck--;
        switchTreck(treck);
    } else {
        treck = 2;
        document.querySelector('.song0').classList.remove('activeSong');
        document.querySelector('.song2').classList.add('activeSong');
        switchTreck(treck);


    }
    btnPlay.forEach(e => e.classList.add('activePlay'));
    btnPlay.forEach(e => e.classList.remove('pause'));

    btnPlay[0].classList.add('pause');
    btnPlay[treck + 1].classList.add('pause');

    btnPlay[0].classList.remove('activePlay');
    btnPlay[treck + 1].classList.remove('activePlay');

    audioProgressBar();
    audio.play();
});

btnNext.addEventListener("click", function () {
    if (treck < 2) {

        document.querySelector('.song' + treck).classList.remove('activeSong');
        document.querySelector('.song' + (treck + 1)).classList.add('activeSong');
        treck++;
        switchTreck(treck);


    } else {
        document.querySelector('.song2').classList.remove('activeSong');
        document.querySelector('.song0').classList.add('activeSong');
        treck = 0;
        switchTreck(treck);
    }


    btnPlay.forEach(e => e.classList.add('activePlay'));
    btnPlay.forEach(e => e.classList.remove('pause'));

    btnPlay[0].classList.add('pause');
    btnPlay[treck + 1].classList.add('pause');

    btnPlay[0].classList.remove('activePlay');
    btnPlay[treck + 1].classList.remove('activePlay');

    audioProgressBar();
    audio.play();



});


//--------AUDIO --- Progress----------------
let audioProgress = document.querySelector('.audio__progress');
let allLength = document.querySelector('.all__length');
let nowLength = document.querySelector('.now__length');
let imgSound = document.querySelector('.img__sound');

function audioProgressBar() {
    let IntervalAudio = setInterval(function () {
        let audioLength = audio.duration;
        let audioTime = audio.currentTime;
        let timeMusic = 100 / audioLength * audioTime;

        if (timeMusic > 100) {
            clearInterval(audioProgressBar);
        } else {
            nowLength.textContent = '0:' + ((Math.round(audioTime) * 0.01).toFixed(2)).slice(2, 4);
            audioProgress.value = timeMusic;
            allLength.textContent = ' / 0:' + Math.floor(audio.duration);
        }

    }, 30)
};

audioProgress.oninput = function () {
    audio.currentTime = audio.duration / 100 * this.value;
}

imgSound.addEventListener('click', function () {

    if (audio.muted === true) {
        imgSound.style.backgroundImage = " url('../assets/svg/png-transparent-media-player-button-sound-speaker-volume-media-player-icon.svg')";
        audio.muted = false;
    } else {
        imgSound.style.backgroundImage = " url('../assets/svg/nosound-player.svg')";
        audio.muted = true;
    }
});

let mutedProgress = document.querySelector(".muted__progress");

mutedProgress.oninput = function () {
    audio.volume = this.value / 100;
}





