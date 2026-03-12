function concatStrings(separator, ...allStrings) {
  let finalString = "";

  for (let i = 0; i < allStrings.length; i++) {
    finalString = finalString + allStrings[i];

    if (i < allStrings.length - 1) {
      finalString = finalString + separator;
    }
  }

  console.log(finalString);
}

concatStrings("-", "apple", "banana", "cherry");
concatStrings(" ", "Hello", "World");
