const container2 = document.querySelector('.container2');
const productsInCart2 = document.getElementById('id_products');

 window.addEventListener('click', function(event){
    if(event.target.hasAttribute('data-cart')){
        console.log('Click on cart button');
        const card= event.target.closest('.card');
        const productInfo={
            id: card.dataset.id,
            imgSrc: card.querySelector('.card__image').getAttribute('src'),
            tittle: card.querySelector('.card__title').innerText,
            price: card.querySelector('.card__price').innerText,
            discount: card.querySelector('.card__label').innerText,
        }
        
        localStorage.setItem('id', productInfo.id);
        localStorage.setItem('index', productInfo.tittle);
        localStorage.setItem('index2', productInfo.price);

        console.log(productInfo);
        // проверяем есть ли товар в корзине

         let cartItemHTML=`<section class="product">
         <div class="product__img col-12 col-md-4">
             <img src="img/MacPro.png" alt="" class="product__img">
         </div>
        
         <div class="product__tittle">${productInfo.tittle}</div>
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

         <div class="product__price">${productInfo.price}.</div>
         <div class="product__controls">
             <button type="button" id="delete_button" >
                 <img src="./img/delete_button.png">
             </button>
         </div>
     </section>`;

     productsInCart2.insertAdjacentHTML('afterbegin',cartItemHTML);

    }
})