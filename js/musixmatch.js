
let names = document.getElementById("artist") // input field
let dabutton = document.getElementById("dabutton") //button
// let nothing = document.getElementById("nothing")
let names = document.getElementById("name")//div tag

dabutton.addEventListener("click", tracksearch) // click even button
 
let MUSIX_MATCH_URL = "http://api.musixmatch.com/ws/1.1";

let cors = "http://cors.bridged.cc"

let API_KEY = "ccb9ce1abf58df0b57d86488c519f05e"

async function tracksearch() {
    try {
        let inputField = artist.value

        if (!inputField) {
            alert("please enter an artist");
            return;
        }
        //api call

        let Url = `${cors}/${MUSIX_MATCH_URL} track.search?_artist=${inputField}&apikey=${API_KEY}`

        let response = await fetch(Url)
        let data = await response.json()
        let tracks = data.message.body.track_list;

        tracks.forEach((track) => {
            let newElemenet = document.createElement("div")
            newElemenet.innerHTML = track.track.track_name

            names.appendChild(newElemenet)
            console.log(track.track.track_name)
        }
        );
    } catch (err) {
        throw err;
    }
};
