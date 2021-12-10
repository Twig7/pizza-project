//Biz Logic
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.prices = function() {
  let pizzaSize = this.size;
  let toppings = this.toppings.length
  if(pizzaSize === "Ten") {
    return 8.99 + (toppings*2);
  } else if (pizzaSize === twelve) {
    return 10.99 + (toppings*2);
  } else {
    return 12.99 + (toppings*2);
  }
};

//UI Logic
$(document).ready(function(){
  $("form#order-form").submit(function(event) {
    event.preventDefault();

    const orderSize = $('#sizing').val();
    const orderToppings = [];

    $("input:checkbox[name=toppings]:checked").each(function () {
      orderToppings.push($(this).val())
    });

    const newOrder = new Pizza(orderSize, orderToppings);
    const orderPrice = newOrder.prices().toFixed(2)

    $('#results').show();
    console.log(results)
  })
});