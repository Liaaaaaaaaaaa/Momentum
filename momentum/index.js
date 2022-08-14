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

// console.log(time);
// setInterval("viewImages()", 1000);
// console.log(timeOfDay());

function mixImage(arr) {
    return arr.map(i => [Math.random(), i]).sort().map(i => i[1])
};


let imgUrl = mixImage(timeOfDay());

document.body.style.background = 'url("' + imgUrl[1] + '")';

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

// console.log (imgNumberNow);
// console.log (timeOfDayNow);
// console.log(timeOfDayNow[imgNumberNow]);

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


// -----------------Clock and Calendar -----------------------------

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

    const dayMassiv = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    const monthMassiv = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
    return dayMassiv[day] + "," + dayM + " " + monthMassiv[month];

}

dates.innerText = dateNow();

//----------Greetings-----------------------------------------------

const greeting = document.querySelector('.greeting');

function greetingTime() {
    if (timeOfDayNow === imagesMorning) {
        return 'Доброе утро';
    }
    if (timeOfDayNow === imagesAfternoon) {
        return 'Добрый день';
    }
    if (timeOfDayNow === imagesEvening) {
        return 'Добрый вечер';
    }
    if (timeOfDayNow === imagesNight) {
        return 'Доброй ночи';
    }
};

greeting.innerText = greetingTime();

let inputNames = document.querySelector('.name');


window.onload = () => {
    inputNames.value = localStorage.getItem('.name');
    city.value = localStorage.getItem('.city');
    treck = 0;
}

inputNames.oninput = function () {
    let value = this.value;
    localStorage.setItem('.name', value);
}



// ------------Quotes----------------------------------------------
let quotes = [
    {
        "quote": "Грехи других судить Вы так усердно рветесь, начните со своих и до чужих не доберетесь",
        "author": "Уильям Шекспир"
    },
    {
        "quote": "Влюбиться можно в красоту, но полюбить – лишь только душу!",
        "author": "Уильям Шекспир"
    },
    {
        "quote": "Ничего само по себе не хорошо или плохо, это лишь то, как человек об этом думает",
        "author": "Уильям Шекспир"
    },
    {
        "quote": "Наши сомнения — это наши предатели. Они заставляют нас терять то, что мы возможно могли бы выиграть, если бы не боялись попробовать",
        "author": "Уильям Шекспир"
    },
    {
        "quote": "Во всяком деле, чтобы добиться успеха, нужна некоторая доля безумия",
        "author": "Уильям Шекспир"
    },
];

// console.log(quotes[1])

// let quotes = JSON.parse (quotes);
let quote = document.querySelector('.quote');
let author = document.querySelector('.author');

// console.log(quotes);

let random = Math.floor(Math.random() * quotes.length);
console.log(random);
function randomQuote() {
    quote.innerText = quotes[random].quote;
    author.innerText = quotes[random].author;
    if (random === quotes.length - 1) {
        random = 0;
    } else {
        random++
    }
};

randomQuote();

const changeQuote = document.querySelector('.change-quote');

// changeQuote.addEventListener("click", randomQuote);

if (changeQuote) {
    changeQuote.addEventListener("click", randomQuote);
};


// -----Weather ------------------------------------------------

// https://openweathermap.org/city/625144
// 'https://api.openweathermap.org/data/2.5/weather?id=625144&appid=34924d29b902927c46d4b8ec90a661b7'
// https://api.openweathermap.org/data/2.5/weather?lat=53.9&lon=27.5667&appid=34924d29b902927c46d4b8ec90a661b7

// https://openweathermap.org/find?q=Minsk
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// id=625143
// https://api.openweathermap.org/data/2.5/weather?q=Минск&appid=34924d29b902927c46d4b8ec90a661b7
let city = document.querySelector('.city');
city.value = 'Minsk';
let link = 'https://api.openweathermap.org/data/2.5/weather?q=' + city.value + '&appid=34924d29b902927c46d4b8ec90a661b7';


function weather() {
    fetch(link).then(function (resp) { return resp.json() }).then(function (data) {
        console.log(data);
        city.value.textContent = data.name;
        // console.log(data.name)
        document.querySelector('.weather-icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png" >`;
        document.querySelector('.temperature').innerHTML = Math.round(data.main.temp - 273) + ' &deg' + 'C';
        document.querySelector('.weather-description').textContent = data.weather[0]['description'];
        document.querySelector('.wind ').textContent = 'Скорость ветра: ' + Math.round(data.wind['speed']) + ' м/с';
        document.querySelector('.humidity').textContent = 'Влажность: ' + data.main['humidity'] + ' %';
    })
    //    catch (error) {
    //     console.log(error)} 
    // } 
};

weather();


console.log(city);


city.oninput = function () {
    value = this.value;
    localStorage.setItem('.city', value);
    weather();
};

if (localStorage.getItem('city')) {
    city.value = localStorage.getItem('city');
}

console.log(link);

// -------Audioplayer--------------------------------

let audio = document.getElementById("audio");
let btnPlay = document.querySelector(".play");
let btnPrev = document.querySelector(".play-prev");
let btnNext = document.querySelector(".play-next");

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
    audio.currentTime = 0;
    audio.play();
};

btnPlay.addEventListener("click", function () {
    if (btnPlay.classList.contains('activePlay')) {
        audio.play();
        btnPlay.classList.toggle('activePlay')
        btnPlay.classList.add('pause');
    } else {
        btnPlay.classList.remove('pause');
        audio.pause();
        btnPlay.classList.toggle('activePlay')
    };

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
    }, 10)
})

btnPrev.addEventListener("click", function () {
    if (treck > 0) {
        document.querySelector('.song' + treck).classList.toggle('activeSong');
        document.querySelector('.song' + (treck - 1)).classList.toggle('activeSong');
        treck--;
        switchTreck(treck); 
    } else { 
        treck = 2; 
        document.querySelector('.song0').classList.remove('activeSong');
        document.querySelector('.song2').classList.add('activeSong');
        switchTreck(treck); 
    }
});

btnNext.addEventListener("click", function () {
    if (treck < 2) {
        document.querySelector('.song' + treck).classList.toggle('activeSong');
        document.querySelector('.song' + (treck + 1)).classList.toggle('activeSong');
        treck++; 
        switchTreck(treck); 
    } else { 
        document.querySelector('.song2').classList.remove('activeSong');
        document.querySelector('.song0').classList.add('activeSong');
        treck = 0; 
        switchTreck(treck);
    }
});

