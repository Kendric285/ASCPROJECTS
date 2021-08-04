document.getElementById("two").innerHTML = "change"
let num = 1
let heading = document.querySelector("h1");
let button = document.querySelector("button")
heading.style["background-color"] = "red";

button.onclick = function(){
    num++;
    if(num % 2 == 0){
        heading.style["background-color"] = "blue";
    }
    else{
        heading.style["background-color"] = "red";
    }

}	
const getPokemon = async id =>{
    let url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    let res = await fetch(url)
    let pokemon = await res.json()
    let imgSrc = pokemon.sprites.front_default
    let img = document.getElementById("poke_img")
    let name = pokemon.forms[0].name
    document.getElementById("demo").innerHTML = name
    img.src = imgSrc
    console.log(imgSrc)
    console.log(name)
}




function myFunction() {
    let x = document.getElementById("numb").value;
    
    getPokemon(x)
}


