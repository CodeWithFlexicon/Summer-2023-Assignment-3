function reverseString(str) {
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

module.exports = reverseString;
