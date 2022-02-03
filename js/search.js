
// http://api.genderize.io/?name=scott
// http://cors.bridged.cc
//http://api.musixmatch.com/ws/1.1

let names = document.getElementById("artist")
let dabutton = document.getElementById("dabutton")
let nothing = document.getElementById("nothing")
// let names = document.getElementById("name")

let BASE_URL = "http://api.genderize.io";
let cors = "https://cors.bridged.cc"
//FETCH
dabutton.addEventListener("click", getGender)
    
  async function getGender () {
    try {
        console.log(name)
        console.log(names.value)
    let inputValue = names.value

        if (!inputValue) {
            alert("please enter a name");
            return;
        }
            
        //API call
        let response = await fetch(`${cors}/${BASE_URL}/?name=${inputValue}`);
        let data = await response.json();

        if (!data.gender) {
            nothing.innerHTML = "the gender of this name is not known"
        } else {
            nothing.innerHTML = `the gender of this name is ${data.gender} and the probability is ${data.probability}`
        }
        //sediq
        console.log(data)
        console.log(data.name)
        console.log(data.gender)
        console.log(data.probability)
    } catch (err) {
        console.log(err);
        throw err;
    }
}

// //=====================muxixmatch==============//

// let MUSIX_MATCH_URL = "http://api.musixmatch.com/ws/1.1";
// // let cors = "http://cors.bridged.cc"
//   let API_KEY = "ccb9ce1abf58df0b57d86488c519f05e"	
  
// async function findsong() {
//     try {
//         let Url = ` ${cors}/${MUSIX_MATCH_URL}/track.search?q_artist=${inputField}&apikey=${API_KEY}`

//         let response = await fetch(Url);

//         let data = await response.json();
//         console.log(data)
//         console.log(data.mesaage.body)
//         console.log(data.mesaage.body.track_list)

//         let tracks = data.mesaage.body.track_list;

//         tracks.forEach((track) => {
//             let newELEMENT = document.createElement("div")
//             newELEMENT.innerHTML = track.track.track_name
//                 console.log(newELEMENT)
//             console.log(track.track.track_name)

//             names.appendChild(newElement)
//             console.log(names)
//             console.log(track.track.track_name)
//         });

//     } catch (err) {
//         throw err;
//     }

// }


































// let getGender = async (name) => {
//     try {

//         // let response = await fetch(`${cors}/${BASE_URL}/?name=${name}`);
//         let response = await fetch(`${cors}/${BASE_URL}/?name=${name}`);
        
//         let data = await response.json();
//         console.log(data)


//     } catch (err) {
//         console.log(err);
//         throw err;
//     }
// }

// getGender("sediq");





// ccb9ce1abf58df0b57d86488c519f05e