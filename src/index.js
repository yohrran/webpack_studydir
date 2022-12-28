import _ from "lodash";
import printMe from "./print";

export function component() {
  const element = document.createElement("div");
  const button = document.createElement("button");

  element.innerHTML = _.join(["Hello", "webpack"], " ");

  button.innerHTML = "Clcik Me and check the console!!!";
  button.onclick = printMe;

  element.append(button);

  return element;
}

document.body.appendChild(component());
