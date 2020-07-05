// // TASK 1
// let first = [1, 2, 3, 4, 5, 6, 7, 8, 9]; //-1-2-3-4-5-6-7-8-9
// function minusString(arr) {
//     let firstString = '';
//     for (let i = 0; i < arr.length; i++) {
//         firstString += (-first[i])
//     }
//     return firstString
// }
// console.log(minusString(first))

// // TASK 2
// let second = [1, 5, 8, -3, -10, 2] //16
// function sum(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] >= 0) {
//             sum += arr[i]
//         }
//     }
//     return sum
// }

// console.log(sum(second))

// // TASK 3
// let third = [1, 2, 10, 5, 25, 6, 5]
// function isFive(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === 5) {
//             console.log("Есть")
//             break
//         }
//     }
// }

// isFive(third)

// // TASK 4
// function randomNumber() {
//     let randomArr = []
//     for (let i = 0; i < 10; i++) {
//         let randomNumber = Math.round(Math.random() * 10);
//         randomArr.push(randomNumber)
//     }
//     return randomArr
// }

// console.log(randomNumber())

// // TASK 5
// let fifth = "hello my name is Andrew" //В вашем предложении 7 глассных
// function vowels(someString) {
//     let counter = 0;
//     for (let i = 0; i < someString.length; i++) {
//         if (someString[i].toLowerCase() === 'a' || someString[i].toLowerCase() === 'e' || someString[i].toLowerCase() === 'i' || someString[i].toLowerCase() === 'o' || someString[i].toLowerCase() === 'u') {
//             counter++
//         }
//     }
//     return `В вашем предложении ${counter} глассных`
// }
// console.log(vowels(fifth))

// // TASK 6
// function range(a, b) {
//     arr = []
//     if (a < b) {
//         for (let i = a; i <= b; i++) {
//             arr.push(i)
//         }
//     } else if (a > b) {
//         for (let i = b; i <= a; i++) {
//             arr.push(i)
//         }
//     }
//     return arr;
// }
// console.log(range(5, 22))
// console.log(range(17, 2))

// // TASK 7 
// let seventh = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// console.log(seventh[1][0])

// // TASK 8
// let eighth = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// function ArrSum(arr) {
//     let sum = 0
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr[i].length; j++) {
//             sum = sum + arr[i][j]
//         }
//     }
//     return sum;
// }
// console.log(ArrSum(eighth))

// // TASK 9
// let ninth = 'my-short-string' // myShortString
// function camelize(str) {
//     let arr = str.split('-')
//     let letters;
//     let upperCase;
//     let upperCaseDone;
//     let newString;
//     for (let i = 1; i < arr.length; i++) {
//         letters = arr[i].split('')
//         upperCase = letters[0].toUpperCase()
//         letters.shift()
//         letters.unshift(upperCase)
//         upperCaseDone = letters.join('')
//         arr.splice(i, 1, upperCaseDone)
//         newString = arr.join('')
//     }
//     return newString;
// }
// console.log(camelize(ninth))

// TASK 10
function createMatrix(tr, td) {
    let randomNumber = Math.round(Math.random() * 100);
    
}