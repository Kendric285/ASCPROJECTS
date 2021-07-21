let num1 = Math.floor(Math.random() * 11);
let num2 = Math.floor(Math.random() * 11);
let sum = num1 + num2
console.log("Random Number #1: " + num1)
console.log("Random Number #2: " + num2)
console.log("Sum: " + num1 + " + " + num2 + " = " + sum)

let days = ['Friday', 'Monday', 'Today', 'Yesterday', 'Your Birthday', 'Never', 'Sundae'];
let reactions = ['Yay!', 'Ahhhhh!!!', 'Wu wi wa wa', 'Guli Guli', 'Ka chow'];

let randomDay = days[Math.floor(Math.random() * days.length)]
let randomReaction = reactions[Math.floor(Math.random() * reactions.length)]
console.log("Your lucky day:", randomDay)
console.log(randomReaction)