function kthSmallest(matrix, k) {
  const n = matrix.length;
  let low = matrix[0][0];
  let high = matrix[n - 1][n - 1];

  while (low < high) {
    let mid = Math.floor(low + (high - low) / 2);
    let count = 0;
    let j = n - 1;

    for (let i = 0; i < n; i++) {
      while (j >= 0 && matrix[i][j] > mid) j--;
      count += (j + 1);
    }

    if (count < k) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }

  return low;
}

console.log(kthSmallest([[1,5,9],[10,11,13],[12,13,15]], 8));
