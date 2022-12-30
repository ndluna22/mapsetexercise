//Question 1

new Set([1,1,2,2,3,4])

code returns // [1,2,3,4]

//Question 2

[...new Set("referee")].join("")

code returns // "referee"

//Question 3

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);

code returns // {array => true} {array => false}


//has Duplicate

function hasDuplicate (arr){
    if (new Set(arr).size !== arr.length);
    return true;
}    

// //vowelCount

function vowels (letter){
    return "aeiou".has(letter);
}
function vowelCount(str){
    
    const newVowels = new Map();

    for(let vowel of str){
        let letter = vowel;
        if(!newVowels.has(vowel)){
         newVowels.set(letter,newVowels.get(letter)+1);
    }
        else{
            newVowels.set(letter,1);
        }
    }
    return newVowels;
}
