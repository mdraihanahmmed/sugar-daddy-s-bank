const keepButton = document
  .getElementById("keep-button")
  .addEventListener("click", () => {
    // getting papas pari's deposit amount
    const depositInputTag = document.getElementById("deposit-feild");
    const depositAmountText = depositInputTag.value;
    const depositAmount = parseFloat(depositAmountText);

    // update deposit total
    const depositTotalTag = document.getElementById("deposit-total");
    const depositTotalAmountText = depositTotalTag.innerText;
    const depositTotalAmount = parseFloat(depositTotalAmountText);

    if (depositAmount > 0) {
      const totalDepositAmount = depositAmount + depositTotalAmount;

      depositTotalTag.innerText = totalDepositAmount;
    } else {
      alert("please enter a valid amount!");
    }

    // update total balance
    const totalBalanceTag = document.getElementById("total-balance");
    const totalBalanceText = totalBalanceTag.innerText;
    const totalBalanceAmount = parseFloat(totalBalanceText);

    if (depositAmount > 0) {
      const totalBalanceUpdate = depositAmount + totalBalanceAmount;

      totalBalanceTag.innerText = totalBalanceUpdate;
    }

    // clear the feild
    depositInputTag.value = "";
  });

const getButton = document
  .getElementById("get-button")
  .addEventListener("click", () => {
    // getting withdraw amount from papas pari
    const withdrawInputTag = document.getElementById("withdraw-input");
    const withdrawAmountText = withdrawInputTag.value;
    const withdrawAMount = parseFloat(withdrawAmountText);

    // getting withdraw amount
    const withdrawTotalTag = document.getElementById("withdraw-total");
    const withdrawTotalAmountText = withdrawTotalTag.innerText;
    const withdrawTotalAmount = parseFloat(withdrawTotalAmountText);

    // update total balance
    const totalBalanceTag = document.getElementById("total-balance");
    const totalBalanceText = totalBalanceTag.innerText;
    const totalBalanceAmount = parseFloat(totalBalanceText);

    if (withdrawAMount > 0 && withdrawAMount < totalBalanceAmount) {
      const totalBalanceUpdate = totalBalanceAmount - withdrawAMount;
      totalBalanceTag.innerText = totalBalanceUpdate;
    }

    // update withdraw total amount
    if (withdrawAMount > 0 && withdrawAMount < totalBalanceAmount) {
      const totaWithdrawAmount = withdrawAMount + withdrawTotalAmount;
      withdrawTotalTag.innerText = totaWithdrawAmount;
    } else {
      alert("please enter a valid amount!");
    }

    console.log(totalBalanceAmount);

    // clear the field
    withdrawInputTag.value = "";
  });
