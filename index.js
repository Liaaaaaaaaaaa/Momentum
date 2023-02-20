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

inputNames.oninput = function () {
    let value = this.value;
    localStorage.setItem('.name', value);
}



window.onload = () => {
    inputNames.value = localStorage.getItem('.name');
    // value = localStorage.getItem('.city');
    // city.value = localStorage.getItem('.city');
    // weather(value);
    treck = 0;


}




// ------------Quotes----------------------------------------------
let quotes = [
    {
        "quote": "Грехи других судить Вы так усердно рветесь, начните со своих и до чужих не доберетесь. Генрих VI",
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
        "quote": "Наши сомнения — это наши предатели. Они заставляют нас терять то, что мы возможно могли бы выиграть, если бы не боялись попробовать. Мера за меру",
        "author": "Уильям Шекспир"
    },
    {
        "quote": "Во всяком деле, чтобы добиться успеха, нужна некоторая доля безумия",
        "author": "Уильям Шекспир"
    },
    {
        "quote": "Что значит имя? Роза пахнет розой, хоть розой назови ее, хоть нет. Ромео и Джульетта",
        "author": "Уильям Шекспир"
    },
    {
        "quote": "Лживое лицо скроет все, что задумало коварное сердце. Макбет",
        "author": "Уильям Шекспир"
    },
    {
        "quote": "Тогда лишь двое тайну соблюдают, когда один из них её не знает. Ромео и Джульетта",
        "author": "Уильям Шекспир"
    },
    {
        "quote": "Одним взглядом можно убить любовь, одним же взглядом можно воскресить ее. Венера и Адонис",
        "author": "Уильям Шекспир"
    },
    {
        "quote": "Совсем не знак бездушья — молчаливость. Гремит лишь то, что пусто изнутри. Король Лир",
        "author": "Уильям Шекспир"
    },
    {
        "quote": "Можно улыбаться, улыбаться и быть подлецом. (Можно жить с улыбкой и с улыбкой быть подлецом…). Гамлет",
        "author": "Уильям Шекспир"
    },
    {
        "quote": "Я смею всё, что можно человеку, кто смеет больше, тот не человек! Макбет",
        "author": "Уильям Шекспир"
    },
    {
        "quote": "Так сладок мёд, что, наконец, он горек. Избыток вкуса убивает вкус. Ромео и Джульетта",
        "author": "Уильям Шекспир"
    },
    {
        "quote": "Имей больше, чем показываешь. Говори меньше, чем знаешь.Король Лир",
        "author": "Уильям Шекспир"
    },
    {
        "quote": "Во всяком деле, чтобы добиться успеха, нужна некоторая доля безумия",
        "author": "Уильям Шекспир"
    },
    {
        "quote": "Искать того напрасно, кто не желает, чтоб его нашли.(Зачем искать того, кто найден быть не хочет?) Ромео и Джульетта",
        "author": "Уильям Шекспир"
    },
    {
        "quote": "Вбирай все мненья, но храни своё. Гамлет",
        "author": "Уильям Шекспир"
    },
    {
        "quote": "Тогда лишь двое тайну соблюдают, когда один из них её не знает.",
        "author": "Уильям Шекспир"
    },
    {
        "quote": "Все влюбленные клянутся исполнить больше, чем могут, и не исполняют даже возможного. Троил и Крессида",
        "author": "Уильям Шекспир"
    },
    {
        "quote": "Быть иль не быть — вот в чем вопрос. Гамлет",
        "author": "Уильям Шекспир"
    },

    {
        "quote": "Любовь бежит от тех, кто гонится за нею, а тем, кто прочь бежит, кидается на шею. Виндзорские насмешницы",
        "author": "Уильям Шекспир"
    },
    {
        "quote": "Как можешь ты судить о том, чего не знаешь?. Ромео и Джульетта",
        "author": "Уильям Шекспир"
    },
    {
        "quote": "Когда пылает кровь, как щедр язык на клятвы! Гамлет",
        "author": "Уильям Шекспир"
    },
    {
        "quote": "Только настоящий друг может терпеть слабости своего друга.Юлий Цезарь",
        "author": "Уильям Шекспир"
    },
    {
        "quote": "Любовь юнцов не в душах, а в глазах. Ромео и Джульетта",
        "author": "Уильям Шекспир"
    },
    {
        "quote": "Чтобы поймать счастье, надо уметь бегать. Король Лир",
        "author": "Уильям Шекспир"
    },
    {
        "quote": "... Быть может, твой единственный алмаз простым стеклом окажется на глаз. Ромео и Джульетта",
        "author": "Уильям Шекспир"
    },
    {
        "quote": "У бурных чувств неистовый конец, он совпадает с мнимой их победой, разрывом слиты порох и огонь. Ромео и Джульетта",
        "author": "Уильям Шекспир"
    },
    {
        "quote": "Из женщины не трудно сделать дуру, когда она боится дать отпор! Укрощение строптивой",
        "author": "Уильям Шекспир"
    },
    {
        "quote": "... Не будь ни расточителем, ни скрягой: лишь в чувстве меры истинное благо. Ромео и Джульетта",
        "author": "Уильям Шекспир"
    },
    {
        "quote": "Живи пока ты жив, приятель...Ромео и Джульетта",
        "author": "Уильям Шекспир"
    },
    {

        "quote": "Весь мир — театр. В нем женщины, мужчины — все актеры. У них свои есть выходы, уходы, и каждый не одну играет роль.",
        "author": "Уильям Шекспир"
    },
    {
        "quote": "Подарок нам не мил, когда разлюбит тот, кто подарил. Гамлет",
        "author": "Уильям Шекспир"
    },
    {
        "quote": "А впрочем, что ж, на свете нет чудес: как волка ни корми, он смотрит в лес. Гамлет",
        "author": "Уильям Шекспир"
    },
    {
        "quote": "Стремясь к лучшему, мы часто портим хорошее. Король Лир",
        "author": "Уильям Шекспир"
    },
    {
        "quote": "Как часто нас спасала слепота, где дальновидность только подводила. Гамлет",
        "author": "Уильям Шекспир"
    },
    {
        "quote": "Любовь нежна? Она груба и зла. И колется, и жжётся, как терновник. Ромео и Джульетта",
        "author": "Уильям Шекспир"
    },
    {
        "quote": "Слова — всегда слова. Отелло",
        "author": "Уильям Шекспир"
    },
    {

        "quote": "Стал мир невыносим, c тех пор, как лесть учтивостью назвали. Двенадцатая ночь, или что угодно",
        "author": "Уильям Шекспир"
    },
    {
        "quote": "Быть честным — по нашим временам значит быть единственным из десяти тысяч. Гамлет",
        "author": "Уильям Шекспир"
    },

    {
        "quote": "Лучше опасаться без меры, чем без меры доверять. От бед спасает только осторожность. Король Лир",
        "author": "Уильям Шекспир"
    },
    {
        "quote": "В уме нечутком не место шуткам. Гамлет",
        "author": "Уильям Шекспир"
    },
    {
        "quote": "Есть многое на свете, друг Горацио, что и не снилось нашим мудрецам. Гамлет",
        "author": "Уильям Шекспир"
    },
    {
        "quote": "Напрасно думать, будто резкий тон есть признак прямодушия и силы. Король Генрих IV",
        "author": "Уильям Шекспир"
    },
    {

        "quote": "Слыхали так, услышали вы плохо! Зовусь я Катарина.... И всем известен злой ее язык",
        "author": "Уильям Шекспир"
    },
];


let quote = document.querySelector('.quote');
let author = document.querySelector('.author');
let random = Math.floor(Math.random() * quotes.length);


async function randomQuote() {
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



if (changeQuote) {
    changeQuote.addEventListener("click", randomQuote);
};


// -----Weather ------------------------------------------------


function translit(word) {
    let answer = '';
    let converter = {
        'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd',
        'е': 'e', 'ё': 'e', 'ж': 'zh', 'з': 'z', 'и': 'i',
        'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n',
        'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't',
        'у': 'u', 'ф': 'f', 'х': 'h', 'ц': 'c', 'ч': 'ch',
        'ш': 'sh', 'щ': 'sch', 'ь': '', 'ы': 'y', 'ъ': '',
        'э': 'e', 'ю': 'yu', 'я': 'ya',

        'А': 'A', 'Б': 'B', 'В': 'V', 'Г': 'G', 'Д': 'D',
        'Е': 'E', 'Ё': 'E', 'Ж': 'Zh', 'З': 'Z', 'И': 'I',
        'Й': 'Y', 'К': 'K', 'Л': 'L', 'М': 'M', 'Н': 'N',
        'О': 'O', 'П': 'P', 'Р': 'R', 'С': 'S', 'Т': 'T',
        'У': 'U', 'Ф': 'F', 'Х': 'H', 'Ц': 'C', 'Ч': 'Ch',
        'Ш': 'Sh', 'Щ': 'Sch', 'Ь': '', 'Ы': 'Y', 'Ъ': '',
        'Э': 'E', 'Ю': 'Yu', 'Я': 'Ya', '': ' '
    };




    for (let i = 0; i < word.length; ++i) {
        if (converter[word[i]] == undefined  ) {

            answer += word[i];
        } else {
            answer += converter[word[i]];
        }
    }

    return answer.trim();
}



let city = document.querySelector('.city');


async function weather(value) {

    console.log(translit(value));

    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + translit(value) + '&appid=34924d29b902927c46d4b8ec90a661b7').then(function (resp) { return resp.json() }).then(function (data) {

        value.textContent = data.name;

        try {
            document.querySelector('.weather-icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png" >`;
            document.querySelector('.temperature').innerHTML = Math.round(data.main.temp - 273) + ' &deg' + 'C';
            document.querySelector('.weather-description').textContent = data.weather[0]['description'];
            document.querySelector('.wind ').textContent = 'Скорость ветра: ' + Math.round(data.wind['speed']) + ' м/с';
            document.querySelector('.humidity').textContent = 'Влажность: ' + data.main['humidity'] + ' %';




        }
        catch (error) {
            console.log(error);
            document.querySelector('.weather-icon').innerHTML = 'Ошибка! Город не найден!';
            document.querySelector('.temperature').innerHTML = '';
            document.querySelector('.weather-description').textContent = '';
            document.querySelector('.wind ').textContent = '';
            document.querySelector('.humidity').textContent = '';
        }

    })
};



weather('Минск');




city.oninput = function () {
    value = this.value;

    // localStorage.setItem('.city', value);
     weather(value);

};


if (localStorage.getItem('city')) {
    city.value = localStorage.getItem('city');
    weather(city.value);
}


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
        // console.log(playlist);
        // console.log(treck);

        let numberTreckButton = playlist.findIndex(elem => elem === (e.target.previousElementSibling.textContent + '.mp3'));
        let nameTreckButton = e.target.previousElementSibling.textContent;

        if (numberTreckButton !== treck && nameTreckButton.length > 0 && button.classList.contains('activePlay')) {
            switchTreck(numberTreckButton);
            treck = numberTreckButton;
        }

        // console.log(btnPlay);
        // console.log(Array.from(btnPlay).filter(elem => elem === (e.target.previousElementSibling.textContent + '.mp3')));
        if (button.classList.contains('activePlay')
            // && numberTreckButton >= 0
        ) {

            btnPlay.forEach(e => e.classList.add('activePlay'));
            btnPlay.forEach(e => e.classList.remove('pause'));

            btnPlay[treck + 1].classList.remove('activePlay');
            btnPlay[0].classList.remove('activePlay');

            btnPlay[0].classList.add('pause');
            btnPlay[treck + 1].classList.add('pause');

            console.log(treck);
            document.querySelector('.activeSong').classList.remove('activeSong');

            document.querySelector('.song' + treck).classList.add('activeSong');
            audioProgressBar();
            audio.volume = 0.5;
            audio.play();
            //    Array.from(btnPlay).filter(e => e.classList.contains('activePlay')).forEach(e => e.classList.toggle('activePlay'));
        } else {
            // btnPlay.forEach(e => e.classList.remove('activePlay'));
            // btnPlay.forEach(e => e.classList.add('pause'));
            btnPlay[treck + 1].classList.add('activePlay');
            btnPlay[0].classList.add('activePlay');

            btnPlay[0].classList.remove('pause');
            btnPlay[treck + 1].classList.remove('pause');
            audio.pause();
            console.log(activePlay);

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
    console.log(treck);
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
    console.log(audio.currentTime);
    console.log(this.value);
    console.log(audio.duration);
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





