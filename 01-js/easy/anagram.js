/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let STR1 = str1.toLowerCase().split('').sort().join('');
  let STR2 = str2.toLowerCase().split('').sort().join('');

  // let strArr1 = [...STR1];
  // let strArr2 = [...STR2];

  // if strings are of different length that can not be anagram.
  if (STR1.length != STR2.length) {
    return false;
  }

  //sorting it
  // strArr1.sort();
  // strArr2.sort();

  // for (let index = 0; index < len; index++) {
  //   if (strArr1[index] != strArr2[index])
  //     return false;

  // }

  return STR1 === STR2;

}

module.exports = isAnagram;
