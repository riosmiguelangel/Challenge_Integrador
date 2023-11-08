const add = document.querySelector ('#add');
const subtract = document.querySelector ('#subtract');
const quantity = document.querySelector ('#quantity');

add.addEventListener('click', () => quantity.value = Number (quantity.value) + 1 );
subtract.addEventListener('click', () => {
    const value = Number(quantity.value);
    const result = value - 1;
  
    if (quantity.value <= 0) {
      quantity.value = 0;
    } else {
      quantity.value = result;
    }
  });