// в константу cartButton помещаем элемент '#cart-button' 
const cartButton = document.querySelector('#cart-button');
// в константу modal помещаем элемент '.cart-button' 
const modal =  document.querySelector('.modal');
// в константу close помещаем элемент '.close' 
const close =  document.querySelector('.close');
cartButton.addEventListener('click', function (event){
  modal.classList.add('is-open');
});
close.addEventListener('click', function (event){
  modal.classList.remove('is-open');
});

new WOW().init();

console.log(modal);

cartButton.addEventListener('click', function (event) {
  console.log('Ты кликнул по кнопке. Ай я яй');
});

