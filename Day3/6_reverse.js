function reverse(input) {
  if (Array.isArray(input)) {
    let reversedList = [];
    for (let i = input.length - 1; i >= 0; i--) {
      reversedList.push(input[i]);
    }
    console.log(reversedList);
  } else {
    let reversedString = "";
    for (let i = input.length - 1; i >= 0; i--) {
      reversedString = reversedString + input[i];
    }
    console.log(reversedString);
  }
}

reverse("hello");
reverse([1, 2, 3, 4]);
