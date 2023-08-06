//Leave a code comment with what you believe the runtime of your code to be.

// 1) Sum Zero
// Write a function that takes in an array of numbers. 
//The function should return True if any two numbers in list sum to 0, and false otherwise.

// This function has a runtime of O(n^2) because it uses two nested for loops
//The space complexity is O(1)

function sumZero(arr) {
        for(let i = 0; i < arr.length; i++) {
        for(let j = i+1; j < arr.length; j++) {
            if(arr[i] + arr[j] === 0) {
                return true;
            }
        }
    }
    return false;
}

console.log(sumZero([])) // // -> False
console.log(sumZero([1]))// // -> False
console.log(sumZero([1,2,3]))// // -> False
console.log(sumZero([1,2,3, -2]))// // -> True

// 2) Unique Characters
// Write a function that takes in a single word, as a string. 
//It should return True if that word contains only unique characters.
//Return False otherwise.


//This function has a runtime of O(n^2) because it uses a loop, and indexOf/lastIndexOf methods inside the loop
//Has a space complexity of O(1)

function hasUniqueChars(str) {
    for(let i = 0; i < str.length; i++) {
        if(str.indexOf(str[i]) !== str.lastIndexOf(str[i])) {
            return false;
        }
    }
    return true;
}

console.log(hasUniqueChars("Monday")); // -> True
console.log(hasUniqueChars("Moonday")); // -> False

// 3) Pangram Sentence
// A pangram is a sentence that contains all the letters of the English alphabet at least once,
//like “The quick brown fox jumps over the lazy dog.”
// Write a function to check a sentence to see if it is a pangram or not.

// Time complexity of O(n) where 'n' is the length of the sentence.
//The space complexity is O(1)

function isPangram(sentence) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const lowerCaseSentence = sentence.toLowerCase();
    for(let i = 0; i < alphabet.length; i++) {
        if (!lowerCaseSentence.includes(alphabet[i])) {
            return false;
        }
    }
    return true;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog!")); // -> True
console.log(isPangram("I like cats, but not mice")); // -> False


// 4) Longest Word
// Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.


//The findLongestWord function has a time complexity of O(n).
//The space complexity is O(1)



function findLongestWord(words) {
    let longestWord = '';

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }
    return longestWord.length;
}

console.log(findLongestWord(["hi", "hello"])); // -> 5
