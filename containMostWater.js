function containMostWater(arr) {
  if (arr.length <= 1) {
    return null;
  }

  //Starting with the left and right heights in the array, we can check the volume between the two and multiply by the width
  //If there are better heights, we should decrement/increment the index according to the lower height between the two ends
  let start = 0;
  let end = arr.length - 1;
  let maxVolume = 0;

  while (start < end) {
    maxVolume = Math.max(
      maxVolume,
      Math.min(arr[start], arr[end]) * (end - start)
    );

    if (arr[start] < arr[end]) {
      start++;
    } else {
      end--;
    }
  }

  return maxVolume;
}

module.exports = containMostWater;
