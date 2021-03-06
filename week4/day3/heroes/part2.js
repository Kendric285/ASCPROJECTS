/* In Part 2 we will create a form that will allow the user to create a new
 * superhero to add to our list. You can do this!
 */

// 1. Create a form that has an input for the hero's name, secret identity,
// powers, team, and their saying. Give the form a button that says "Add Hero" and append it to the #form-box div
let userHeroes = []
let div = document.createElement("div")
div.id = "heroes"
let form = document.getElementById("form-box")

let button = document.createElement("button")
button.innerText = "Add Hero"


let nameInput = document.createElement("input")
nameInput.id = "name"
nameInput.placeholder = "Name"

let secretName = document.createElement("input")
secretName.id = "secret"
secretName.placeholder = "Secret Identity"

let powers = document.createElement("input")
powers.id = "powers"
powers.placeholder = "Powers"

let team = document.createElement("input")
team.id = "team"
team.placeholder = "Team"

let saying = document.createElement("input")
saying.id = "saying"
saying.placeholder = "Saying"






form.appendChild(nameInput)
form.appendChild(secretName)
form.appendChild(powers)
form.appendChild(team)
form.appendChild(saying)
form.appendChild(button)
form.appendChild(div)






// 2. Add an event listener to the form's button that checks for a click, then
// calls a function called "addHero."

button.onclick = function(){

    userHeroes.push(
        {
            name: nameInput.value,
            secretIdentity: secretName.value,
            powers: [powers][0].value,
            team: team.value,
            saying: saying.value,
        }
    )

    // for(i in userHeroes){
    //     console.log(userHeroes[i].name)
    // }

    for(i in userHeroes){
        let heroList = document.getElementById("heroes")
        heroList.innerHTML = ""
    
        let name = document.createElement("h2")
        name.innerText = userHeroes[i].name
    
        let team = document.createElement("p")
        team.innerText = "Team: " + userHeroes[i].team
    
        let identity = document.createElement("p")
        identity.innerText = "Secret Identity: " + userHeroes[i].secretIdentity
        
        let list = document.createElement("ul")
    
        let powers = document.createElement("h3")
        powers.innerText = "Powers: "
        let power = document.createElement("li")
        power.innerText = userHeroes[i].powers
    
        list.appendChild(powers)
        list.appendChild(power)
    
        let heroDiv = document.createElement("div")
        heroList.appendChild(heroDiv)
        heroDiv.appendChild(name)
        heroDiv.appendChild(team)
        heroDiv.appendChild(identity)
        heroDiv.appendChild(list)
        
        

    }
    nameInput.value = ""
    secretName.value = ""
    powers.value = ""
    team.value = ""
    saying.value = ""



}




/* 3. Modify the addHero function so that it creates an object using the values
 * in the form, then adds it to the hero array created in part1. Here is a reminder of
 * what our hero objects from part 1 looked like:
 *
 * {
 * name: "Nobody Man",
 * secretIdentity: "Bob Fakeman",
 * powers: ['invisibility', 'can erase your memory of him'],
 * team: 'The Randos',
 * saying: "You don't know me!",
 * }
 *
 * After the addHero function adds our new hero to the array, rewrite the
 * contents of the #hero-list div so that it includes the hero that's been just
 * added
 */

function addHero() {

}

// Part 2 complete!

/* Bonus Ideas:
 * Add images for your heroes
 * style up the page so it looks puuuuurty
 */
