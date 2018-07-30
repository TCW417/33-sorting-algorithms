// bucket sort
//
// The bucket sort is a non-comparison type sort, which is why
// I wanted to implement it. I'm doing this from memory at this
// point, sitting by the river at our cabin...
//
// Bucket sort requires an extra bit if information besides just
// the array to sort. It needs to know the maximum value, or the 
// range of values, in the array. It doesn't have to be exact,
// just a number greater than or equal to the largest value
// in the data set. This is because it creates 
// "buckets" for each value and counts how many occur in the
// input array. Thus no comparisons. Using buckets results in
// best case and average case time complexity of O(n + k), where k 
// is the size of the range (# of buckets) and n the number of 
// elements to be sorted. Space complexity is O(n) where n = size 
// of input array plus size of buckets array which boils down to n.
// I've implmented both inplace and pure versions. The pure version
// would be O(k) space where k is max value.
//

// bucketSort
export default (ar, maxValue) => {
  // allocate the buckets and fill them with zero
  const buckets = new Array(maxValue + 1).fill(0);

  // Loop through array counting values into their own bucket
  for (let i = 0; i < ar.length; i++) {
    buckets[ar[i]] += 1;
  }
  // loop through the buckets, dishing out appropriate numbers
  // of values back into a new array (we'll make this pure...)
  const inplace = true;
  if (!inplace) {
    const sorted = [];
    for (let i = 0; i < buckets.length; i++) {
      for (let j = 0; j < buckets[i]; j++) {
        sorted.push(i);
      }
    }
    return sorted;
  } // else use inplace code
  let p = 0;
  for (let i = 0; i < buckets.length; i++) {
    const start = p;
    for (let j = start; j < buckets[i] + start; j++) {
      ar[p] = i;
      p += 1;
    }
  }
  return ar;
};
