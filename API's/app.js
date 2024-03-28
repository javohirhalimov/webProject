// "https://swapi.dev/api/people/1/"

// const req = new XMLHttpRequest();

// req.onload = function(){
//     console.log("IT LOADED");
//     const data = JSON.parse(this.responseText);
//     console.log(data.name, data.height);
// }

// req.onerror = function(){
//     console.log("ERROR!!!!");
//     console.log(this);
// }
// req.open("GET","https://swapi.dev/api/people/1/");
// req.send();

// fetch("https://swapi.dev/api/people/1/")
// .then(res => {
//     console.log("RESOLVED!", res);
//     return res.json()
// })
// .then((data) => {
//     console.log(data);
//     return fetch("https://swapi.dev/api/people/2/")
// })

// .catch(e => {
//     console.log("ERROR!", e);
// });

// const loadStarWarsPeople = async() => {
//     try {
//         const res = await fetch("https://swapi.dev/api/people/1/");
//         const data = await res.json();
//         console.log(data)
//     }
//     catch (e){
//         console.log("ERROR!")
//     }
  

// };
// loadStarWarsPeople();

// axios.get("https://swapi.dev/api/people/1/").then((res) => {
//     console.log("RESPONSE: ", res);
// })
// .catch((e) => {
//     console.log("ERROR!", e)
// })

// const getStarWarsPerson = async () => {
//     try{
//         const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
//         console.log(res.data);
//     }
//     catch (e){
//         console.log("ERROR", e)
//     }

// }
// getStarWarsPerson(5);
// getStarWarsPerson(10);

const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');

const addNewJoke = async () => {
    const jokeText = await getDadJoke()
    //console.log(jokeText)
    const newLI = document.createElement('LI')
    newLI.append(jokeText);
    jokes.append(newLI);
   // jokes.append(newLI);
}
const getDadJoke = async () => {
    const config = {headers: {Accept: 'application/json'}}
    const res = await axios.get('https://icanhazdadjoke.com/', config);
    return res.data.joke
}
button.addEventListener('click',addNewJoke);
