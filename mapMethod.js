arr = [22,90,-98,12,52,90]    //intensionally iam providing empty item here

//map method
var modifiedDataArr = arr.map(function (element){
    return element = element +20
})
console.log("every element is added by 20");
console.log(modifiedDataArr)

//by arrow funcion      // in this output undefined for > 50 numbers why?
let modifiedData2 = arr.map(element =>{
        if  (element < 50)
        {                     
                return element = element + 20                  
        }
        else 
            {
            return element
            }
    }

)
console.log("here only element whivch is> 50 is going toadd by 20 and remaining elents are as it is", modifiedData2);

