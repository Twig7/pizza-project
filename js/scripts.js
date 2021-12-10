function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.prices = function() {
  let pizzaSize = this.size;
  let pizzaToppings = this.toppings.length;
}