function generatePlate(n) {
  const blocks = Array.from({ length: 7 }, (_, i) => 10 ** (6 - i) * 26 ** i);

  let block = -1;
  for (let i = 0; i < blocks.length; i++) {
    if (n < blocks[i]) {
      block = i;
      break;
    }
    n -= blocks[i];
  }

  const numberQuantity = 6 - block;
  const letterQuantity = block;

  let numberSequence;
  if (numberQuantity > 0) {
    numberSequence = n % 10 ** numberQuantity;
  } else {
    numberSequence = 0;
  }

  let letterSequence;
  if (numberQuantity > 0) {
    letterSequence = Math.floor(n / 10 ** numberQuantity);
  } else {
    letterSequence = n;
  }

  let numbers = "";
  if (numberQuantity > 0) {
    numbers = String(numberSequence).padStart(numberQuantity, "0");
  }

  let letters = "";
  if (letterQuantity > 0) {
    let temp = letterSequence;
    let arr = new Array(letterQuantity);
    for (let i = letterQuantity - 1; i >= 0; i--) {
      arr[i] = String.fromCharCode(65 + (temp % 26));
      temp = Math.floor(temp / 26);
    }
    letters = arr.join("");
  }

  return numbers + letters;
}
