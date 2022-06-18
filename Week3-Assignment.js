//1.	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
//a.	Programmatically subtract the value of the first element in the array from the value in the last element of the array 
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
let x = (ages.length - 1)
console.log (ages[x]-ages[0]);

//b.	Add a new age to your array and repeat the step above to ensure it is dynamic
ages.push(96);
y = (ages.length - 1)
console.log (ages[y]-ages[0]);

//c.	Use a loop to iterate through the array and calculate the average age. Print the result to the console.

let sum= ages.reduce(function(accumulator,currentValue){ 
    return accumulator+ currentValue;
    });
    console.log(sum/ages.length);
//2.	Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']
//a.Use a loop to iterate through the array and calculate the average number of letters per name. Print the 
//result to the console

let lengths = names.map(function (element)
{
    return element.length;
    
});console.log(lengths);

const array = lengths; 
let sumNames = 0; 
for (let i = 0; i < array.length; i++) { 
    sumNames += array[i]; 
} 
console. log(sumNames);

const array2 = lengths;
const array3 = []
for (let z= 0; z< array2.length; z++){
  array3[z]= sumNames/lengths[z]
}console.log(array3)

// var lengthSum=0;
// var i=0
// for (i=0;i<names.length;i++){
//     let lengthSum= lengths.reduce(function(accumulator,currentValue){  
//         return accumulator+ currentValue;
// }console.log(lengthSum);

//b.	Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, and print the result to the console.
// let namesEach = names.map(function(element) {
//     return(element.namesEach)
//     });console.log(namesEach)
let text=[]
for (let u in names){
    text += names[u] + " "
    
}console.log(text)

//5.	Create a new array called nameLengths. Write a loop to iterate over 
//the previously created names array and add the length of each name to the nameLengths array
let namesArray = ["Kelly", "Sam", "Kate"] 
const nameLengths = []
for (let n=0;n<namesArray.length;n++){
    nameLengths[n]= namesArray[n].length
}console.log(nameLengths)

//6.	Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 
//Print the result to the console.
let total=0
for (let p =0; p <nameLengths.length; p++)
{
 total += nameLengths[p]
}console.log(total);

//7.	Write a function that takes two parameters, word and n, 
//as arguments and returns the word concatenated to itself n number of times
let string="blue"
let times=3
function wordN(string,times)
{
    var repeatedString = "";
    while (times > 0){
        repeatedString += string;
        times--;
    }return repeatedString;
} console.log(wordN("Abc",5));

//8.	Write a function that takes two parameters, firstName and lastName, and returns a full name
// (the full name should be the first and the last name separated by a space).
function createFullName(firstName,lastName) 
{

return (firstName+" "+lastName); 
}console.log(createFullName('Sam','Tom'))
//9.	Write a function that takes an array of numbers and returns true
// if the sum of all the numbers in the array is greater than 100.
let array1=[]

function arrayCheck(array1){
    let totalArray1=0
for (let index = 0; index < array1.length; index++) {
    totalArray1 += array1[index];
    
}
    
if (totalArray1>100){
    return true 
}
}console.log(arrayCheck([10,90,50]));

//10.	Write a function that takes an array of numbers 
//and returns the average of all the elements in the array.
let array4=[];
 function arrayAvr(array4){
    let totalArray4=0
    for (let index = 0; index < array4.length; index++) {
        totalArray4 += array4[index];
 }return (totalArray4 / (array4.length));
}console.log(arrayAvr([2,4,6]));

//11.	Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is 
//greater than the average of the elements in the second array.

let array5=[]
let array6 =[]

function arrayCompare(array5,array6){
    let totalArray5=0
    let totalArray6=0
    for (let indexX = 0; indexX < array5.length ; indexX++) {
        totalArray5 += array5[indexX];
      
        
    }
    for (let indexX = 0; indexX < array6.length ; indexX++) {
        totalArray6 += array6[indexX];
        
    }
    let array5Avr= (totalArray5/ (array5.length))
    let array6Avr= (totalArray6 / (array6.length))

    if (array5Avr>array6Avr){
        return true;
    }
}console.log(arrayCompare([100,3,4],[5,6,7]));

//12.	Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, 
//and returns true if it is hot outside and if moneyInPocket is greater than 10.50.