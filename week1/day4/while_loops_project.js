let num = 100
while (num > -1){
    console.log(num)
    num--;
}

let userNum = process.argv[2]
while (userNum > -1){
    console.log(userNum)
    userNum--;
}

// 1) 3 times 
// 2) Infinite amount of times
// 3) 5 times
// 4) 2 times
// 5)
// let number = 0;
// while (number < 10) {
//    console.log("Little Donald Drumpf");
//    number++;
// }

let rand1 = 1
let rand2 = 0
let counter = 1;

while(rand1 != rand2){
    
    rand1 = Math.floor(Math.random() * 11);
    rand2 = Math.floor(Math.random() * 11);

    console.log('Try #',counter,' - Random num #1:', rand1, 'Random num #2:', rand2)
    
    if(rand1 == rand2){
        console.log('Same random numbers on try #',counter, 'End loop')
    }
    counter++;
}