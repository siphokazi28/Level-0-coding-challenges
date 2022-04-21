function findVowel(str) {
  for (i = 0; i < str.length; i++) {
    if (
      str[i] == 'a' ||
      str[i] == 'e' ||
      str[i] == 'i' ||
      str[i] == 'o' ||
      str[i] == 'u'
    ) {
      console.log(str[i])
    }
  }
}
let word = 'Umuzi'
let word2 = word.toLowerCase()
let word3 = Array.from(new Set(word2)).join('')
findVowel(word3)
