//initialized the addmoney button
document
  .getElementById("money-add-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    //Getting amount data from the shared data
    const addMoney = getInputFieldValueById("input-amount");
    const addPin = getInputFieldValueById("input-pin");

    if (addPin === 1234) {
      //calling the account balance id
      const balance = getTextFieldValueById("total-balance");
      const newBalance = balance + addMoney;
      console.log(newBalance);

      //add the balance to the total balance field
      document.getElementById("total-balance").innerText = newBalance;
      window.alert("Money added successfully");
    } else {
      window.alert("Wrong Pin Number!");
    }
  });
