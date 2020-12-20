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

// Santa's message

function sendMessage() {
    document.getElementById('message').style.cssText = "opacity: 1;"
}


// Catch the presents

function catchGift(gift) {

    if (gift === 'berry') {
        document.getElementById('berry').style.cssText = 'opacity: 0;';
    }
    if (gift === 'candy') {
        document.getElementById('candy').style.cssText = 'opacity: 0;';
    }
    if (gift === 'cookie') {
        document.getElementById('cookie').style.cssText = 'opacity: 0;';
    }
    if (gift === 'tree') {
        document.getElementById('tree').style.cssText = 'opacity: 0;';
    }
    if (gift === 'gift') {
        document.getElementById('gift').style.cssText = 'opacity: 0;';
    }
    if (gift === 'berry1') {
        document.getElementById('berry1').style.cssText = 'opacity: 0;';
    }
    if (gift === 'gift2') {
        document.getElementById('gift2').style.cssText = 'opacity: 0;';
    }
    if (gift === 'star') {
        document.getElementById('star').style.cssText = 'opacity: 0;';
    }
    if (gift === 'crown') {
        document.getElementById('crown').style.cssText = 'opacity: 0;';
    }


}

function addScore(gift) {
    let currentScore = parseInt(document.getElementById('score').innerHTML);
    console.log(currentScore);


    catchGift(gift);

    let score = currentScore + 1;

    document.getElementById('score').innerHTML = score;

    if (score === 8) {
        document.getElementById('berry').style.cssText = 'opacity: 1;';
        document.getElementById('candy').style.cssText = 'opacity: 1;';
        document.getElementById('cookie').style.cssText = 'opacity: 1;';
        document.getElementById('tree').style.cssText = 'opacity: 1;';
        document.getElementById('gift').style.cssText = 'opacity: 1;';
        document.getElementById('berry1').style.cssText = 'opacity: 1;';
        document.getElementById('gift2').style.cssText = 'opacity: 1;';
        document.getElementById('star').style.cssText = 'opacity: 1;';
        document.getElementById('crown').style.cssText = 'opacity: 1;';
    }
    if (score === 17) {
        document.getElementById('berry').style.cssText = 'opacity: 1;';
        document.getElementById('candy').style.cssText = 'opacity: 1;';
        document.getElementById('cookie').style.cssText = 'opacity: 1;';
        document.getElementById('tree').style.cssText = 'opacity: 1;';
        document.getElementById('gift').style.cssText = 'opacity: 1;';
        document.getElementById('berry1').style.cssText = 'opacity: 1;';
        document.getElementById('gift2').style.cssText = 'opacity: 1;';
        document.getElementById('star').style.cssText = 'opacity: 1;';
        document.getElementById('crown').style.cssText = 'opacity: 1;';
    }
    if (score === 26) {
        document.getElementById('berry').style.cssText = 'opacity: 1;';
        document.getElementById('candy').style.cssText = 'opacity: 1;';
        document.getElementById('cookie').style.cssText = 'opacity: 1;';
        document.getElementById('tree').style.cssText = 'opacity: 1;';
        document.getElementById('gift').style.cssText = 'opacity: 1;';
        document.getElementById('berry1').style.cssText = 'opacity: 1;';
        document.getElementById('gift2').style.cssText = 'opacity: 1;';
        document.getElementById('star').style.cssText = 'opacity: 1;';
        document.getElementById('crown').style.cssText = 'opacity: 1;';
    }
}