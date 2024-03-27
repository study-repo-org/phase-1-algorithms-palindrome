function isPalindrome(palindromeWord) {

  word = palindromeWord.replace().toLowerCase();

  let start = 0;
  let end = palindromeWord.length - 1;

  while (start < end) {
    if (palindromeWord[start] !== palindromeWord[end]) {
      return false;
    }

    start++;
    end--;
  }

  return true;
}

/* 
  Add your pseudocode here

  convert the word lowercase = ABBA |abba
  Initialize a palindrome  for start and end of the word  = start=0 index=-1
  Iterate through the word from both ends towards the center =  abba | a b b a 
  If characters at the pointers don't match, return false (not a palindrome) = ab  |  false
  If the loop completes without finding any mismatches, return true (palindrome). = abba | true
*/

/*
  Add written explanation of your solution here

  The function takes a word as input as an argument.
  converts the word to lowercase.
  initialized at the beginning and end of the word.
  iterates through it at the ends and center
  If the words don't match, the word is not a palindrome, it returns false.
  moving the pointers to the center
  it  loops through to find if it matches, if the word is a palindrome, it returns true.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
