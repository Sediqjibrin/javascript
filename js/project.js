const countdown = document.querySelector(".countdown")


let launch = new Date(" dec 1 2021 24:00:00").getTime();

console.log(launch)

//update every second

let interval = setInterval(() => {
    // console.log(`hello`)
    

    // get today date
    const now = new Date().getTime();
    
    // distance from know to  the launch
    const distance = launch - now;
    // console.log(distance)

    // time calculation
    let days = Math.floor(distance /(1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60 )) / 1000 );
    
    

    // display result
    countdown.innerHTML = `
    <div>${days}<span> Days</span></div>
    <div>${hours}<span>Hours</span></div>
    <div>${mins}<span>Minute</span></div>
    <div>${seconds}<span>seconds</span></div>
    
    
    `

    //if lunch
    
    if (distance < 0) {
        //stop countdown
        clearInterval(interval)
        //style and ouput text
        countdown.style.color = "#17a2b8 "
        countdown.innerHTML = "launched!"
    }
}, 1000);

