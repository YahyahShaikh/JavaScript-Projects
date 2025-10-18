// let input =document.getElementById("display")
// function addtodisplay (value){
//     input.value += value;
// }

// function cleardisplay({
    ;
// })

// Add value to the input
 function appendValue(value) {
    const resultInput = document.getElementById('result');
    resultInput.value += value;
  }

  // Clear the input
  function clearResult() {
    const resultInput = document.getElementById('result');
    resultInput.value = '';
  }
  function clearOne() { 
    const resultInput = document.getElementById('result');
    resultInput.value = resultInput.value.substring(0, resultInput.value.length - 1);
  }
  // Evaluate the expression
  function calculateResult() {
    const resultInput = document.getElementById('result');
    try {
      resultInput.value = eval(resultInput.value);
    } catch (error) {
      resultInput.value = 'Error';
    }
}