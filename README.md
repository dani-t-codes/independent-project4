# Dream Pizza

#### Create Your Own Pizza, Epicodus Independent Project, Week 4, Object-Oriented Javascript, 11.6.2020

#### By Danielle Thompson

## Description
_Love pizza? So do I! Use this website to build your dream (virtual) pizza and get that mouth salivating in the process. Gluten free? Vegan? Don't worry - we have (virtual) items that will meet all your dietary needs! Choose your pizza size and individual toppings to see how much the pizza of your dreams will cost._

_This independent project during week 4 of Epicodus is an exercise in object-oriented Javascript, test-driven development, and ensuring at least a minimum viable project is in place._

## Color Theme
_{#F29829}, {#A64F03}, {#700B19}, {#401A0C}, {#F2F2F2}._

## Technologies used
_Javascript_
_Bootstrap_
_jQuery_

## Installation requirements
* _For Mac users, find Terminal in your Finder, and open a new window. Install the package manager, (Homebrew) [https://brew.sh/], on your device by entering this line of code in Terminal: `$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`._
* _Once homebrew is installed, install Git, a version control system for code writers, with this line of code `brew install git`._

* _For Windows users, open a new Command Prompt window by typing "Cmd" in your computer's search bar._
* _Once you have Homebrew &/or Git installed on your computer, go to this (GitHub repository)[https://github.com/dani-t-codes/independent-project4] and clone this application with the following command:`git clone https://github.com/dani-t-codes/independent-project4`._
* _Open the index.html in your web browser of choice, either by double-clicking the file icon inside the project folder, or by opening File>Open File>"index.html" from the independent-project2 folder that you cloned onto your computer._
* _Read through the home page, and follow the order instructions below._

## Instructions 
* _Choose your pizza size (sm, med, lg, x-lg)._
* _Choose your crust type (regular or gluten free)._
* _Choose your sauce (tomato, white, garlic & olive oil, pesto)._
* _Choose your toppings from meat and vegetarian selections._
* _Submit your pizza selection to generate your pizza build & cost._

### Specs
| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
| **Homepage** | User accesses localhost:5500 | Homepage with user pizza input form ||
| **Program Builds Pizza from User Input**| User Input: "pizza toppings" "pizza crust" | Output: display of "pizza toppings" + "pizza crust" |
| **Program Evaluates User Input Values for Cost**| Input: topping1 + topping2 + topping3 | Output: "total of values" |
| **Program Returns Pizza Build & Cost** | Input: "pizza toppings" "pizza crust" | Output: "here's what's on your pizza" && "here's the cost for your pizza"|

### Tests
Describe: dreamPizza
Test: function dreamPizza()
Expect: dreamPizza().toInclude(size, crust, sauce, toppings, totalCost)

Describe: buildPizza function
Test: dreamPizza.prototype.buildPizza()
Expect: dreamPizza.prototype.buildPizza(x size + x crust + x sauce + x topping(s))

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
Expect: sizeCost(med).toEqual($15)

Describe: meatCost
Test:  if (meat:checked) {
    return ($5);
    else if (meat1:checked, meat2:checked) {
      add(costofMeat1, costofMeat2)
  } else (no meat) {
    return $0;}
Expect: meatCost(chicken, bacon).toEqual($10)

Describe: vegCost
Test:  if (veg:checked) {
    return +($1)/topping
  } else (no veg) {
    return $0;}
Expect: vegCost(spinach, garlic, mushrooms, onion).toEqual($4)

Describe: dreamPizzaCost function
Test: add(sizeCost + meatCost + vegCost);
Expect: dreamPizzaCost('sm'+ 'chicken' + 'spinach' + 'garlic').toEqual($17)
<!-- sauceCost & cheeseCost is not needed - included in size price !-->

## Known bugs
_As of 3:40pm 11.6.2020, bugs galore - work in progress._

### Legal, or License 
_MIT_ Copyright (c) 2020 **_Danielle Thompson_**