document.addEventListener('DOMContentLoaded',domloaded,false);
function domloaded(){
    // set time you want countdown to end
    var targetDate  = new Date('August 13, 2014').getTime();
    // variables for time units
    var d, h, m, s;
    // input into tag element
    var countdown = document.getElementById('date');
    // have the code run every second
    setInterval (function () {
        // get amount of second between now and target date
        var currentDate = new Date().getTime();
        var secondsLeft = (targetDate - currentDate) / 1000;
        // determine amount of days, hours, minutes, seconds remaining
          // as a side note parseInt parses a string and brings it back as an integer
        d = parseInt(secondsLeft / 86400);
        secondsLeft = secondsLeft % 86400;

        h = parseInt(secondsLeft / 3600);
        secondsLeft = secondsLeft % 3600;

        m = parseInt(secondsLeft / 60);
        s = parseInt(secondsLeft % 60);
    //format and insert into element
        countdown.innerHTML = d + 'd, ' + h + 'h,' + m + 'm, ' + s + 's' +'<p>'+'until next launch'+'</p>';
    }, 1000);


}