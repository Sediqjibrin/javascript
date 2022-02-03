
//======functions========
// declare a function .. use arrow functions
// call  a funtion
// pass parameters to functions 
//return statement

// function declration / expression

// let speak = function (name = "sediq",time = "night") {
//     console.log(`good ${time} ${name}`)
//     };
//     speak();
//     speak("david")
 
let button = document. getElementById("button")
let divs = document. getElementById("newdiv")

button.addEventListener("click", addPrompt)

console.log(divs)
console.log(button)

    let numArray = [0,1,5,7,9,3,8]

    function loopArray(){
        numArray.forEach((numArray) =>{
            let jet = numArray + 16
            console.log(jet)
        })
    }

loopArray()

// loopArray()
// function expresiion/ arrow function

let greeetings = () => {

}
greeetings()


//creat 2 functions called "addnumber", " multiplynumber"
//addnumbers should take 2 parameters inside the function block add both numbers and log the value

//multiplynumbers should take 4 parameters inside the function block multiply all numbers log the value

let addnumber =function (score, scot) {
    console.log(score + scot)

}

addnumber(100, 40)
  
let multiplynumber = function( A ,B ,C ,D) {
    console.log(A*B*C*D)
}
multiplynumber(56,30,120,400)

//DOM
// bring out prompt
function addPrompt (){
let username = prompt("what is my name");

let defaultname = !username ? "ronaldo" : username;

divs.innerHTML = `My Name is ${defaultname}`

}




// RETURN STATMENT

let calculatepercentage = (number) => {
    let result = number / 100;

    return result;
};

let user1percent = calculatepercentage(70)
let user2percent = calculatepercentage(90)
let user3percent = calculatepercentage(20)

let culmulative = user1percent + user2percent + user3percent;
console.log (culmulative)

setTimeout(() => {
    console.log("first to log")
}, 5000)

console.log("second to log")

setTimeout(() => {
    console.log("third to log")
}, 3000)

setTimeout(() => {
console.log("fourth to log")
}, 1000)

console.log("fifth to log")

