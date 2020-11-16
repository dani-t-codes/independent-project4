//Business Logic for DreamPizza ------------
function PizzaRolodex() {
  this.pizzas = [];
}

PizzaRolodex.prototype.addPizza = function(dreamPizza) {
  this.pizzas.push(dreamPizza);
}

function DreamPizza(size, crust, sauce, meatToppings, vegToppings, totalCost) {
  this.size = size;
  this.crust = crust;
  this.sauce = sauce;
  this.meatToppings = meatToppings;
  this.vegToppings = vegToppings;
  this.totalCost = totalCost += 10;
  //this.totalCost = [];
}

DreamPizza.prototype.fullPizzaDetails = function() {
  return this.size + ' pizza with ' + this.crust + " crust, " + this.sauce + ' sauce, ' + this.meatToppings + ", and " + this.vegToppings + ".";
}

DreamPizza.prototype.sizeCost = function() {
  if (this.size === 'Medium') {
    this.totalCost += 5;
  } else if (this.size === 'Large') {
    this.totalCost += 10;
  } else if (this.size === 'X-Large') {
    this.totalCost += 15;
  }
  //this.totalCost.push(totalCost);
  return this.totalCost;
};

DreamPizza.prototype.addOnGFCost = function() {
  if (this.crust === 'Gluten-Free') {
    this.totalCost += 5;
  }
  return this.totalCost;
};

DreamPizza.prototype.addOnMeatToppingsCost = function() {
  let meatToppings = [];
  this.meatToppings.push(meatToppings);
  this.totalCost += parseInt((this.meatToppings.length - 1) * 5);
  return this.totalCost;
};

DreamPizza.prototype.addOnVegToppingsCost = function() {
  let vegToppings = [];
  this.vegToppings.push(vegToppings);
  this.totalCost += parseInt(this.vegToppings.length - 1);
  return this.totalCost;
};

//User Interface ------------
let dreamPizza = new DreamPizza();

function displayCostDetails(dreamPizzaCostToDisplay) { 
  let pizzaCostDisplay = $("ul#pizza-cost");
  let htmlForPizzaCost = '';
  dreamPizzaCostToDisplay.dreamPizza.forEach(function(DreamPizza) {
    htmlForPizzaCost += DreamPizza.prototype.sizeCost;
    DreamPizza.prototype.addOnGFCost;
    DreamPizza.prototype.addOnMeatToppingsCost;
    DreamPizza.prototype.addOnVegToppingsCost;
    pizzaCostDisplay.html(htmlForPizzaCost); //currently returns NaN
  });
  console.log(displayCostDetails(dreamPizzaCostToDisplay));
}
// dreamPizza.html(this.totalCost.sizeCost.addOnGFCost.addOnToppingsCost); //as is does not work to combine all the fxns

function displayPizzaDetails(dreamPizzaDisplay) {
  let pizzaBuildDisplay = $("ul#pizza-build");
  let htmlForPizzaDeets = '';
  dreamPizzaDisplay.dreamPizza.forEach(function(DreamPizza) {
    htmlForPizzaDeets += "<li>" + DreamPizza.size + ' pizza with ' + DreamPizza.crust + " crust, " + DreamPizza.sauce + ' sauce, ' + DreamPizza.meatToppings + ", " + DreamPizza.vegToppings + "." + "</li>";
  });
  pizzaBuildDisplay.html(htmlForPizzaDeets);
}
// let userDreamPizza = $("TODO");
// let htmlForPizzaDeets = '';
// displayPizzaDetails.forEach(function(userDreamPizza) {
//   userDreamPizza.concat(userDreamPizza.size + " pizza with " + DreamPizza.crust + " crust, " + DreamPizza.sauce + " sauce, " + DreamPizza.cheese + ", and " + DreamPizza.toppings); //lsn23 cheat sheet
// });
// userDreamPizza.html(htmlForPizzaDeets);

$(document).ready(function() {
  $("form#pizza-builder").submit(function(event) {
    event.preventDefault();
    const inputtedSize = $("input:radio[name='pizza-size']:checked").attr("id");
    const inputtedCrust = $("input:radio[name='pizza-crust']:checked").attr("id");
    const inputtedSauce = $("input:radio[name='pizza-sauce']:checked").attr("id");
    const inputtedMeat = $("input:checkbox[name='pizza-meat']:checked").attr("id");
    const inputtedVeg = $("input:checkbox[name='pizza-veg']:checked").attr("id");
    const basePrice = +0;
    let newDreamPizza = new DreamPizza(inputtedSize, inputtedCrust, inputtedSauce, inputtedMeat, inputtedVeg, basePrice);
    displayPizzaDetails(newDreamPizza);
    console.log(newDreamPizza.displayCostDetails); //returns undefined
    // $("#pizza-build").append(newDreamPizza);

    // let displayPizzaDetails = displayPizzaDetails(newDreamPizza);
    // let userCost = new displayCostDetails(inputtedSize);  //this was from Brooke mtg
    // newDreamPizza.displayPizzaDetails(newDreamPizza);
    // userCost.displayCostDetails();    //this was from Brooke mtg //() unknown
    // console.log(newDreamPizza.buildPizza());
    // console.log(userCost.Cost);
    $("#dream-pizza-show").show();
    $('#pizza-builder').hide();
    $('#order-instructions').hide();

    //Refresh Dream Pizza UI
    $("#try-again").click(function() {
      window.location.reload();
    });
  });

}); // closing bracket for original doc.ready(fxn)//