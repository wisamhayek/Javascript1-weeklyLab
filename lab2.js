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


// 3) 
let driver = {
    name: "Hamilton",
    team: "Mercedes",
    age: 30,
    firstPlace: 101,
    podiums: 300,
    stillRacing: true
}
console.log(Object.keys(driver));

function replaceObjKey (obj,targetKey,replaceKey){
    //Create new object key, from the same value -> then delete the old key:value.
    obj[replaceKey] = obj[targetKey];
    // obj.currentTeam = obj.team;
    // obj.currentAge = obj.age;
    delete obj[targetKey];
    // delete obj.team;
    // delete obj.age;
    // console.log(obj);
    return obj;
  };
replaceObjKey(driver,"name","FirstName");


// 4) 
let driver = {
    name: "Max",
    team: "RedBull",
    age: 23,
    firstPlace: 50,
    podiums: 150,
    stillRacing: true
}
console.log(Object.values(driver));

function replaceObjValues(obj,targetKey,value){
    //will replace the target with the value, if doesnt exist -> it will be created. 
    obj[targetKey]=value
    // console.log(obj);
    return obj;
}
replaceObjValues(driver,"name","wisam")