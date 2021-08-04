let car = {
    carName: "honda",
    year: 2010,
    condition: "pre-owned",

    sayName: function(){
        console.log(`I am a ${this.carName}`)
    },
    changeName: function(newName){
        this.carName = newName
        console.log(`My new name is ${this.carName}`)
    }
}

let kendric = {
    myName: "Kendric Zaire Terry",
    age: 16,
    height: "5'11''",
    school: "Manhattan Center",
    city: "New York City",

    introduce: function(){
        console.log(`My name is ${this.myName} and I live in ${this.city}. I am ${this.age} and I go to ${this.school}`)
    },

    changeName: function(newName){
        this.myName = newName
    }

}


car.sayName();
car.changeName("Lambo")
kendric.introduce();
kendric.changeName("Kendric")
kendric.introduce()

let choice = prompt("what do you choose")
console.log(choice)