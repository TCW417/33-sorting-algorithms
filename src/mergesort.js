// mergesort
//
// The merge sort is yet another O(n log n) divide and conquer 
// sorting algorithm. Unlike quickSort, however, merge starts
// small and builds up the resulting dataset from those smaller
// pieces. There's no pivot, or partition as in quick, we just
// start by sorting 2 element arrays, then merge those into
// larger sorted array segments until the entire array is sorted.
//

// mergeSort
export default (ar) => {
  // the inner workings in a separate function
  const merge = (arr, start, size) => {
    // ar is the array segment to sort
    // start is the starting index (left)
    // size is how big a slice of the array we're
    // dealing with (2, 4, 6, 8, etc)
    const right = start + size; // start right of size slice
    // end set to lesser of end of 2 segments or end of array
    const end = Math.min(start + ((size * 2) - 1), ar.length - 1); 
    let lptr = start; // lptr is left pointer, starts at left
    let rptr = right; // rptr is right pointer, starts at 
    // left + size
    const temp = []; // will hold sorted segment

    for (let i = start; i <= end; i++) { // loop over two segments
      // merging them
      // if left <= right or right > end (unqual segment lengths)
      // and as long as left is left of right, add left to temp
      if ((arr[lptr] <= arr[rptr] || rptr > end)
        && lptr < right) {
        temp[i] = ar[lptr];
        lptr += 1;
      } else { // otherwise add right
        temp[i] = ar[rptr];
        rptr += 1;
      }
    }

    // move sorted segment back into input array
    // Note the this temp array is not filled contiguously and is
    // especially sparse at when size is small.  This is no biggy
    // given how JS implements arrays. The alternative would be to
    // map 0 <= i <= size to start <= i <= end.
    for (let i = start; i <= end; i++) {
      ar[i] = temp[i];
    }
  };

  // here's where we'll call merge on increasingly larger
  // size segments
  let stepSize = 1; // start with size 1. Frankly, I don't get
  // why this doesn't work starting at 2, since
  // one element is already sorted, but it
  // doesn't.
  while (stepSize < ar.length) { // stepSize increases by factor of
    // two ever pass.
    let l = 0; // set left ptr to start of array
    while (l + stepSize < ar.length) { // bite off stepSize pieces
      merge(ar, l, stepSize); // and pass them to merge
      l += stepSize * 2; // bump left ptr to next segment
    }
    stepSize *= 2; // double segment size and repeat
  }
  return ar; // return sorted array
};

// test data
// let test = [1, 5, 8, 2, 4, 3, 9, 6, 10, 7];
// console.log(test);
// console.log(mergeSort(test));
// test = [1];
// console.log(test);
// console.log(mergeSort(test));
// test = [];
// console.log(test);
// console.log(mergeSort(test));
// test = [1, 5, 2, 6, 7];
// console.log(test);
// console.log(mergeSort(test));
