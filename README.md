![cf](http://i.imgur.com/7v5ASc8.png) 33: Sorting Algorithms
===

[![Build Status](https://travis-ci.com/TCW417/33-sorting-algorithms.svg?branch=master)](https://travis-ci.com/TCW417/33-sorting-algorithms)

## Three Sorts:

### Quick sort
  * Big-Oh
    * Time
      * Best: O(n log(n))
      * Avg: O(n log(n))
      * Worst: O(n^2)
    * Space
      * O(log(n))
  * Unstable sort
  * Use this if you don't require a stable sort.
  * http://blog.benoitvallon.com/sorting-algorithms-in-javascript/the-quicksort-algorithm/
### Merge sort
  * Big-Oh
    * Time
      * Best: O(n log(n))
      * Avg: O(n log(n))
      * Worst: O(n log(n))
    * Space
      * O(n)
  * Stable sort
  * Use merge instead of quick if you don't know anything ab out the input data and/or you need a stable sort.
  * http://blog.benoitvallon.com/sorting-algorithms-in-javascript/the-merge-sort-algorithm/
### Bucket sort
  * Big-Oh
    * Time
      * Best: O(n + k)
      * Avg: O(n + k)
      * Worst: O(n^2)
    * Space
      * O(n)
 * Unstable or NA. 
  * Good for external sorts on very large datasets as only the buckets need to be kept in memory.
  * http://pages.cs.wisc.edu/~paton/readings/Old/fall08/LINEAR-SORTS.html

