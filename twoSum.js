function twoSum(arr, target) {
  if (!Array.isArray(arr)) {
    throw new TypeError("An array has not been passed");
  }
  if (isNaN(target)) {
    throw new TypeError("The target is not a number");
  }
  //Create a hashmap to store key:value pairs, in this case element : index
  const finder = new Map();
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    //If the map already has the number where the target - current array element, we can
    //push the index value into the result array along with the current index
    if (finder.has(target - arr[i])) {
      result.push(finder.get(target - arr[i]));
      result.push(i);
      return result;
    }
    //If the map does not contain the number, we can just push the key:value pairs into the map
    finder.set(arr[i], i);
  }
  if (result.length <= 0) {
    //If the result contains no indices, then there are no two elements that make up the target
    return "Not Found";
  }
}

module.exports = twoSum;
