let display = document.getElementById("display")

let buttons = Array.from(document.getElementsByClassName("button"))
console.log (buttons)

buttons.map(button => {

    button.addEventListener('click', (e)  => {
        
        // console.log('click')
        // console.log(e)
        // console.log(e.target)
        // console.log(e.target.innerText);

        switch (e.target.innerText) {
        
            case "c":
                display.innerText = ""
                break;
            
             case "b":
                if (display.innerText) {
                    display.innerText = display.innerText.slice(0, -1)
                }
                break
            
            case "=":
                try {
                    display.innerText = eval(display.innerText)
                } catch {
                   display.innerText = " syntax error!"
                    display.style.color = ""
                }
                break
            
            default:
           display.innerText += e.target.innerText 
        }
    })
    
})