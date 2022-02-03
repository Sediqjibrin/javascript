let button = document.getElementById("pop")

let empty = document.getElementById("empty")

console.log(button)
console.log(empty)
button.addEventListener("click",addPrompt)

function addPrompt() {
    let grades = prompt("enter your score")
    
    if (grades < 40 && grades >=1 ) {
        
        empty.innerText = `your grade is F !!! sorry your not qaulified for the next class!!!`
        empty.style.color ="red"
    } else if (grades >= 40 && grades <= 49) {
        empty.innerText = `your grade is D!!!, sorry your not qualified for the next class!!!`
        empty.style.color ="red"
        
    } else if (grades >=50 && grades <=69) {
        empty.innerText = `your grade is C!!!, Congratulation your qualified for the next class!!!`
        empty.style.color = "green"
        
    } else if (grades >= 60 && grades <= 74) {
        empty.innerText = `your grade is B!!!, wonderful. congrat your qualified for the next class!!!`
        empty.style.color = "green"
    } else if (grades>=75 && grades <=100) {
        empty.innerText = `your grade is A!!!, A big congrat. your qualified for the next class!!!`
        empty.style.color = "green"
    } else if (grades==="") {
        empty.innerText = `please enter a score!`
        empty.style.color = "red"
    } else {
        empty.innerText = `oops,wrong input pls kindly enter your score!`
        empty.style.color = "red"
    }


}






// function addPrompt (){
//     let username = prompt("what is my name");
    
//     let defaultname = !username ? "ronaldo" : username;
    
//     divs.innerHTML = `My Name is ${defaultname}`
    
//     }

// if (question < 40 && question == 1) {
//     alert("your gradeis F");
// }else if (question >=40 && question <=49) {
//     alert("YOUR GRADE IS D")
// }else if (question >=50 && question <=69) {
// alert("YOUR GRADE IS C")
// }else if (question >=60 && question <=74) {
// alert("YOUR GREADE IS B")
// }else if (question >=75 && question <=100) {
//  alert("YOUR GRADE IS A")
// }else if ( question ===""){
//     alert("pls enter your score")
// } else {
//     alert("invalid input")
// }