const carBrandInputEl = document.querySelector('.js-addcar-input');
const yearInputEl = document.querySelector('.js-year-input');
const vinInputEl = document.querySelector('.js-vin-input');
const addCarBtEl = document.querySelector('.js-add-car-bt');

addCarBtEl.addEventListener('click', () => {
  console.log(carBrandInputEl.value);
  console.log(yearInputEl.value);
  console.log(vinInputEl.value);
})

