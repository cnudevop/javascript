let arr = [23,43,55,78,90,666,-23,48,79,445]
//find element of 23
let findingElem = arr.find((element) => element == 45 )
    if(findingElem == undefined)
    {
        console.log("element not found")
    }
    else{ 
        console.log(`element ${findingElem} found`)
        }
