for(i = 100; i > -1; i--){
    console.log(i)
}

let userNum = process.argv[2]
for(i = userNum; i > -1; i--){
    console.log(i)
}

let students = ['Aiden', 'Gavin', 'David', 'Manny', 'Daniel', 'Hector']
for(student in students){
    console.log(students[student])
}

// 1) It will output all the values in myArray
// 2) It will print this code 5 times('j: ' + j + ' counter: ' + counter) then print bye bye once 
// 3) The for loop finds the sum of all the numbers in the array and the amount of numbers as well. Result is the average of the array
// 4) '0 0 0 1 0 2 0 3 0 4 1 0 2 1 3 4' and it goes on like that it's a clock
