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
