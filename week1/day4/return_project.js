function combineStrings(string1, string2){
    return string1 + string2
}
let s1 = combineStrings("ABC", "DEF");
let s2 = combineStrings("poke", "mon");
let s3 = combineStrings("friend", "ship");
let s4 = combineStrings("1", "2");
 
console.log(s1);
console.log(s2);
console.log(s3);
console.log(s4);

// Program #1
// [a, b, c]
// [panda, bee, squirrel]
// [55, 100, -7]

// Program #2
// 2
// 6
// 1

// Program #3
// 2.5
// 15
// 5

function checkAnswer(num1, num2, operator, answer){
    let number1 = num1.toString()
    let number2 = num2.toString()
    if(eval(number1 + operator + number2) == answer){
        return true
    }
    return false
}

let b1 = checkAnswer(3, 5, "+", 8);
let b2 = checkAnswer(9, 8, "+", 15);
let b3 = checkAnswer(5, 4, "-", 1);
let b4 = checkAnswer(0, 1, "-", -2);
 
console.log(b1);
console.log(b2);
console.log(b3);
console.log(b4);

function oddNumberCatcher(array){
    if(array.length == 0){
        return -1
    }
    for (num in array){
        if(array[num] % 2 != 0){
            return num
        }
    }
    return -1
}

let i1 = oddNumberCatcher([8, 22, 10, 15, 2, 50, 28]);
let i2 = oddNumberCatcher([1, 2, 3, 4, 5]);
let i3 = oddNumberCatcher([2, 2, 2, 2, 2, 2, 2, 2]);
let i4 = oddNumberCatcher([]);
 
console.log(i1);
console.log(i2);
console.log(i3);
console.log(i4);

