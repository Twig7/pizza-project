# _Pizza Project!_

#### By _**Amber Wilwand**_

#### _This project uses objects and constructors to let you order pizza!_

## Technologies Used

- _HTML_
- _css_
- _Bootstrap_
- _Javascript_
- _JQuery_

## Description

_This code builds a 'very real' website for a 'very real' pizza establishment. It gathers topping selections and different sizing choices for the pizza and returns the price and final order!_

## Setup/Installation Requirements

- _Clone this repo to desktop_
- _Navigate to the top of the directory_
- _Run index.html through Google Chrome browser_

## Known Bugs

- _Code accepts a payment type I don't think I have access to_

## License

_Questions? Concerns? Contact me at 1234@internet.com_

Copyright (c) _10/23/2021_ _Amber Wilwand_

## Tests Run

## Describe: Pizza()

- _Test:_ "It should return size of pizza selected"
  _Code:_ this.size = size;
  _Expected output:_ ""

- _Test:_ "It should return the toppings selected"
  _Code:_ this.toppings = toppings;
  _Expected Output:_ ""

  ## Describe: Pizza.prototype.prices()

- _Test:_ "It should return "10" if pizza size small is selected"
  _Code:_ if(pizzaSize === "Ten") {
  return 10
  _Expected Output:_ 10

- _Test:_ "It should return "12" if pizza size medium is selected"
  _Code:_ else if (pizzaSize === "Twelve") {
  return 12
  _Expected Output:_ 12

- _Test:_ "It should return "14" if pizza size large is selected."
  _Code:_ else {
  return 14
  _Expected Output:_ 14

- _Test:_ "It should return sizing price + topping size
  _Code:_ + (toppings\*2);
  _Expected Output:_ Success
