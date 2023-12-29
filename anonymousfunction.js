


// 1. anonymous function:


// a. print a odd numbers in an array

let oddNumbers = function(arr) { 
    let oddArray = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 1){
            oddArray.push(arr[i]);
        }
    }
    return oddArray;
}

console.log(oddNumbers([57,45,9,32,79,41]));

// ===================================================================================================================================

// b. Convert all the string into title caps in string array

let titleCaps = function(strArray) {

   let splitArray = strArray.split(" ");
    let titleCapsArray = [];

    for(let indx = 0; indx < splitArray.length; indx++){
        let indxValue = splitArray[indx];
        let empStr = "";
        for(let valindx = 0; valindx < indxValue.length;valindx++){
            if(valindx === 0){
                empStr = empStr + indxValue[valindx].toUpperCase();
            }else{
                empStr = empStr + indxValue[valindx];
            }
        }
        titleCapsArray.push(empStr);
    }
    return titleCapsArray;
}

console.log(titleCaps("i am going to play cricket"));

// ===================================================================================================================================

// c. Sum of all numbers in an array

let sumOfArray = function(inputArr) {
    let sum = 0;
    for(let indx = 0; indx < inputArr.length; indx++){
        sum = sum + inputArr[indx];
    }
    return sum;
}

console.log(sumOfArray([6,43,7,15,20,5,17,74]));

// ===================================================================================================================================

// d. Return all the prime numbers in an array

let allPrimeNumber = function(givenArray) {
    let primeArray = [];
    for(let i = 0; i < givenArray.length; i++){
        let count = 0;
        for(let j = 1; j <= givenArray[i]; j++){
            if(givenArray[i] % j === 0){
                count++;
            }
        }
        if(count == 2){
            primeArray.push(givenArray[i]);
        }
    }
    return primeArray;
}

console.log(allPrimeNumber([53,11,19,21,113,107,3,40]));

// ===================================================================================================================================

// e. Return all the polindromes in an array

let polindromes = function(mixedNumbers) {
    let purePldrms = [];
    for(let ind = 0; ind < mixedNumbers.length; ind++){
        let n = mixedNumbers[ind];
        let emptStr = "";
        while(n > 0){
            let a = n % 10;
            emptStr = emptStr + a;
            n = parseInt(n / 10);
        }
        if(mixedNumbers[ind] === parseInt(emptStr)){
            purePldrms.push(mixedNumbers[ind]);
        }
    }
    return purePldrms;
}

console.log(polindromes([59495,242,454,469]));

// ===================================================================================================================================

// f. Return median of two sorted arrays of the same size.

let medianOfTwoortedArr = function(arr1, arr2){
    let n1 = arr1.length;
    let n2 = arr2.length;
    let mergeArr = [];

    if(n1 === n2){
        for(let i = 0; i < n1; i++){
            mergeArr.push(arr1[i]);
            mergeArr.push(arr2[i]);
        }

        for(let j = 0; j < mergeArr.length;j++){

            for(let k = 0; k < mergeArr.length; k++){

                if (mergeArr[j] < mergeArr[k]){

                    let temp = mergeArr[j];
                     mergeArr[j] = mergeArr[k];
                     mergeArr[k] = temp;
                    
                    }
            }
        }
        let medianNum = (mergeArr[n1 - 1] + mergeArr[n1]) / 2;
        return medianNum;
    }else{
        console.log("the given two arrays length is not equal");
    }
    
}

console.log(medianOfTwoortedArr( [2, 13, 17, 30, 45],[1, 12, 15, 26, 38]));

// ===================================================================================================================================

// g. Remove duplicates from an array

let withoutduplicateArray = function(duplicateArray){
    // to sort an array into assinding order
    for(let j = 0; j < duplicateArray.length;j++){

        for(let k = 0; k < duplicateArray.length; k++){

            if (duplicateArray[j] < duplicateArray[k]){

                let temp = duplicateArray[j];
                 duplicateArray[j] = duplicateArray[k];
                 duplicateArray[k] = temp;
                
                }
        }
    }
    // remove duplicate numbers
    let pureArray = [];
    for(let i = 0; i < duplicateArray.length - 1; i++){
        if(duplicateArray[i] != duplicateArray[i+1]){
            pureArray.push(duplicateArray[i]);
        }
    }
    pureArray.push(duplicateArray[duplicateArray.length -1]);
    return pureArray;
}

console.log(withoutduplicateArray([10,70,30,90,20,20,30,40,70,50]));

// ===================================================================================================================================

// h. Rotate an array by k times

let arrayRotation = function(arrayValues,rotationNum){
    for(let i = 1; i <= rotationNum; i++){
         
        for(let j = 0; j < arrayValues.length - 1; j++){
            let temp = arrayValues[j];
            arrayValues[j] = arrayValues[j+1];
            arrayValues[j+1] = temp;
        }
    }

    return arrayValues;
}

console.log(arrayRotation([1, 2, 3, 4, 5],4));
















