/*   
    Exercise 1 
    ========== 
    Write a function named destructureExample that takes in an object and an array as parameters. The function should use destructuring to extract the values 'name' and 'age' from the object and the values at index 0 and index 2 from the array. The function should then return an object with the extracted values as properties with name and age.
*/

const object = { name:'John', age:'30', city:'New York' }
const array = [10,20,30,40]

const destructureExample = function(object, array){
    const {name} = object
    const [,,age] = array
    return {name:age}
}

console.log(destructureExample(object,array))


/*   
    Exercise 2 
    ========== 
    Write a function named sumNumbers that takes in multiple numbers as arguments using the rest operator. The function should return the sum of all the numbers.
*/

const sumNumbers = function(...numbers){
    const sum = numbers.reduce((acc, val)=>{
        return acc + val
    }, 0)

    return sum;
}

console.log(sumNumbers(1,2,4))

/*   
    Exercise 3 
    ========== 
     Write a function named createGreeting that takes in a name as a parameter and returns a greeting message using template literals. The message should be in the format: "Hello, [name]! Welcome to our website."
*/

const createGreeting = function(name){
    return `\"Hello, ${name}! Welcome to our website\"`;   
}

console.log(createGreeting("Mehedi Jaman"))

/*   
    Exercise 4 
    ========== 
    Write a function named isEven that takes in a number as a parameter and returns the string "Even" if the number is even, and "Odd" if the number is odd. Use a ternary operator instead of an if/else statement.
*/

const isEven = function(number){
    return number%2 == 0?"Even":"Odd"
}

console.log(isEven(7))

/*   
    Exercise 5 
    ========== 
    Convert the following function to an arrow function:

    function multiply(a, b) {
        return a * b;
    }
*/

const multiply = (a,b) => a+b

/*   
    Exercise 6 
    ========== 
    Write a function named getLargestNumber that takes in two numbers as parameters. The function should return the larger number using short-circuiting and logical operators (&&, ||, ??).
*/

const getLargestNumber = function(n1, n2){
    // return n1 > n2 ? n1 : n2
    return (n1>n2 && n1) || (n2 > n1 && n2) || (n1 == n2 && 'Equal')
}

console.log(getLargestNumber(50,50))

/*   
    Exercise 7 
    ========== 
    Write a function named getAddressCity that takes in an object representing a person's address. The address object has properties 'street', 'city', and 'country'. The function should return the value of the 'city' property if it exists, or the string "Unknown" if it doesn't exist, using optional chaining.
*/

const getAddressCity = function(address){
    return address?.city ?? "Unknown"
}

const address = {street:'123 Main St', country:'USA'}
console.log(getAddressCity(address))

/*   
    Exercise 8
    ========== 
    Write a function named doubleNumbers that takes in an array of numbers and returns a new array with each number doubled using the array map method.
*/

const doubleNumbers = function(numbers){
    return numbers.map((element) => element*2)
}

const numbers = [1, 2, 3, 4, 5];

console.log(doubleNumbers(numbers))

/*   
    Exercise 9
    ========== 
    Write a function named filterEvenNumbers that takes in an array of numbers and returns a new array with only the even numbers using the array filter method.
*/

const filterEvenNumbers = function(numbers){
    return numbers.filter((element)=> element % 2 == 0)
}

console.log(filterEvenNumbers([1, 2, 3, 4, 5]))

/*   
    Exercise 10
    ========== 
    Write a function named sumArray that takes in an array of numbers and returns the sum of all the numbers using the array reduce method.
*/

const sumArray = function(numbers){
   const sum = numbers.reduce((acc, val)=>{ return acc + val }, 0)
   return sum
}

console.log(sumArray([1, 2, 3, 4, 5]))

/*   
    Exercise 11
    ========== 
    Write a function named sortNumbers that takes in an array of numbers and returns a new array with the numbers sorted in ascending order using the array sort method.
*/

const sortNumbers = function(numbers){
    const newArray = [...numbers]
    return newArray.sort()
}

const arr = [5, 2, 8, 1, 4]

console.log(sortNumbers(arr))
console.log(arr)