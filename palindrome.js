let userWord = prompt("Please enter a word!");
let repeater = 0;

function wordChecker(userWord) {
  let reverseWord = userWord.split("").reverse().join("");

  if (userWord === reverseWord) {
    console.log("True; palindrome detected");
    return true;
  } else {
    console.log("False; not a palindrome");
    return false;
  }
}

wordChecker(userWord);