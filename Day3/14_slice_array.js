function sliceArray(list, start, end) {
  let slicedResult = [];
  let stopAt = (end === undefined) ? list.length : end;
  
  for (let i = start; i < stopAt && i < list.length; i++) {
    slicedResult.push(list[i]);
  }

  console.log(slicedResult);
}

sliceArray([1, 2, 3, 4, 5], 1, 3);
sliceArray([1, 2, 3, 4, 5], 2);
