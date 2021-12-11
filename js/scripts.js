//Biz Logic
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.prices = function() {
  let pizzaSize = this.size;
  let toppings = this.toppings.length
  if(pizzaSize === "Ten") {
    return 10 + (toppings*2);
  } else if (pizzaSize === "Twelve") {
    return 12 + (toppings*2);
  } else {
    return 14 + (toppings*2);
  }
};


//UI Logic
$(document).ready(function(){
  $("form#order-form").submit(function(event) {
    event.preventDefault();

    const orderSize = $('#sizing').val();
    const orderToppings = [];

    $("input:checkbox[name=toppings]:checked").each(function () {
      orderToppings.push($(this).val());
    });

    const newOrder = new Pizza(orderSize, orderToppings);
    const orderPrice = newOrder.prices().toFixed(2)

    $('#pizza-pick').text(orderSize);
    $('#price').text(orderPrice);
    $('#topping-pick').text(orderToppings);
    console.log(newOrder)
    $('#total').show();
    console.log(total);
  })
});