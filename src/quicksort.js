// quicksort
//
// quicksort is another divide and conquer sorting algorithm with
// average time complexity of O(n log n). The key bit with QS is
// the selection of the pivot point, the point at which the
// division will take place.  A separate algorithm developed by
// Hoare will be used to roughly organize the data into "lesser"
// and "greater" halves.
//

const swap = (ar, a, b) => {
  [ar[b], ar[a]] = [ar[a], ar[b]];
};

// Hoare's partitioning algorithm
const findPivot = (ar, left, right) => {
  // l and r are indexes (pointers) into the dataset at the
  // left and right ends of the partition we're currently
  // dealing with. This code takes one pass through the
  // partition, moving from the ends toward the middle, 
  // swapping values such that in the end, everthing to the
  // left of the pivot index is smaller than everything to 
  // the right.

  let l = left;
  let r = right;
  const pivot = Math.floor((l + r) / 2); // set pivot in middle

  while (l <= r) { // while l is left of or at right
    while (ar[l] < ar[pivot]) { // scan left to right
      l += 1;
    }
    while (ar[r] > ar[pivot]) { // scan right to left
      r -= 1;
    }
    // at this point, ar[l] is < ar[pivot] and ar[r] is > it.
    if (l <= r) { // AND... if the pointers haven't crossed yet
      swap(ar, l, r); // swap values moving smaller to the left
      l += 1; // move l and r in their respective directions
      r -= 1;
    } // and continue until l > r (they've crossed)
  }
  return l; // make l the pivot for the next QS pass
};

// Quicksort using Hoare's partition scheme
const quickSort = (ar, l = 0, r = ar.length - 1) => {
  // this is a recursive algorithm that breaks the dataset into
  // progressively smaller pieces, at each step using the findPivot
  // function to do a quick shuffle of values around a central
  // index (the pivot)
  const pivot = findPivot(ar, l, r);

  if (l < pivot - 1) { // then the piece of the dataset left of 
    // the pivot is big enough to quickSort
    quickSort(ar, l, pivot - 1);
  }
  if (r > pivot) { // ditto the right side
    quickSort(ar, pivot, r);
  }
  return ar; // return sorted array, or array fragment
}; 

export default quickSort;
