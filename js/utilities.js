//shared js functions
//getting the input value id
function getInputFieldValueById(id) {
  //storing the input data
  const inputMoney = document.getElementById(id).value;
  const inputNumber = parseFloat(inputMoney);
  return inputNumber;
}

//checking the available balance

function getTextFieldValueById(id) {
  const inputText = document.getElementById(id).innerText;
  const textValue = parseFloat(inputText);
  return textValue;
}
