'use strict';

Vue.component ('date-and-login-box', {
    props: [],
    data: function () {
        return {
            timeNow: new Date().getTime() + 10800000,
            hour: this.data.timeNow.getHours(),
            /*date: `${this.data.timeNow.getDate()} ${this.data.timeNow.getMonth()} ${this.data.timeNow.getFullYear()} г.`,*/
            time: ``
        }
    },
    methods: {

    },
    mounted: function () {
       /* console.log(this.data.timeNow);
        let hours = this.data.timeNow.getHours();
        let minutes = this.data.timeNow.getMinutes();
        this.data.time = `${hours}:${minutes}`;
        console.log(this.$data.time)*/
    },
    template: `<div class="date-login-box">
                    <div class="date">
                        <p class="date-text">Текущая дата:</p>
                        <div class="date-value">{{ hour }}</div>
                        <p class="time-text">Текущее время:</p>
                        <div class="time-value">{{time}}</div>
                    </div>
                    <div class="login-box">
                    
                    </div>
                </div>`
})

//------------------------------------------------------

let loginWindow = Vue.component ('login-window', {
    props: [],
    template: ``
})

let newsBox = Vue.component ('news-box', {
    props: [],
    template: ``
})
'use strict';

let app = new Vue ({
    el: '#container',

    data: {
        timeNow: {
            day: Date.now(),
            month: null,
            year: null,
            hours: null,
            minutes: null,
        },
    },
    methods: {
        click() {
            console.log(this.day)
        }
    },
    mounted: function () {
        /* this.timeNow = new Date().getTime()
             .then(() => {
                 this.hours = this.timeNow.getHours()
                 this.minutes = this.timeNow.getMinutes()
                 this.data.time = `${this.hours}:${this.minutes}`
                 console.log(this.time)
             })*/
        /*console.log(this.timeNow);
        let hours = this.timeNow.getHours();
        let minutes = this.timeNow.getMinutes();
        this.data.time = `${hours}:${minutes}`;
        console.log(this.time)*/
    }
})