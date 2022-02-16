let arr = [23,62, 44,67,93,18,42,51]
//find index of element
var index = arr.findIndex((element) => element == 44)
console.log(`serch element( ${arr[index]} ) index value is`, index)
/////////////  if element is not found in an array then its gives index value as -1


// in meaningfull way
var index2 = arr.findIndex((element) => element == 49)
    if(index2 == -1)
    {
    console.log("2nd search index-element is not found")
    }
    else  
    { 
     console.log("2nd search element's index value is", index2)
    }