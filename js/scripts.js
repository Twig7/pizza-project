//Biz Logic
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.prices = function() {
  let pizzaSize = this.size;
  let xtraChee = this.
  if(pizzaSize === "Ten") {
    return 8.99 + ()
  }
}

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

    
  }
}