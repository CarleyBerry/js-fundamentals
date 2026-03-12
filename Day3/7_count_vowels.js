function countVowels(text) {
  let vowelCount = 0;
  let allVowels = "aeiouAEIOU";

  for (let i = 0; i < text.length; i++) {
    if (allVowels.includes(text[i])) {
      vowelCount = vowelCount + 1;
    }
  }

  console.log(vowelCount);
}

countVowels("hello world");
countVowels("Javascript");
