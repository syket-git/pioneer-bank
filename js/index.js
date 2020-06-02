const deposit = (event) => {
  event.preventDefault();
  const depositAmount = document.getElementById('deposit-input').value;
  if (depositAmount <= 0) {
    alert('Invalid number');
  } else if (depositAmount > 100000000) {
    alert('Our deposit limit is 100,000,000');
  } else {
    const depositAdd = document.getElementById('deposit').innerText;
    const finalDeposit = parseInt(depositAmount) + parseInt(depositAdd);
    document.getElementById('deposit').innerText = finalDeposit;
    const balance = document.getElementById('balance').innerText;
    window.finalBalance = parseInt(depositAmount) + parseInt(balance);
    document.getElementById('balance').innerText = finalBalance;
  }
  document.getElementById('deposit-input').value = '';
};

const withdraw = (event) => {
  event.preventDefault();
  const withdrawAmount = document.getElementById('withdraw-input').value;
  const balance = document.getElementById('balance').innerText;
  if (withdrawAmount <= 0) {
    alert('Invalid Number');
  } else if (withdrawAmount > 100000000) {
    alert('Our withdraw limit is 100,000,000');
  } else if (withdrawAmount > balance) {
    alert('Sorry! Insufficient your balance amount');
  } else if (balance <= 0) {
    alert('Sorry! Insufficient your balance amount');
  } else {
    const totalWithdraw = document.getElementById('withdraw').innerText;
    const finalWithdraw = parseInt(withdrawAmount) + parseInt(totalWithdraw);
    document.getElementById('withdraw').innerText = finalWithdraw;
    const finalBalance = parseInt(balance) - parseInt(withdrawAmount);
    document.getElementById('balance').innerText = finalBalance;
  }

  document.getElementById('withdraw-input').value = '';
};
