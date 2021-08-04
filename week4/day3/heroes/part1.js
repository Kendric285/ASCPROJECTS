/* In Part 1, we're going to create a Superhero list! Think back to previous
 * lessons, help your classmates if things are going smoothly, and ask for help
 * if you need it!
 */


// 1. create three superheroes with the same format as Nobody Man

const nobodyMan = {
  name: "Nobody Man",
  secretIdentity: "Bob Fakeman",
  powers: ['invisibility', 'can erase your memory of him'],
  team: 'The Randos',
  saying: "You don't know me!",
}



// Add your heroes here
const batman = {
  name: "Batman",
  secretIdentity: "Bruce Wayne",
  powers: ['Rich'],
  team: 'Justice League',
  saying: "I'm batman!",
}

const hulk = {
  name: "Hulk",
  secretIdentity: "Bruce Banner",
  powers: ['Strong'],
  team: 'Avengers',
  saying: "Don't make me angry",
}

const wolverine = {
  name: "Wolverine",
  secretIdentity: "Logan",
  powers: ['Regeneration'],
  team: 'X-Men',
  saying: "I'm gonna cut your head off",
}



// 2. Create an array called "heroes" and put your hero objects in it
let heroes = [batman,hulk,wolverine]



/* 3. Create a loop that makes a <div> element for each hero in the array. The
 * div should contain the following:
 *    a. An <h2> element that contains the hero's name at the top
 *    b. <p> elements that contain the hero's team and secret identity with
 *    labels
 *    c. An <ul> element that contains an <h3> element that contains "Powers:"
 *    and an <li> element that contains each of hero's powers
 *    d. A <p> element that has the hero's saying in quotes
 *
 *  The final product should look like this:
 *
 *  <div>
 *    <h2>Nobody Man</h2>
 *    <p>Team: The Randos</p>
 *    <p>Secret Identity: Bob Fakeman</p>
 *    <ul>
 *      <h3>Powers:</h3>
 *      <li>invisibility</li>
 *      <li>can erase your memory of him</li>
 *    </ul>
 *    <p>"You don't know me!"</p>
 *  </div>
 *
 * Finally, the loop should append the created div to the #hero-list element in
 * the index.html.
 */
for(i = 0; i < heroes.length; i++){
    let heroList = document.getElementById("hero-list")

    let name = document.createElement("h2")
    name.innerText = heroes[i].name

    let team = document.createElement("p")
    team.innerText = "Team: " + heroes[i].team

    let identity = document.createElement("p")
    identity.innerText = "Secret Identity: " + heroes[i].secretIdentity
    
    let list = document.createElement("ul")

    let powers = document.createElement("h3")
    powers.innerText = "Powers: "
    let power = document.createElement("li")
    power.innerText = heroes[i].powers[0]

    list.appendChild(powers)
    list.appendChild(power)

    let heroDiv = document.createElement("div")

    heroDiv.appendChild(name)
    heroDiv.appendChild(team)
    heroDiv.appendChild(identity)
    heroDiv.appendChild(list)
    
    heroList.appendChild(heroDiv)
}
// Part 1 complete!

