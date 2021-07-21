function evenOrOdd(num){
    console.log('Your number is:', num)
    if (num % 2 == 0){
        console.log(num, 'is even')
    }
    else{
        console.log(num, 'is odd')
    }
}
evenOrOdd(2)
evenOrOdd(3)

function divisible(dividend, divisor){
    if(dividend % divisor == 0){
        console.log(dividend, "is divisible by", divisor)
    }
    else{
        console.log(dividend, "is not divisible by", divisor)
    }
}

divisible(9,3)
divisible(10,3)

function distance(name1, x1, y1, name2, x2, y2){
    let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
    console.log(name1, "and", name2, 'are', distance, 'meter(s) apart')
    
}
distance("Michael", 3.28, 2.26, "Anthony", 3.92, 3);
distance("you", 0, 0, "I", 0, 0);

function arrayHandler(array){
    for(element in array){
        if(typeof(array[element]) == typeof('')){
             console.log(array[element])
        }
    }
}
arrayHandler([1, "a", 2, "b", 3, "c"]);
