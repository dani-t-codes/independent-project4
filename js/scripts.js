//Business Logic for DreamPizza ------------
function DreamPizza(size, crust, sauce, cheese, toppings, totalCost) {
  this.size = size;
  this.crust = crust;
  this.sauce = sauce;
  this.cheese = cheese;
  this.toppings = toppings;
  this.totalCost = totalCost;
  };

DreamPizza.prototype.Cost = function() {
    if (this.size === small) {
    this.totalCost += 10;
  } else if (this.size === medium) {
    this.totalCost += 15;
  } else if (this.size === large) {
    this.totalCost += 20;
  } else if (this.size === xLarge) {
    this.totalCost += 25;
  }
};

function displayPizzaDetails(userDreamPizzaToDisplay) {
  this.size + " pizza with " + this.crust + " crust, " + this.sauce + " sauce, " + this.cheese + ", and " + this.toppings;
}
function displayPizzaDetails(buildCost) {
  this.size + this.crust +(add(this.toppings));
};

//User Interface ------------

$(document).ready(function() {
  $("form#pizza-builder").submit(function(event) {
    event.preventDefault();
    const inputtedSize = $("input:radio[name=pizza-size]:checked").val();
    const inputtedCrust = $("input:radio[name=pizza-crust]:checked").val();
    const inputtedSauce = $("input:radio[name=pizza-sauce]:checked").val();
    const inputtedCheese = $("input:checkbox[name=pizza-meat]:checked").val();
    const inputtedToppings = $("input:checkbox[name=pizza-veg]:checked").val();
    const totalCost = inputtedSize + inputtedCrust + inputtedToppings;
    let newDreamPizza = new DreamPizza(inputtedSize, inputtedCrust, inputtedSauce, inputtedCheese, inputtedToppings);
    let userCost = new Cost(inputtedSize);  //this was from Brooke mtg
    newDreamPizza.displayPizzaDetails(newDreamPizza);
    userCost.Cost(totalCost);    //this was from Brooke mtg
    console.log(newDreamPizza.buildPizza());
    console.log(userCost.Cost);
    $("#dream-pizza-show").show();
    $('#pizza-builder').hide();
    $('#order-instructions').hide();

    //Dream Pizza UI
    $("#try-again").click(function() {
      window.location.reload();
    });
  });

}); // closing bracket for original doc.ready(fxn)