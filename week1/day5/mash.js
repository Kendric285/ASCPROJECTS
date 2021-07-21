function randNumGenerator(num){
    let randInt = Math.floor(Math.random() * (num + 1))
    return randInt
}

let randNum = randNumGenerator(10);
console.log(randNum);

let userHome = process.argv[2]
let userPet = process.argv[3]

function getHome(){
    let homes = ['Mansion', 'Castle', 'Shack', 'House']
    let house = homes[randNumGenerator(homes.length - 1)]
    if(userHome == undefined){
        return house
    }
    return userHome
}


function getPet(){
    let chance = randNumGenerator(100)
    let pet;
    if(chance < 50 || userPet == undefined){
        let pets = ['dog', 'cat', 'lizard', 'parrot', 'fish']
        pet = pets[randNumGenerator(pets.length - 1)]
    }
    else{
        pet = userPet
    }
    return pet
}

function getTravelCount(){
    return randNumGenerator(100)
}


function mash(){
    return 'You will live in a ' + getHome() + ' and travel to ' + getTravelCount() + ' countries, and have a pet ' + getPet() 
}

let x = mash()
console.log(x)