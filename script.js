let jokeSpace=document.querySelector(".joke");
let jokeBtn=document.querySelector(".btn");


const api="https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";
fetch(api).then((data)=>data.json()).then((data)=>jokeSpace.innerHTML=data.joke);

jokeBtn.addEventListener("click",()=>fetchJoke());

function fetchJoke(){
    fetch(api).then((data)=>data.json()).then((data)=>jokeSpace.innerHTML=data.joke)
}