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
} //currently returning undefined pizze with undefined crust ... etc. 

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

DreamPizza.prototype.addOnGFCost = function() { // could any of these multiple conditional statements get switched to "switch/case" statements? 
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
let pizzaRolodex = new PizzaRolodex();

function displayCostDetails(dreamPizzaCostToDisplay) { 
  let pizzaCostDisplay = $("ul#pizza-cost");
  let htmlForPizzaCost = '';
  dreamPizzaCostToDisplay.pizzas.forEach(function(dreamPizza) {
    htmlForPizzaCost += DreamPizza.prototype.sizeCost;
    DreamPizza.prototype.addOnGFCost;
    DreamPizza.prototype.addOnMeatToppingsCost;
    DreamPizza.prototype.addOnVegToppingsCost;
  });
  pizzaCostDisplay.html(htmlForPizzaCost); //currently not returning at all
}
// dreamPizza.html(this.totalCost.sizeCost.addOnGFCost.addOnToppingsCost); //as is does not work to combine all the fxns

function displayPizzaDetails(dreamPizzaDisplay) {
  let pizzaBuildDisplay = $("ul#pizza-build");
  let htmlForPizzaDeets = '';
  dreamPizzaDisplay.pizzas.forEach(function(dreamPizza) { //error message "Uncaught typeError: cannot read property 'forEach' of undefined"
    htmlForPizzaDeets += "<li>" + DreamPizza.size + ' pizza with ' + DreamPizza.crust + " crust, " + DreamPizza.sauce + ' sauce, ' + DreamPizza.meatToppings + ", " + DreamPizza.vegToppings + "." + "</li>";
  });
  pizzaBuildDisplay.html(htmlForPizzaDeets);
}

function showPizza(pizzas) {
  const pizza = addressBook(pizza[0]); //might not work - need a fxn
  $("#dream-pizza-show").show();
  $("#pizza-build").html(dreamPizza.size); //newDreamPizza needs to be DP keys ... probably individually added
}

function attachPizzaListeners() {
  $("ul#pizza-build").on("click", "li", function() {
    showPizza(this.pizzas); 
  });
};

$(document).ready(function() {
  $("form#pizza-builder").submit(function(event) {
    event.preventDefault();
    const inputtedSize = $("input:radio[name='pizza-size']:checked").attr("id");
    const inputtedCrust = $("input:radio[name='pizza-crust']:checked").attr("id");
    const inputtedSauce = $("input:radio[name='pizza-sauce']:checked").attr("id");
    const inputtedMeat = $("input:checkbox[name='pizza-meat']:checked").attr("id");
    const inputtedVeg = $("input:checkbox[name='pizza-veg']:checked").attr("id");
    const basePrice= +0;
    let newDreamPizza = new DreamPizza(inputtedSize, inputtedCrust, inputtedSauce, inputtedMeat, inputtedVeg, basePrice);
    pizzaRolodex.addPizza(newDreamPizza); //not returning at all 
    displayPizzaDetails(pizzaRolodex); //not returning at al
    //console.log(pizzaRolodex.pizzas); //does not return at all
    $("#pizza-build").html(newDreamPizza); //could move to attlisteners
    let userCost = new displayCostDetails(DreamPizza);  //this was from Brooke mtg
    userCost.displayCostDetails();    //this was from Brooke mtg //() unknown
    $("#dream-pizza-show").show(); //could move to attachlisteners
    $("")
    $('#pizza-builder').hide(); //could move to attachlisteners
    $('#order-instructions').hide();  //could move to attachlisteners

    //Refresh Dream Pizza UI
    $("#try-again").click(function() {//could move to attachlisteners
      window.location.reload();
    });
  });
}); // closing bracket for original doc.ready(fxn)//