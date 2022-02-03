
// let num = 7;

// for (let i = 0; i <= num; i++) {
// console.log(i)
// // }

// let total = 0;

// console.log(total)

// for ( let i = 0; i <=3; i++) {
//     total = total + 1;
// }
// //1st ........>total = 1, i = 1
// //2nd .........>total = 2 i = 2
// //3rd ........>total =  3  i = 3
// //4th .........>total = 4 i = 4
// console.log(total);
// // 1 declare a variable and assing it a value of 5
// // 2 write a for loop with the condition i <9
// // 3 inside the for loop add 5 to the initial variables declared
// // 4 log the initial variables after the loop is done.

// let mobil = 5;
 
// for ( let i = 0; i < 9; i++){
//     mobil = mobil + 5;
// }
// console.log(mobil)

//===============object ================//
// let sediq = {
// name: "Abubakar",
// age: 20,
// profession:"developer",
// country: "nigeria",
// }
//  let statement = `my name is ${ sediq.name} and i am ${ sediq.age} years old. i am a ${sediq.profession}`
// console.log(sediq)
// console.log(statement)
// console.log(sediq.name)
  
// let frank = {
//     profession: "drummer",
//     grades: {
//         Maths:"A",
//         chemistry:"c",
//         school:{
//             primary:{
//                 first: "faith foundation",
//                 second: "projaro",

//             }
//         }
//     }
// }
//  let statement1 = `i am a  ${ frank.profession} i got ${frank.grades.Maths} in my maths text. i attend ${frank.grades.school.primary.second}`
// console.log(statement1)


//SWITCH STATEMENT break means to stop switch code from running
// let fruit = "banana"

// switch (fruit) {
//     case "banana":
//     console.log("the fruit is an apple");
//     break;
//     case "orange":
//     console.log("the fruit is an orange");
//     break;
//     default:
//         console.log("all conditions failed so the fruit must be a banana")
// }
//assignment
// grading score of course
// A is 75 to 100
// b is 60 to 74
// C is 50 to 59
// D is 40 to 49
// f is below 40
// anything else invalid score

let question = prompt("enter your score");
console.log(question)
   
if (question < 40) {
    alert("your gradeis F");
}else if (question >=40 && question <=49) {
    alert("YOUR GRADE IS D")
}else if (question >=50 && question <=69) {
alert("YOUR GRADE IS C")
}else if (question >=60 && question <=74) {
alert("YOUR GREADE IS B")
}else if (question >=75 && question <=100) {
 alert("YOUR GRADE IS A")
}else {
    alert("INVALID INPUT")
}