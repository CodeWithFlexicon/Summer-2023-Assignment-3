function twoSum(arr, target) {
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
}

module.exports = twoSum;
