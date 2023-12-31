function containMostWater(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError("An array has not been passed");
  }
  //If the array contains 1 or less elements, a container cannot be formed
  if (arr.length <= 1) {
    return null;
  }

  //Starting with the left and right heights in the array, we can check the volume between the two and multiply by the width
  //If there are better heights, we should decrement/increment the index according to the lower height between the two ends
  let start = 0;
  let end = arr.length - 1;
  let maxVolume = 0;

  //While both ends have not yet met, we can continue to find if there are any higher Volumes
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
