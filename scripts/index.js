import { carsData } from '/scripts/carsData.js';

const getCars = getFromStorage('carsData');
const carListEl = document.querySelector('.car-list');

const test = [{
  test1: 'testq'
}, {
  test2: 'testq2'
}];

function saveToStorage(name, item) {
  const stringified = JSON.stringify(item);
  localStorage.setItem(name, stringified)
}

function getFromStorage(item) {
  const item1 = localStorage.getItem(item);
  const parsed = JSON.parse(item1)

  return parsed;
}

saveToStorage('carsData', carsData);
console.log(getFromStorage('carsData'));


getCars.forEach((carInfo, index) => {
  let carNum = index + 1;
  const { carName, carYear, carVin } = carInfo;

  carListEl.innerHTML += `
    <a href="maintLog.html">
        <div class="car-log">
            <div class="number">${carNum}</div>
            <div class="car-info">
                <div class="car-name">${carName}</div>
                <div class="car-vin">VIN: ${carVin}</div>
            </div>
        </div>
    </a>
  `;
});



