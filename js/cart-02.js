let index = localStorage.getItem('index');
let array_index = new Array();
let array_index2 = new Array();
let count = 0; 
let productInfo = index;

let index2 = localStorage.getItem('index2');
let id = parseInt(localStorage.getItem('id'));
const container = document.querySelector('.cart-header');
const productsInCart =  document.getElementById('id_products');
array_index.unshift(index);
console.log(array_index);
array_index2.unshift(index2);


let cartItemHTML=`<section class="product" id = "product">
<div class="product__img col-12 col-md-4">
    <img src="img/MacPro.png" alt="" class="product__img">
</div>

<div class="product__tittle">${index}</div>
<div class="product__count">
    <div class="count">
        <div class="count__box">
            <input type="number" class="count_input" min="1" max="100" value="1" id="inp2" data-counter>
        </div>
        <div class="count__controls">
            <button class="count__up" type="button" data-action="up">
                <img src="./img/image_4.png" alt="Increase" id="up__img">
            </button>
            <button class="count__down" type="button" data-action="down">
                <img src="./img/image_5.jpg" alt="Decrease" id = "down__img" >
            </button>
        </div>
    </div>
</div>

<div class="product__price">${index2}</div>
<div class="product__controls">
    <button type="button" id="delete_button" >
        <img src="./img/delete_button.png">
    </button>
</div>

</section>`;
count++;

if (index == null && index2 ==null) {
    console.log('1');
}
else {
    productsInCart.insertAdjacentHTML('afterbegin',cartItemHTML);
}
