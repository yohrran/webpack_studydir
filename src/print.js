import { forEach, map, reduce } from "lodash";

export default function printMe() {
  console.log("I get called from print.js");

  function sum(numbers) {
    console.log(numbers);

    return numbers.reduce((a, b) => a + b);
  }

  let b = [1, 2, 3];
  let a = sum(b);
  console.log(a);
}
