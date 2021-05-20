let apId = "abc"; // ts doesn't complain because it's a global variable
const button = document.querySelector("button");
function addEmUp(n1: number, n2: number) {
  if (n2 > 0) {
    return n1 + n2;
  }
  return; // we make sure that all calls path return something
}

function clickHandler(message: string) {
  console.log("clicked!" + message);
}

// we make sure the button will exist at runtime
if (button) {
  button.addEventListener("click", clickHandler.bind(null, "You're welcome!"));
}
