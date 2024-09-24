const getItem = (id) => {
  return document.getElementById(id);
};

const calculateMoney = (inputID, badgeID, title) => {
  const cardTitle = getItem(title).innerText;
  const inputValue = getItem(inputID).value;
  const isNumeric = /^[0-9]+$/.test(inputValue);

  const taka = parseInt(inputValue);
  const bdt = parseInt(getItem(badgeID).innerText);
  const totalBdt = parseInt(getItem('total-bdt').innerText);

  const date = new Date();

  if (inputValue == '' || !isNumeric || !taka) {
    fail_modal.showModal();
  } else if (totalBdt - taka < 0) {
    fail_modal2.showModal();
  } else {
    getItem(badgeID).innerText = bdt + taka;
    getItem('total-bdt').innerText = totalBdt - taka;
    const div = document.createElement('div');
    div.innerHTML = `
        <div class="border p-10 rounded-2xl">
          <h1 class="text-2xl font-extrabold">${taka} Taka is donated for ${cardTitle}</h1>
          <p class="text-gray-500 mt-2">Date: ${date}</p>
        </div>
    `;
    getItem('history').appendChild(div);
    success_modal.showModal();
  }
  getItem(inputID).value = '';
};

getItem('donation-btn').addEventListener('click', () => {
  getItem('history-btn').classList.remove('active');
  getItem('donation-btn').classList.add('active');
  getItem('donation').classList.remove('hidden');
  getItem('history').classList.add('hidden');
  getItem('blogs').classList.add('hidden');
});
getItem('history-btn').addEventListener('click', () => {
  getItem('history-btn').classList.add('active');
  getItem('donation-btn').classList.remove('active');
  getItem('history').classList.remove('hidden');
  getItem('donation').classList.add('hidden');
  getItem('blogs').classList.add('hidden');
});

const blog = () => {
  getItem('history').classList.add('hidden');
  getItem('donation').classList.add('hidden');
  getItem('blogs').classList.remove('hidden');
};

getItem('donate-now-1').addEventListener('click', () => {
  calculateMoney('one-input', 'one-bdt', 'title1');
});
getItem('donate-now-2').addEventListener('click', () => {
  calculateMoney('two-input', 'two-bdt', 'title2');
});
getItem('donate-now-3').addEventListener('click', () => {
  calculateMoney('three-input', 'three-bdt', 'title3');
});
