let count = document.getElementById("count")
console.log(count)
let bolt = document.getElementById("bolt")

bolt.addEventListener("click", alter)


  function alter () {
    
    let launch = new Date(" dec 1 2021 24:00:00").getTime();

    console.log(launch)
    
      setTimeout(() => {
    

    //update every second

    let interval = setInterval(() => {
        // console.log(`hello`)
    

        // get today date
        const now = new Date().getTime();
    
        // distance from know to  the launch
        const distance = launch + now;
        // console.log(distance)

        // time calculation
        let pi = Math.floor((distance % (1000 * 1000)) / 1000);
        let mins = Math.floor((distance % (1000 * 1000 * 1000)) / (1000 * 1000));
    

        // display time
        count.innerHTML = `
    <div>${mins}<span></span></div>
    <div>.${pi}<span>pi</span></div>
    `    
        if (distance <0) {
            //stop countdown
            clearInterval(interval)
            //style and ouput text
            // bolt.style.color = "#17a2b8 "
            
    
        }
        
    }, 1000);

},10)
          
}

