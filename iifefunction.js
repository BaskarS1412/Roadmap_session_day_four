
// 1. Immediately Invoked Function Expression

// a. print a odd numbers in an array

let oddNumbersArray = (function oddNum(arr){
    let oddArray = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 1){
            oddArray.push(arr[i]);
        }
    }
    return oddArray;
})([14,51,73,82,95,67,34,11]);

console.log(oddNumbersArray);

// ===================================================================================================================================

// b. Convert all the string into title caps in string array

let titleCapsStr = (function titleCaps(strArray){
    let splitArray = strArray.split(" ");
    let titleCapsArray = [];

    for(let i = 0; i < splitArray.length; i++){
        let iValue = splitArray[i];
        let empStr = "";
        for(let j = 0; j < iValue.length;j++){
            if(j === 0){
                empStr = empStr + iValue[j].toUpperCase();
            }else{
                empStr = empStr + iValue[j];
            }
        }
        titleCapsArray.push(empStr);
    }
    return titleCapsArray;
})("thidhum nandru pirar thara vaarai");

console.log(titleCapsStr);

// ===================================================================================================================================

// c. Sum of all numbers in an array

let sumOfAllArray = (function sumOfArray(numArray){
    let sum = 0;
    for(let i = 0; i < numArray.length; i++){
        sum = sum + numArray[i];
    }
    return sum;
})([89,45,3,584,651,523,47,1]);

console.log(sumOfAllArray);

// ===================================================================================================================================

// d. Return all the prime numbers in an array

let allPrimeNumbers = (function primeNum(primeArr){
    let primeArray = [];
    for(let i = 0; i < primeArr.length; i++){
        let count = 0;
        for(let j = 1; j <= primeArr[i]; j++){
            if(primeArr[i] % j === 0){
                count++;
            }
        }
        if(count == 2){
            primeArray.push(primeArr[i]);
        }
    }
    return primeArray;
})([8,41,71,83,19,121]);

console.log(allPrimeNumbers);

// ===================================================================================================================================

// e. Return all the polindromes in an array

let poliNumbers = (function polindNum(mixedArray){
    let purePldrms = [];
    for(let ind = 0; ind < mixedArray.length; ind++){
        let n = mixedArray[ind];
        let emptStr = "";
        while(n > 0){
            let a = n % 10;
            emptStr = emptStr + a;
            n = parseInt(n / 10);
        }
        if(mixedArray[ind] === parseInt(emptStr)){
            purePldrms.push(mixedArray[ind]);
        }
    }
    return purePldrms;
})([848,2682,147,321,51247,94249]);

console.log(poliNumbers);

// ===================================================================================================================================

// f. Return median of two sorted arrays of the same size.

let medianNumbur = (function(arr1, arr2){
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
    
})([2, 13, 17, 30, 45],[1, 12, 15, 26, 38]);

console.log(medianNumbur);

// ===================================================================================================================================

// g. Remove duplicates from an array

let withoutDupliNum = (function(duplicateArray){
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
})([10,70,30,90,20,20,30,40,70,50]);

console.log(withoutDupliNum);

// ===================================================================================================================================

// h. Rotate an array by k times

let kTimeRotate = (function(arrayValues,rotationNum){
    for(let i = 1; i <= rotationNum; i++){
         
        for(let j = 0; j < arrayValues.length - 1; j++){
            let temp = arrayValues[j];
            arrayValues[j] = arrayValues[j+1];
            arrayValues[j+1] = temp;
        }
    }

    return arrayValues;
})([1, 2, 3, 4, 5],4);

console.log(kTimeRotate);




