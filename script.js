const getItem = (id) => {
  return document.getElementById(id);
};

const calculateMoney = (inputID, badgeID) => {
  const inputValue = getItem(inputID).value;
  const isNumeric = /^[0-9]+$/.test(inputValue);

  const taka = parseInt(inputValue);
  const bdt = parseInt(getItem(badgeID).innerText);
  const totalBdt = parseInt(getItem('total-bdt').innerText);

  if (inputValue == '' || !isNumeric) {
    fail_modal.showModal();
  } else if (totalBdt - taka < 0) {
    fail_modal2.showModal();
  } else {
    getItem(badgeID).innerText = bdt + taka;
    getItem('total-bdt').innerText = totalBdt - taka;

    success_modal.showModal();
  }
  getItem(inputID).value = '';
};

getItem('donation-btn').addEventListener('click', () => {
  getItem('history-btn').classList.remove('active');
  getItem('donation-btn').classList.add('active');
  getItem('donation').classList.remove('hidden');
  getItem('history').classList.add('hidden');
});
getItem('history-btn').addEventListener('click', () => {
  getItem('history-btn').classList.add('active');
  getItem('donation-btn').classList.remove('active');
  getItem('history').classList.remove('hidden');
  getItem('donation').classList.add('hidden');
});

getItem('donate-now-1').addEventListener('click', () => {
  calculateMoney('one-input', 'one-bdt');
});
getItem('donate-now-2').addEventListener('click', () => {
  s;
  calculateMoney('two-input', 'two-bdt');
});
getItem('donate-now-3').addEventListener('click', () => {
  calculateMoney('three-input', 'three-bdt');
});
