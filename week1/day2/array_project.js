// 1) B D undefined
// 2)Mon Sun 7 undefined Sun
// 3)["do", "re", "mi", "Fa", "SO"] ["DO", "Re"] []

//average score
let scores = [85, 93, 65, 65, 92, 81, 93];
let total = 0;
let length = scores.length()
for (x in scores){
    total += x
}
let average = total / length

//transformation 1
let myArray = ['a', 'b', 'c', 'd']
myArray.reverse()

//transformation 2
let myArray = ['a', 'b', 'c', 'd']
myArray.push(1)
myArray.push(2)

//transformation 3
let myArray = ['a', 'b', 'c', 'd']
myArray.pop()
//transformation 4
let myArray = ['a', 'b', 'c', 'd']
myArray.splice(1, 2, 3, 'c', 'd', 'e')
//transformation 5
let myArray = ['a', 'b', 'c', 'd']
myArray.splice(0, 1, 3, 4, 'f', 'e', 'b', 'a')


//extra credit
let myArray = ['Hi', 90, '90', [1, 2, 3, 4], ':p'];
let arrayWithin = myArray[3]
let two = arrayWithin[1]