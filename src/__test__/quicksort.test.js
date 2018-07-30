import quickSort from '../quicksort';

describe('Quicksort tests', () => {
  let test;
  it('should sort an array of numbers, n even', () => {
    test = [1, 5, 8, 0, 2, 4, 3, 9, 6, 10, 9, 7];
    const result = quickSort(test);
    expect(result).toHaveLength(12);
    expect(result[0]).toEqual(0);
    expect(result[11]).toEqual(10);
    expect(result).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 10]);
  });

  it('should handle an empty array', () => {
    test = [];
    const result = quickSort(test);
    expect(result).toHaveLength(0);
  });

  it('should handle an odd-length array', () => {
    test = [1, 5, 8, 0, 9];
    const result = quickSort(test);
    expect(result).toHaveLength(5);
    expect(result[0]).toEqual(0);
    expect(result[4]).toEqual(9);
    expect(result).toEqual([0, 1, 5, 8, 9]);
  });
});
