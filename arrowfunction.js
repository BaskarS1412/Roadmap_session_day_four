
// 2. Arrow function:


// a. print a odd numbers in an array

let oddNumbers = (arr) => { 
    let oddArray = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 1){
            oddArray.push(arr[i]);
        }
    }
    return oddArray;
}

console.log(oddNumbers([52,485,569,3,7,42]));

// ===================================================================================================================================

// b. Convert all the string into title caps in string array

let titleCaps = (strArray) => {

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

console.log(titleCaps("bala manimaran ashok sathish gokul"));

// ===================================================================================================================================

// c. Sum of all numbers in an array

let sumOfArray = (inputArr) => {
    let sum = 0;
    for(let indx = 0; indx < inputArr.length; indx++){
        sum = sum + inputArr[indx];
    }
    return sum;
}

console.log(sumOfArray([56,85,4,67,2,35,91,24]));

// ===================================================================================================================================

// d. Return all the prime numbers in an array

let allPrimeNumber = (givenArray) => {
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

console.log(allPrimeNumber([12,3,7,23,97,5,17,40]));

// ===================================================================================================================================

// e. Return all the polindromes in an array

let polindromes = (mixedNumbers) => {
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

console.log(polindromes([121,546,4554,96469]));
