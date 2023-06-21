function reverseString(str) {
  if (typeof str !== "string") {
    throw new TypeError("This is not a string");
  }
  if (str.length === 0) {
    return null;
  }
  let reverse = str.split("");
  let revLen = reverse.length;
  for (let i = 0; i < revLen / 2; i++) {
    let temp = reverse[revLen - i - 1];
    reverse[revLen - i - 1] = reverse[i];
    reverse[i] = temp;
  }
  reverse = reverse.join("");
  return reverse;
}

function isPalindrome(str) {
  if (typeof str !== "string") {
    throw new TypeError("This is not a string");
  }
  if (str.length === 0) {
    return null;
  }
  let j = str.length - 1;
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] != str[j--]) {
      return false;
    }
  }
  return true;
}

module.exports = {
  reverseString,
  isPalindrome,
};
