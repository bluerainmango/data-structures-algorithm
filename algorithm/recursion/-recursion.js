let counter = 0;
function inception() {
  debugger;
  console.log(counter);
  if (counter > 3) {
    return "done!";
  }
  counter++;
  return inception();
}

inception();
