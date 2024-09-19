//initialized the addmoney button
document
  .getElementById("money-add")
  .addEventListener("click", function (event) {
    event.preventDefault();

    //Getting amount data from the shared data
    const addMoney = getInputFieldById("input-amount");
    console.log("Amount added", addMoney);
    const addPin = getInputFieldById("input-pin");
    console.log("Pin added", addPin);
  });
