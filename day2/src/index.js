class ArrayUtilities {
  /* Your magic here */
  // static addZeros = (numArr) => {
  //   let newArr = numArr.map((num) => `${num}0`);
  //   return newArr;
  // };

  static addZeros = (numArr) => numArr.map((num) => num * 10);
  static moreThanFifty = (numArr) => numArr.filter((i) => i > 50);
  static removeFirst = (numArr) => {
    numArr.shift();
    return numArr;
  };
  static sumAll = (numArr) => numArr.reduce((acc, val) => acc + val);
  static divide = (num) => Array.from(num.toString());
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const addZeros = ArrayUtilities.addZeros(numbers);
console.log(addZeros);

const moreThanFifty = ArrayUtilities.moreThanFifty(addZeros);
console.log(moreThanFifty);

const noFirst = ArrayUtilities.removeFirst(moreThanFifty);
console.log(noFirst);

const sumAll = ArrayUtilities.sumAll(noFirst);
console.log(sumAll);

const divided = ArrayUtilities.divide(sumAll);
console.log(divided);
