// Day 1 - JS Recap Assignment

// 1) find max number

let arr=[4,3,6,8,56,33,21,10,99,1]
function maxNumber(arr){
    let max=arr[0];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]>max){
            max=arr[i]
        }
    }
    console.log(max);
}
maxNumber(arr);


// 2) find duplicate values

let arr2 = [1,4,2,11,1,4,5];
function ifRepeated(arr){
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j] && i!=j){ // i != j to eliminate the starting element for each loop.
                return true;
            }
        }
    }
    return false;
}
ifRepeated(arr2);

// Or

function checkForDuplicates(arr) {
    return new Set(arr).size !== arr.length
}
checkForDuplicates(arr2);

// Or
let arr2 = [1,4,2,11,1,4,5];
function ifRepeated(arr){
    let newArr=[];
    while (arr.length>0){
        for (let i = 1; i < arr.length; i++) {
            if (arr[0] === arr[i]) {
                return true
            }
        }
        arr.shift()
    }
    if (arr.length === 0) {
        return false
    }
}
ifRepeated(arr2);


// 3) Sequence array

let array1= [1,2,3,4,6,7,8,9,10];
function missingInter(arr,seqOf){
    for (let i = 0; i < (arr.length-1); i++) {
        shoudlBe = arr[i]+seqOf;
        if (arr[(i+1)]-arr[i] != seqOf) {
            console.log(shoudlBe);
            // arr.splice((i+1), 0, shoudlBe);   // This line will insert the misisng integer to the array.
            return shoudlBe;
        }
    }
    return "array looks good";
}

missingInter(array1,1);


// 4) Reverse array

let arr3=[1,2,3,4,5,6]
function reverseArr(arr){
    let reversedArr=[];
    for (let i = 0; i < arr.length; i++) {
        reversedArr.unshift(arr[i]);
    }
    return reversedArr
}

reverseArr(arr3)