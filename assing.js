// Write a JavaScript program which iterates the integers from 1 to 100. But for
// multiples of three print "Fizz" instead of the number and for the multiples of five print
// "Buzz". For numbers which are multiples of both three and five print "FizzBuzz"

function multiples(){
    for (let i=0; i<=100;i++){
        if(i%3===0 && i%5===0){
            console.log("fizbuzz")
            
        }
        else if(i%3===0){
            console.log("fizz")
        }
        else if (i%5===0){
            console.log("Buzz")
        }
        else{
            console.log(i)
        }
    }
    
}
multiples();

// Write a JavaScript program to sum the multiples of 3 and 5 under 1000.

function sum(){
    var addition=0;
    for(let a=0; a<1000; a++){
        if(a%3===0 && a%5===0){
            addition+=a
        
        }
    }
    console.log(addition)
}
sum();

// Write a JavaScript for loop that will iterate from 0 to 20. For each iteration, it will
// check if the current number is odd or even, and display a message to the screen.
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"

function oddEven(){
    for (let l=0; l<20;l++){
        if(l%2===0 ){
            console.log(l+" "+ "is even")
        }
        else{
            console.log(l+" "+"is odd")
        }
    }

}
oddEven();

// . Write a JavaScript conditional statement to find the largest of five numbers in the
// given array.
// Let num = [-2, 4,-5, 6,0]


function numbers(){
    number=[-2,4,-5,6,0]
    let largest=0
    for (let b=0; b<number.length; b++){
        if(largest<number[b]){
            largest=number[b]
        }
    }
    console.log(largest)
}
numbers();




// Using conditional statements, write a JavaScript program to find the largest of the
// following two numbers: 10 & 40

y=10
z=40
function largest(){
    if (y<z){
        console.log(z)
    }
    else{
        console.log(y)
    }
}
largest();

// Write a JavaScript program to find leap years from 2000 to 2022

function leapYear(){
    for(let z=2000;z<=2022;z++ ){
        if (z%4===0||z%400===0){
            console.log(z+" "+ "is a leap year")
        }
        else{
            console.log(z)
        }
    }
}
leapYear();
