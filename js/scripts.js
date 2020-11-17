// //Business Logic for DreamPizza ------------
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
    return this.totalCost += 5;
  } else if (this.size === 'Large') {
    return this.totalCost += 10;
  } else if (this.size === 'X-Large') {
    return this.totalCost += 15;
  }
};

DreamPizza.prototype.addOnGFCost = function() { 
  if (this.crust === 'Gluten-Free') {
    return this.totalCost += 5;
  }
};
//User Interface ------------
function displayCostDetails(dreamPizzaCostToDisplay) { 
  let pizzaCostDisplay = $("ul#pizza-cost");
  let htmlForPizzaCost = '';
  dreamPizzaCostToDisplay.pizzas.forEach(function(dreamPizza) {
    htmlForPizzaCost += DreamPizza.prototype.sizeCost;
    newDreamPizza.addOnGFCost;
    newDreamPizza.addOnMeatToppingsCost;
    newDreamPizza.addOnVegToppingsCost;
  });
  pizzaCostDisplay.html(htmlForPizzaCost); //currently not returning at all
}
// dreamPizza.html(this.totalCost.sizeCost.addOnGFCost.addOnToppingsCost); //as is does not work to combine all the fxns

function displayPizzaDetails(dreamPizzaDisplay) {
  let pizzaBuildDisplay = $("ul#pizza-build");
  let htmlForPizzaDeets = '';
  dreamPizzaDisplay.pizzas.forEach(function(newDreamPizza) {
    htmlForPizzaDeets += "<li>" + inputtedSize + ' pizza with ' + inputtedCrust+ " crust, " + inputtedSauce + ' sauce, ' + inputtedMeat + ", " + inputtedVeg + "." + "</li>";
  });
  pizzaBuildDisplay.html(htmlForPizzaDeets);
}

function showPizza() {
  $("#dream-pizza-show").show();
  $("#pizza-build").html(dreamPizzaDisplay); 
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
    const inputtedMeat = $("input:radio[name='pizza-meat']:checked").attr("id");
    const inputtedVeg = $("input:radio[name='pizza-veg']:checked").attr("id");
    const basePrice= +0;
    let newDreamPizza = new DreamPizza(inputtedSize, inputtedCrust, inputtedSauce, inputtedMeat, inputtedVeg, basePrice);
    newDreamPizza.addPizza(); //not returning at all 
    displayPizzaDetails(newDreamPizza); //not returning at al
    $("#pizza-build").html(newDreamPizza); //could move to attlisteners
    let userCost = displayCostDetails(newDreamPizza);  //this was from Brooke mtg
    userCost.displayCostDetails();    //this was from Brooke mtg //() unknown
    $("#dream-pizza-show").show(); //could move to attachlisteners
    $('#pizza-builder').hide(); //could move to attachlisteners
    $('#order-instructions').hide();  //could move to attachlisteners

    //Refresh Dream Pizza UI
    $("#try-again").click(function() {//could move to attachlisteners
      window.location.reload();
    });
  });
}); // closing bracket for original doc.ready(fxn)//