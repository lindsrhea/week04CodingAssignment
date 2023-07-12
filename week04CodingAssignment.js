// // 1.)
const ages = [3, 9, 23, 64, 2, 8, 28, 93]

const newAge = ages.push(ages[ages.length - 1] - ages[0])
let totalAgeSum = 0;
for (let i = 0; i < ages.length; i++) {
    // console.log(ages[i])
    totalAgeSum += ages[i]
    // console.log("Total: " + totalAgeSum)
}

// console.log("Avg Age:", totalAgeSum / ages.length)

/* I created an array called ages and entered the ages provided into [] since it is an array. I then created a new const function in order to complete the code.
 i used the sting: length method in order to subtract the value of the first element in the array to the last element of the array. I then used the string: push
 method to add the value of the first array element subtracted from the value of the last array element to the array. I then used the for loop to iterate through
 the array and to calculate the average age of the array. */


// // 2.)
const names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']
const nameAverage = names.push(names[names.length - 1] - names[0])
let totalSum = 0;
for (let i = 0; i < names.length - 1; i++) {
    // console.log(names[i])
    totalSum += names[i].length
    // console.log('The average number of letters per name is: ' + totalSum)
}

// console.log("Avg Name Length:", totalSum / names.length)


// //3. How do you access the last element of any array?
// //To access the last ellement of an array you should use the string value .length. For example: array.length -1. The .length will read through the string or array. However, you need the -1 because the .length will read the string or array as 1, 2, 3, etc. instead of starting at 0.


// //4. How do you access the first element of any array?
// In order to access the first element of an array, one can use the .find(0) method. Placing the 0 in the () will give you access to the first element of an array.


// // 5.)
// // 1. create new array called nameLength
const nameLength = []
//     // 2. Write a loop to iterate over the previously created names array
//     // 3. Add the length of each name to the nameLengths array.
for (let i = 0; i < names.length - 1; i++) {
    nameLength.push(names[i].length)
}
//     console.log(nameLength)


// // 6.)
let sum = 0;
for (let i = 0; i < nameLength.length; i++) {
    console.log(nameLength[i])
    sum += nameLength[i]
    console.log('The sum of all elements in the nameLength array is: ' + sum)
}
// console.log(sum)
/* I created a for loop to interate over the nameLengths array from number 5 and
used the sum += to calculate all the elements of the array */

// 7.)
// 1. Write function that takes two parameters (word, n)
function concatenateMyWord(word, n) {
    let newWord = ""
    // 2. concatenate word n number of times
    // 3. loop n number of times
    while (n > 0) {
        // concatenate word
        newWord = newWord.concat(word)
        n--
    }
    // return new word
    return newWord

    // create result variable = ""
    // loop 3 times
    //     each time i loop, i concatenate the word to itself
    //     1st loop "hello"
    //     2nd loop "hellohello"
    //     3rd loop "hellohellohello"
    // return "hellohellohello"
    // return result
}
// const word = concatenateMyWord("hello", 3)
// console.log(word)
// i.e. pass 'Hello' and 3, would expect function to return 'HelloHelloHello'
function concatenateMyWord(word, n) {
    let newWord = ""
    for (let i = 0; i < n; i++) {
        newWord = newWord.concat(word)
    }
    return newWord
}
// const word = concatenateMyWord('hello', 3)
// console.log(word)


// 8.)
// 1. function w/ 2 params "firstName" & "lastName"
// 2. returns full name.

function createFullname(firstName, lastName) {
    return firstName + ' ' + lastName
}

// console.log(createFullname("Lindsey", "Ratliff"))


//9.)
// 1) create function that takes an array of numbers
const numbersArray = [23, 14, 1, 100, 5, 7]
function sumOfNumbers(array) {
    // returns true if sum of all numbers > 100
    // false if sum of all numbers < 100
    console.log("Is the sum of my array greater than 100?")
    totalSum = 0
    let isOver100 = true
    for (i = 0; i < array.length; i++) {
        totalSum += array[i]
    };
    console.log("Total Sum: ", totalSum)
    if (totalSum < 100) {
        isOver100 = false
    }
    return isOver100
}

// console.log(sumOfNumbers(numbersArray))

//10.)
// const arrayOfNumbers = [10, 16, 24, 17, 13, 3]
function averageOfArray(numArray) {
    totalSum = 0
    for (let i = 0; i < numArray.length - 1; i++) {
        console.log(numArray[i])
        totalSum += numArray[i]
        console.log("Total: " + totalSum)
    }
    return totalSum / numArray.length
}
// // console.log(averageOfArray(arrayOfNumbers))
// // write function

// // takes array of numbers

// // returns average of all elements in array


// // 11.)
//     // find avg of arr1
//     // find avg of arr2
//     // is arr1 > arr2 ?
//         // 1>2 return true
//         // 1<2 false
//     // return boolean

// const array1 = [10, 25, 24, 18, 6, 13]
// const array2 = [5, 14, 2, 24, 9, 15]

function twoArrays(arr1, arr2) {
    avg1 = 0
    for (let i = 0; i < arr1.length - 1; i++) {
        console.log(' ' + arr1[i])
        avg1 += arr1[i]
    }
    console.log('average1', avg1 = avg1 / arr1.length)
    avg2 = 0
    for (let i = 0; i < arr2.length - 1; i++) {
        console.log('array2 ' + arr2[i])
        avg2 += arr2[i]
    }
    console.log('average2', avg2 = avg2 / arr2.length)
    if (avg1 > avg2) {
        return true
    } else {
        return false
    }
}
// console.log(twoArrays(array1, array2))


//12.)
// 1. write function willBuyDrink
function willBuyDrink(isHotOutside, moneyInPocket) {

    // 2.that takes boolean isHotOutside true/false
    // 3. & a number moneyInPocket
    // 4. returns true if it's hot outside and if moneyInPocket is > 10.50
    //if hot outside & moneyInPocket > 10.50 ture
    // if isHotOutside & moneyInPocket < 10.50 false
    if (isHotOutside && moneyInPocket > 10.50) {
        return true
    } else {
        return false
    }
}
// console.log(willBuyDrink(false, 7))


// 13.)
// want to buy grocery item
/* Write a function that takes a string groceryItem, and number moneyInPocket,
 that checks the catalogue object by groceryItem
 If item not found, return statement indicating so
 Check if you can purchase item
 If you can purchase the item, return a message indicating your purchase and
  how much money you have left
 else return a message indicating you do not have enough funds.
*/
const catalogue = {
    "eggs": 5.00,
    "milk": 2.00,
    "bread": 3.00,
    "cheese": 6.00
}

// write function
// string groceryItem & number moneyInPocket
function purchaseGroceryItem(groceryItem, moneyInPocket) {
    // checks cat by groc item
    const keys = Object.keys(catalogue);
    if (!keys.includes(groceryItem)) {
        // return statement
        return `Your item: ${groceryItem} was not found in our catalogue...`
    };
    // check if you can puchace item (if)
    if (catalogue[groceryItem] < moneyInPocket) {
        // if can purchase item, return message indicate purchase and
        // saying how much money I have left
        const purchased = `Thank you, for your purchase of ${groceryItem}`;
        const remainingFunds = `Remaining Funds: ${moneyInPocket - catalogue[groceryItem]}`;
        return purchased + "\n" + remainingFunds
        // else return message not enough funds.
    } else {
        return `You do not have enough funds. The item: ${groceryItem} costs: ${catalogue[groceryItem]}`
    }
}

console.log("Successful:", purchaseGroceryItem("eggs", 10))
console.log("Failure by wrong item:", purchaseGroceryItem("hungerGames", 5))
console.log("Failure by low funds:", purchaseGroceryItem("cheese", 1))

//FUnction that takes a number and returns square root
function squareRootOfNumber(num1) {
    return (Math.sqrt(num1));
}
console.log('The square root is: ', squareRootOfNumber(4));
