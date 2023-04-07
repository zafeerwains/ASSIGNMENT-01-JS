//a JavaScript program that accepts two numbers in two prompts and displays the larger one in the console
const point1 = () => {
    let val1 = +prompt("Enter the first Value")
    let val2 = +prompt("Enter the second Value")
    if (val1 > val2) {
        console.log("Value 1 is Greater than 2")
    } else if (val1 == val2) {
        console.log("Value 1 is equal to 2")
    }
    else {
        console.log("Value 2 is Greater than 1")
    }
}
//a JavaScript program that accepts two numbers in two prompts and displays the larger one in the console
const point2 = () => {

    let userValue = +prompt("Enter the Value whose sign has to be find")
    if (userValue >= 0) {
        console.log("The sign is  +")
    }
    else {
        console.log("The sign is -")
    }
}
// a JavaScript program that accepts five numbers in five prompts and displays the larger one in the console.
const point3 = () => {

    let num1 = +prompt("Please enter a first number");
    let num2 = +prompt("Please enter a second number");
    let num3 = +prompt("Please enter a third number");
    let num4 = +prompt("Please enter a fourth number");
    let num5 = +prompt("Please enter a fifth number");
    if (num1 > num2 && num3 && num4 && num5) {
        console.log("First Number is the Greatest")
    }
    else if (num2 > num1 && num3 && num4 && num5) {
        console.log("Second Number is the Greatest")
    }
    else if (num3 > num2 && num1 && num4 && num5) {
        console.log("Third Number is the Greatest")
    }
    else if (num4 > num2 && num3 && num1 && num5) {
        console.log("Forth Number is the Greatest")
    }
    else if (num5 > num2 && num3 && num4 && num1) {
        console.log("Fifth Number is the Greatest")
    }
}
// Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen
const point4=()=>{

    for (let i = 0; i <= 15; i++) {
        if (i % 2 === 0) {
            console.log(i + ' is an even number')
        } else {
            console.log(i + ' is an odd number')
        }
    }
}
//Write a JavaScript program which computes the average marks of the following students Then, this average is used to determine the corresponding grade.
const point5 = () => {
    let num11 = +prompt("Please enter a first student number");
    let num12 = +prompt("Please enter a second student number");
    let num13 = +prompt("Please enter a third student number");
    let num14 = +prompt("Please enter a fourth student number");
    let num15 = +prompt("Please enter a fifth student number");
    let averageMarks = (num11 + num12 + num13 + num14 + num15) / 5;
    if (averageMarks < 60) {
        console.log("The Grade is F")
    }
    else if (averageMarks < 70) {
        console.log("The Grade is D")
    }
    else if (averageMarks < 80) {
        console.log("The Grade is C")
    }
    else if (averageMarks < 90) {
        console.log("The Grade is B")
    } else {
        console.log("The Grade is A")
    }
}
//Write a JavaScript program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz"
const point6 = () => {
    for (let z = 1; z <= 100; z++) {
        if (z % 3 === 0 && z % 5 === 0) {
            console.log('FizzBuzz')
        } else if (z % 3 === 0) {
            console.log('Fizz')
        } else if (z % 5 === 0) {
            console.log('Buzz')
        } else {
            console.log(z)
        }
    }
}
//Write a JavaScript program to construct the following pattern, using a nested for loop.
const point7 = () => {

    for (let b = 0; b < 5; b++) {
        let stars = ""
        for (let c = 0; c <= b; c++) {
            stars += '* ';
        }
        console.log(stars);
    }
}