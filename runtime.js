const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}

const arrays = {

     "tinyArray":getSizedArray(10),
     "smallArray":getSizedArray(100),
     "mediumArray": getSizedArray(1000),
     "largeArray": getSizedArray(10000),
     "extraLargeArray": getSizedArray(100000),
    
};


// How long does it take to double every number in a given 
// array? 

let howLong = {
    "doublerAppend": {},
    "doublerInsert": {}
}


// Try it with first function
for(let arraySizes in arrays) {
perf.start();                     // Starts timer
doublerAppend(arrays[arraySizes]);
howLong.doublerAppend[arraySizes] = perf.stop().preciseWords;  // Stops timer and save time results
}

// Try it with second function
for(let arraySizes in arrays) {
perf.start();
doublerInsert(arrays[arraySizes]);
howLong.doublerInsert[arraySizes] = perf.stop().preciseWords;
}

console.log('Results for the Array Sizes');
console.log("insert", howLong.doublerInsert);
console.log("append", howLong.doublerAppend);
