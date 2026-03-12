function sumArray(numbersList) {
  let totalSum = 0;

  for (let i = 0; i < numbersList.length; i++) {
    totalSum = totalSum + numbersList[i];
  }

  console.log(totalSum);
}

sumArray([1, 2, 3, 4, 5]);
sumArray([10, 20, 30]);
