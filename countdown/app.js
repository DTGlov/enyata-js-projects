// Set the date we're counting down to
let countDownDate = new Date("Dec 25, 2021 00:00:01").getTime();
console.log(countDownDate)

//get  a reference to the div that will show the timer
const timer = document.querySelector('.show-timer')
const timerOver = document.querySelector('.timer-over')

//create a template to inject into the show-timer div
function TimerTemplate(days,hours,minutes,seconds) {
  const html = `
                <p>${days}d</p>
                <p>${hours}h</p>
                <p>${minutes}m</p>
                <p>${seconds}s</p>
            `
  timer.innerHTML = html
}

// Update the count down every 1 second
let x = setInterval(function() {

  // Get today's date and time
  let now = new Date().getTime();

    
  // Find the distance between now and the count down date
  let duration = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(duration / (1000 * 60 * 60 * 24));
  let hours = Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((duration % (1000 * 60)) / 1000);
    
//pass the results into the TimerTemplate function
  TimerTemplate(days, hours, minutes, seconds);
    
}, 1000);