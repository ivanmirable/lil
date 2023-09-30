window.addEventListener('click',function(event){
    $flag = false;
    if(event.target.id ==='up__img' ||event.target.id ==='down__img'){
        $flag = true;
    }
    else{
        $flag =false;
    }

    if($flag)
    {
    console.log(event.target.id);
    //после срабатывания клика мы проверяем что клик был сделан в одном из элементов с классом class =count
    const count= event.target.closest('.count');
    //находим в классе элемент с атрибутом data-counter
    const counter= count.querySelector('[data-counter]');

    //отслеживаем событие клика на елемент с id = up__img
    if(event.target.id == 'up__img'){
        counter.value = ++counter.value;
        calcCartPrice()
     }
     //тоже самое только с минусом
     if(event.target.id == 'down__img'){
        if( counter.value > 1 ){
            counter.value = counter.value-1; 
            calcCartPrice();
        }
        else{
            counter.value = 1;
            calcCartPrice();
        }
     }
    }
    else if((event.target.closest('.product'))&&(event.target.closest('.product__controls'))){
        console.log('IN CART!');
      event.target.closest('.product').remove();
      calcCartPrice();
    }
});