// 1) false
// 2) true
// 3) true
// 4) false

let userNum = process.argv[2]
userNum = parseInt(userNum)
console.log(userNum)

if(userNum == ''){
    console.log('Empty response')
}
else if(userNum < 0 || userNum > 100){
    console.log('Number is out of range')
}

else if(80 <= userNum && userNum < 90){
    console.log('Good work')
}
else if(60 <= userNum && userNum< 80){
    console.log('Try harder')
}
else if(userNum < 60){
    console.log('Come see me')
}
else if(90 <= userNum && userNum <= 100){
    console.log('Congrats!!! Keep it up!')
}
else{
    console.log('Enter numeric value')
}