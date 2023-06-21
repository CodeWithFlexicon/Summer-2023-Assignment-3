function longestSubString(str) {
  //Check the length of the string and return approriate length
  if (str.length == 0) {
    return 0;
  }
  if (str.length == 1) {
    return 1;
  }

  //We can use the sliding window technique which allows moving a "window" or expanding a window until a repeat character is found,
  //we can then update the start of the window to the end of previous window + 1.
  let maxLen = 0;
  let start = 0;
  //We can use a key:value pair to keep track on the last occurence of each character
  let seenChar = {};

  for (let end = 0; end < str.length; end++) {
    const currentChar = str[end];

    //If the character is already seen hence it being inserted into the map already,
    //move the start of the window pointer to the right of the last occurence
    if (seenChar[currentChar] >= start) {
      start = seenChar[currentChar] + 1;
    }

    //Update the last occurence index of the current character
    seenChar[currentChar] = end;

    //We can update the length if a greater one is found and since arrays start zero-indexed, we should add one when subtracting the size of the window.
    maxLen = Math.max(maxLen, end - start + 1);
  }

  return maxLen;
}

module.exports = longestSubString;
