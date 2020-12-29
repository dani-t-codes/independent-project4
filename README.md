# Dream Pizza

#### Create Your Own Pizza, Epicodus Independent Project, Week 4, Object-Oriented Javascript, 11.6.2020

#### By Danielle Thompson

## Description
Love pizza? So do I! Use this website to build your dream (virtual) pizza and get that mouth salivating in the process. Gluten free? Vegan? Don't worry - we have (virtual) items that will meet all your dietary needs! Choose your pizza size and individual toppings to see how much the pizza of your dreams will cost.

This independent project during week 4 of Epicodus is an exercise in object-oriented Javascript, test-driven development, and ensuring at least a minimum viable project is in place.

## Technologies used
* Javascript
* Bootstrap
* jQuery

## Installation requirements
* _For Mac users, find Terminal in your Finder, and open a new window. Install the package manager, [Homebrew](https://brew.sh/), on your device by entering this line of code in Terminal: `$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`._
* _Once homebrew is installed, install Git, a version control system for code writers, with this line of code `brew install git`._

* _For Windows users, open a new Command Prompt window by typing "Cmd" in your computer's search bar._
* _Once you have Homebrew &/or Git installed on your computer, go to this [GitHub repository](https://github.com/dani-t-codes/independent-project4) and clone this application with the following command:`git clone https://github.com/dani-t-codes/independent-project4`._
* _Open the index.html in your web browser of choice, either by double-clicking the file icon inside the project folder, or by opening File>Open File>"index.html" from the independent-project2 folder that you cloned onto your computer._
* _Read through the home page, and follow the order instructions below._

## Instructions 
* Choose your pizza size (sm, med, lg, x-lg).
* Choose your crust type (regular or gluten free).
* Choose your sauce (tomato, white, garlic & olive oil, pesto).
* Choose your toppings from meat and vegetarian selections.
* Submit your pizza selection to generate your pizza build & cost.

### Specs
| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
| **Homepage** | User accesses localhost:5500 | Homepage with user pizza input form ||
| **Program Builds Pizza from User Input**| User Input: "pizza toppings" "pizza crust" | Output: display of "pizza toppings" + "pizza crust" |
| **Program Evaluates User Input Values for Cost**| Input: topping1 + topping2 + topping3 | Output: "total of values" |
| **Program Returns Pizza Build & Cost** | Input: "pizza toppings" "pizza crust" | Output: "here's what's on your pizza" && "here's the cost for your pizza"|

### Tests
Describe: DreamPizza
Test: function DreamPizza()
Expect: DreamPizza().toInclude(size, crust, sauce, toppings, totalCost)

Describe: fullPizzaDetails
Test: DreamPizza.prototype.fullPizzaDetails()
Expect: .fullPizzaDetails().toEqual(returned values of DreamPizza in set order)

Describe: sizeCost
Test: sizeCost 
if (size === "sm") {
  return cost($10);
} else if (size === "med") {
  return cost($15);
} else if (size === "lg") {
  return cost ($20);
} else if (size === "x-lg") {
  return cost ($25);}
Expect: sizeCost(med).toEqual(totalCost + $15)

Describe: GFCost
Test: if (crust ==="GF") {
cost += 5;}
Expect.gfCost(gf).toEqual(totalCost + $5)

## Stretch Goals
Looking to the future, there are some additional functions I would like to build out in this project, including changing meat and veggie toppings to checkboxes instead of radio buttons. In order to do so, I would need to pull the checkbox data from the DOM upon form submission, send the data through a loop to retrieve all occurrences of checked toppings, and have a calculation in the UI logic that would total up the number of meat and veggie topping occurrences from the DOM and multiply by the set price per number of toppings. There is some testing below that might inform at least desired input and desired output for such functionality. These additional loops would definitely require some refactoring to reduce bloating in the user interface logic. 

Additionally, I might also consider adding a "Pizza Rolodex" to enter multiple pizzas into the DOM and store multiple pizzas at once. This could lend itself to a user "purchasing" multiple pizzas at one time, storing pre-defined pizzas the user could select from, and so forth. 

Finally, I would want to ensure that the meat section was optional, and that the user did not have to make a meat selection if they didn't want to. (Previously, when I had checkboxes in all toppings values, the selection would return an error if the user had not selected a meat.)

## Stretch Tests
Describe: PizzaRolodex()
Expect: Creates a pizzas array to hold dreamPizza fxn items.

Describe: pizzaRolodex.addPizza()
Expect: Pushes dreamPizza keys into pizzas array.

Describe: meatCost (in UI)
Test:  forEach(meatTopping)
  if (meat:checked) {
    return ($5);
    else if (meat1:checked, meat2:checked) {
      add(costofMeat1, costofMeat2)
  } else (no meat) {
    return $0;}
Expect: meatCost(chicken, bacon).toEqual(totalCost + $10)

Describe: vegCost (in UI)
Test:  forEach(vegTopping)
  if (veg:checked) {
    return +($1)/topping
  } else (no veg) {
    return $0;}
Expect: vegCost(spinach, garlic, mushrooms, onion).toEqual(totalCost + $4)

Describe: displayCostDetails function (in UI, but above doc.ready)
Test: add(sizeCost + meatCost + vegCost);
Expect: dreamPizzaCost('sm'+ 'chicken' + 'spinach' + 'garlic').toEqual($17)

## Color Theme
_{#F29829}, {#A64F03}, {#700B19}, {#401A0C}, {#F2F2F2}._

## Known bugs
_None to report at this time._ 

### Legal, or License 
_MIT_ Copyright (c) 2020 **_Danielle Thompson_**
