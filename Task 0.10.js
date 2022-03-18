/* Make a function that takes two strings as input, and outputs the common characters/letters that they share.

For example, Input: ‘house’, ‘computers’ . Output: ‘Common letters: o, u, e, s’)*/
/*let word1 = "wholesome";
let word2 = "bookworm";
let count = 0;
function commonLetters(word1, word2) {
    for (let i in word1)
    word2.match(word1[i])?match++:false;
    console.log(match)
}
commonLetters(word1, word2);*/
let word1 = "wholesome";
let word2 = "bookworm";
function commonLetters(word1, word2){
    let duplicateCharacter = "";
    for (let i = 0; i < word1.length; i += 1) {
        if (duplicateCharacter.indexOf(word1[i]) === -1) {
            if (word2.indexOf(word1[i]) !== -1) {
                duplicateCharacter += word1[i];
            }
            return [...duplicateCharacter];
        }
        }
        }; 
              console.log(commonLetters(word1, word2));
