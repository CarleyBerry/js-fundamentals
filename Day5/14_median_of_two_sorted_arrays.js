function findMedianSortedArrays(nums1, nums2) {
  if (nums1.length > nums2.length) return findMedianSortedArrays(nums2, nums1);
  const x = nums1.length, y = nums2.length;
  let low = 0, high = x;

  while (low <= high) {
    const partitionX = (low + high) >> 1;
    const partitionY = ((x + y + 1) >> 1) - partitionX;

    const maxLeftX = (partitionX === 0) ? -Infinity : nums1[partitionX - 1];
    const minRightX = (partitionX === x) ? Infinity : nums1[partitionX];

    const maxLeftY = (partitionY === 0) ? -Infinity : nums2[partitionY - 1];
    const minRightY = (partitionY === y) ? Infinity : nums2[partitionY];

    if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
      if ((x + y) % 2 === 0) {
        return (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2;
      } else {
        return Math.max(maxLeftX, maxLeftY);
      }
    } else if (maxLeftX > minRightY) {
      high = partitionX - 1;
    } else {
      low = partitionX + 1;
    }
  }
}

console.log(findMedianSortedArrays([1,3], [2]));
