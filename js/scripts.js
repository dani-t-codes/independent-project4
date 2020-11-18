// //Business Logic for DreamPizza ------------
function DreamPizza(size, crust, sauce, meatToppings, vegToppings) {
  this.size = size;
  this.crust = crust;
  this.sauce = sauce;
  this.meatToppings = meatToppings;
  this.vegToppings = vegToppings;
  this.totalCost = 10;
}

DreamPizza.prototype.fullPizzaDetails = function() {
  return this.size + '-size pizza with ' + this.crust + " crust, " + this.sauce + ' sauce, ' + this.meatToppings + ", and " + this.vegToppings + ".";
}; 

DreamPizza.prototype.sizeCost = function() {
  if (this.size === 'Medium') {
    this.totalCost += 5;
  } else if (this.size === 'Large') {
    this.totalCost += 10;
  } else if (this.size === 'X-Large') {
    this.totalCost += 15;
  }
};

DreamPizza.prototype.addOnGFCost = function() { 
  if (this.crust === 'Gluten-Free') {
    this.totalCost += 5;
  }
};

//User Interface Logic ---------------
$(document).ready(function() {
  $("form#pizza-builder").submit(function(event) {
    event.preventDefault();
    const inputtedSize = $("input:radio[name='pizza-size']:checked").attr("id");
    const inputtedCrust = $("input:radio[name='pizza-crust']:checked").attr("id");
    const inputtedSauce = $("input:radio[name='pizza-sauce']:checked").attr("id");
    const inputtedMeat = $("input:radio[name='pizza-meat']:checked").attr("id");
    const inputtedVeg = $("input:radio[name='pizza-veg']:checked").attr("id");
    let newDreamPizza = new DreamPizza(inputtedSize, inputtedCrust, inputtedSauce, inputtedMeat, inputtedVeg);
    newDreamPizza.sizeCost();
    newDreamPizza.addOnGFCost();
    $("#pizza-build").html(newDreamPizza.fullPizzaDetails())
    $("#pizza-cost").html('$' + newDreamPizza.totalCost);
    $("#dream-pizza-show").show(); 
    $('#pizza-builder').hide(); 
    $('#order-instructions').hide();      
    $("#try-again").click(function() {
      window.location.reload();
    });
  });
});