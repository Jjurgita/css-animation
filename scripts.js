// Christmas Countdown
function christmasCountdown() {
    let now = new Date();
    let month = (now.getMonth() + 1);
    let day = now.getDate();

    let christmasYear = now.getFullYear();
    if (month == 12 && day > 25) {
        christmasYear = christmasYear + 1;
    }

    let christmasDate = christmasYear + '-12-25T00:00:00.000Z';
    let christmasDay = new Date(christmasDate);

    let diffSeconds = Math.floor((christmasDay.getTime() - now.getTime()) / 1000);

    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;

    if (month != 12 || (month == 12 && day != 25)) {
        days = Math.floor(diffSeconds / (3600 * 24));
        diffSeconds -= days * 3600 * 24;
        hours = Math.floor(diffSeconds / 3600);
        diffSeconds -= hours * 3600;
        minutes = Math.floor(diffSeconds / 60);
        diffSeconds -= minutes * 60;
        seconds = diffSeconds;
    }

    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;

    setTimeout(christmasCountdown, 1000);

}

christmasCountdown();