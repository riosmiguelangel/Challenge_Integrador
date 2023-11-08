const add = document.querySelector ('#add');
const subtract = document.querySelector ('#subtract');
const quantity = document.querySelector ('#quantity');
const add__2 = document.querySelector ('#add__2');
const subtract__2 = document.querySelector ('#subtract__2');
const quantity__2 = document.querySelector ('#quantity__2');  

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




add__2.addEventListener('click', () => quantity__2.value = Number (quantity__2.value) + 1 );
subtract__2.addEventListener('click', () => {
    const value = Number(quantity__2.value);
    const result = value - 1;
  
    if (quantity__2.value <= 0) {
      quantity__2.value = 0;
    } else {
      quantity__2.value = result;
    }
  });