// 1) @ # 
// 2) @ 
// 3) @
// 3) 7
// 4) True blocks are executed

let userGuess = process.argv[2]
let randInt = Math.floor(Math.random() * 101)
console.log('Random Number:', randInt)
if (userGuess == randInt){
    console.log('Correct')
}
else if(userGuess < randInt){
    console.log('Too low')
}
else{
    console.log('Too high')
}

let input = process.argv[3]
let userScore = 0
console.log('Initial score', userScore)
if(input == 'A' || input == 'B'){
    userScore --;
    console.log('Wrong answer :(')
}
else if(input == 'C'){
    userScore += 5;
    console.log('Right answer')
}
else if(input == 'D'){
    userScore = userScore - 50;
    console.log('bad')
}
else if(input == 'I.KNOW.THE.SECRET'){
    userScore = userScore + 1000000
    console.log('WELCOME TO NIRVANA')
}
else{
    console.log('Invalid Response')
}
console.log('Final score:', userScore)