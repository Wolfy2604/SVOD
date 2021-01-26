'use strict';

window.onload = () => {
    new News().newsRender();
    new DateAndTime().timeRender();
}

//Clock

class DateAndTime {
    constructor() {
    }
    nowRender() {
        let date = new Date(Date.now());
        let dateText = `${date.getDate()}.${date.getMonth()}.${date.getFullYear()} г.`
        let timeText = `${date.getHours() - 1}:${date.getMinutes()}`
        let dateBox = document.querySelector('.date-value');
        let timeBox = document.querySelector('.time-value');
        dateBox.innerHTML = dateText;
        timeBox.innerHTML = timeText;
    }
    timeRender() {
        this.nowRender();
        setInterval(this.nowRender, 1000)
    }
}

//Login

class Login {
    regexp = /(A-Z+a-z+\d+){5-15}/
    userLogin = ''
    constructor(userLogin) {
        this.userLogin = userLogin;
    }
    checkLogin () {
        let loginValue = document.querySelector('#login').value;
        console.log('adada');
    }
}

let login = new Login(document.querySelector('#login').value);
console.log(login);

//Registration

//News

class News {
    newsData = {};
    newsCount = 1;
    newsDataExample = [
        [`20-12-2017 17-00`, `LoremLorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, atque debitis ea est, fugit ipsa magni nisi placeat quas quos recusandae reprehenderit sint? Accusantium ex explicabo in quibusdam, ratione voluptates. \\nbsp
                        ipsum dolor sit amet,emLorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, atque debitis ea est, fugit ipsa magni nisi placeat quas quos recusandae reprehenderit sint? Accusantium ex explicabo in quibusdam, ratione voluptates. \\nbsp
                        ipsum dolor sit amet, consectetur ea eoluptates.`], [`20-12-2017 17-02`, `Lorem5  dadada da daf`]
    ];
    constructor(newsData) {
        this.newsData = newsData;
    }
    newsRender () {
        let newsBlock = document.querySelector(`.news-header`);
        for (let news of Object.entries(this.newsDataExample)) {
            let newsText = news[1][1];
            newsBlock.insertAdjacentHTML("afterend",
                `  <div class="news-block news-block${this.newsCount}">
                            <p class="news-block-date news-block-date${this.newsCount}"></p>
                            <p class="news-block-text news-block-text${this.newsCount}"></p>
                        </div>`);
            document.querySelector(`.news-block-date${this.newsCount}`).innerHTML = `${news[1][0]}`;
            document.querySelector(`.news-block-text${this.newsCount}`).innerHTML = `${newsText}`;
            let currentBlock = document.querySelector(`.news-block${this.newsCount}`);
            this.newsCount++;
            if (newsText.length > 122) {
                currentBlock.classList.add(`news-block-big`);
            }
        }
    }
}

