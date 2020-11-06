# Pizza Parlor

#### Create Your Own Pizza, Epicodus Independent Project, Week 4, Object-Oriented Javascript, 11.6.2020

#### By Danielle Thompson

## Description
_Love pizza? So do I! Use this website to build your dream (virtual) pizza and get that mouth salivating. Gluten free? Don't worry - we have (virtual) GF crust! Choose your pizza size and individual toppings to see how much the pizza of your dreams will cost._

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
* _Choose your cheese/chz (mozzarella, vegan mozz, fontina, feta)._
* _Choose your sauce (tomato, white, garlic & olive oil, pesto)._
* _Choose your toppings from meat and vegetarian selections._
* _Submit your pizza selection to generate your pizza cost._

### Specs
| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
| **Homepage** | User accesses localhost:5500 | Homepage with user pizza input form |
| **Program Gathers User Pizza Input** | User input: "pizza toppings", "pizza size", "pizza cheese/chz", "pizza sauce", "pizza crust style" | Output: "dream pizza cost" |
| **Program Removes Spaces from User Input**| User Input: "pants pants" | Output: "pantspants" |
| **Program Removes Punctuation from User Input**| Input: "p#an^t@s  /p(ant%s" | Output: "pantspants" |
| **Program Assigns Characters Numeric Values** | Input: "pants" | Output: "3 1 1 1 1" |
| **Program Sums Character Values**| Input: "3 1 1 1 1" | Page Displays: 7 |

### Tests
Describe: Dream Pizza Constructor
Test:
Code:
Expect:

Describe: dreamPizzaCost
Code: add(pizzaSize + pizzaChz + pizzaSauce + pizzaToppings);
Expect: return dreamPizzaCost

## (Optional) Known bugs
_{I am Danielle's *bug* that needs fixing. I might impact this app by doing xyz. But you can do abc to get around me. Can do future fix me plz!}_

### Legal, or License 
_MIT_ Copyright (c) 2020 **_Danielle Thompson_**