// 1) duplicate the array
let arr2=[1,2,3,4,5,6,7]
function duplicate(arr){
    let arrC= arr.concat(arr);
    return arrC;
}
duplicate(arr2)


// 2) add 2 sums to reach target.
let arr1=[1,2,3,4,5,6];
function twoSum(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++){
            if (arr[i]+arr[j] === target) {   
                console.log("target achived");
                return `${arr[i]} ,${arr[j]}`;
            }
        }
    }
    return "nothing adds up";
}

twoSum(arr1, 11)



// 5) 
// Use .filter

let arr2 = [1,4,2,11,1,4,5];
function ifRepeated(arr){
    let newArr=[];
    let deleteIndex=[];
    while (arr.length>0){
        for (let i = 1; i < arr.length; i++) {
            if (arr[0] === arr[i]) {
                deleteIndex.push(i) //index from original array
                console.log(deleteIndex);
                // return true
            }else {
                newArr.push(arr[i])
                console.log(newArr);
            }
        }
        arr.shift()
    }
    if (arr.length === 0) {
        return false
    }
    console.log(newArr);
}
ifRepeated(arr2);



let arr2 = [1,4,6,6,5,7,2,11,1,7,8,8,4,5];
function ifRepeated(arr){
    let newArr=[]
    let deleteIndex=[];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j] && i!=j){ // i != j to eliminate the starting element for each loop.
                deleteIndex.push(i); // i is index from original array
                // return true;
            }
        }
        console.log(deleteIndex);
    }
    console.log(deleteIndex);
    let deleteThis = deleteIndex.slice((deleteIndex.length/2),deleteIndex.length)
    console.log(deleteThis);

    for (let i = deleteThis.length; i > 0 ; i--) {
        console.log("test1");
        arr2.splice(deleteThis[(i-1)],1)
        console.log(arr2);
    }
    return arr2;
}
ifRepeated(arr2);