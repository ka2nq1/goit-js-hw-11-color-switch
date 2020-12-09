class CountDownTimer {
    constructor({ selector, targetDate }) {
        this.selector = selector;
        this.targetDate = targetDate;
        this.timerId = document.querySelector(this.selector);
        this.clockDays = this.timerId.querySelector('span[data-value="days"]');
        this.clockHours = this.timerId.querySelector('span[data-value="hours"]');
        this.clockMinutes = this.timerId.querySelector('span[data-value="mins"]');
        this.clockSecs = this.timerId.querySelector('span[data-value="secs"]');
        this.timer();
    }

    timer() {
        setInterval(() => {
            const currentTime = Date.now();
            const time = this.targetDate - currentTime;

            const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
            this.clockDays.textContent = days;

            const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
            this.clockHours.textContent = hours;

            const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
            this.clockMinutes.textContent = mins;

            const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
            this.clockSecs.textContent = secs;
        }, 1000);
    };

    pad(value) {
        return String(value).padStart(2, '0');
    }
};

const countDown = new CountDownTimer({
    selector: '#timer-1',
    targetDate: new Date('Jan 01, 2021'),
});
