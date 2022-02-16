//find the sum of elements
let arr = [23,62, 44,67,93,18,42,51]
var sum = arr.reduce((acc, elem) =>  acc+elem ) 
//i am getting undefined error when i put parenthesis
console.log("sum is",sum)


//finding big number in an array
let bigNum = arr.reduce((acc, elem) => acc>elem ? acc:elem)
console.log(`big number is`, bigNum)


//finding small number
let smallNum = arr.reduce((acc, ele) => acc < ele ? acc:ele)
console.log("small number is", smallNum)



