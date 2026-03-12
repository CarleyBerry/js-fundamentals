function isPalindrome(text) {
  let cleanText = text.toLowerCase();
  let reversedText = "";

  for (let i = cleanText.length - 1; i >= 0; i--) {
    reversedText = reversedText + cleanText[i];
  }

  console.log(cleanText === reversedText);
}

isPalindrome("racecar");
isPalindrome("hello");
