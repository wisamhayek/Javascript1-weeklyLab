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