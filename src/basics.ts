const add = (
  n1: number,
  n2: number,
  showResult: boolean,
  phrase: string = "The result is default "
) => {
  const result = n1 + n2;
  return showResult ? console.log(phrase + result) : result;
};

const number1 = 8;
const number2 = 2.9;
const printValue = true;
const resultPhrase = "The result is ";

const result = add(number1, number2, printValue, resultPhrase);
