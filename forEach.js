

arr = [23,33,54,62,80]
    //it is 
arr.forEach((element, index) => {
    console.log(`value at index ${index} is ${element}`)}
    
)
    // checking for the returned value of forEach method
    var returnedValue = arr.forEach((element, index) => {

        return element, index
    }
    )
    console.log(`returned value is ${returnedValue}`)
    console.log(`it is giving "undefined" value . it means ithis forEach method not returning any value`)