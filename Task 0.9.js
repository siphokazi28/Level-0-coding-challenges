let word = "welcomE";
function findVowel(word) {
    return word.match(/[aeiouAEIOU]/gi);
}
    console.log(findVowel(word));