//Business Logic for DreamPizza ------------
function DreamPizza(size, crust, sauce, toppings, totalCost) {
  this.size = size;
  this.crust = crust;
  this.sauce = sauce;
  this.toppings = toppings;
  this.totalCost = totalCost += 10;
  //should I set original value to 0 then construct w/ .Cost fxn? 
  //^ yes, see lsn 9
}
//add todisplay fxn? see lsn 17 e.g.

DreamPizza.prototype.sizeCost = function() {
  if (this.size === 'Medium') {
    this.totalCost += 5;
  } else if (this.size === 'Large') {
    this.totalCost += 10;
  } else if (this.size === 'X-Large') {
    this.totalCost += 15;
  }
  return this.totalCost;
};
//above & below - do === variables need to be "strings" or naw??
DreamPizza.prototype.addOnGFCost = function() {
  if (this.crust === 'Gluten-Free') {
    this.totalCost += 5;
  };
  return this.totalCost;
}


DreamPizza.prototype.addOnToppingsCost = function() {
  let toppings = [];
  this.toppings.forEach.push(toppings);
  this.totalCost += parseInt(this.toppings.length);
};

// inputtedSize + inputtedCrust + inputtedMeat.length + inputtedVeg.length;
//**Need a connector for three cost prototypes**//

//User Interface ------------
function displayPizzaDetails(displayUserDreamPizza) {
  let userDreamPizza = $("TODO");
  let htmlForPizzaDeets = '';
  displayPizzaDetails.forEach(function(userDreamPizza) {
    userDreamPizza.concat(userDreamPizza.size + " pizza with " + DreamPizza.crust + " crust, " + DreamPizza.sauce + " sauce, " + DreamPizza.cheese + ", and " + DreamPizza.toppings); //lsn23 cheat sheet
  });
  userDreamPizza.html(htmlForPizzaDeets);
}

function displayCostDetails(buildCost) { //belows probs not right
  buildCost.html(this.totalCost.sizeCost.addOnGFCost.addOnToppingsCost.length);
}

$(document).ready(function() {
  $("form#pizza-builder").submit(function(event) {
    event.preventDefault();
    const inputtedSize = $("input:radio[name='pizza-size']:checked").attr("id");
    const inputtedCrust = $("input:radio[name='pizza-crust']:checked").attr("id");
    const inputtedSauce = $("input:radio[name='pizza-sauce']:checked").attr("id");
    const inputtedMeat = $("input:checkbox[name='pizza-meat']:checked").attr("id");
    const inputtedVeg = $("input:checkbox[name='pizza-veg']:checked").attr("id");
    // const totalCost = inputtedSize + inputtedCrust + inputtedToppings;
    let newDreamPizza = new DreamPizza(inputtedSize, inputtedCrust, inputtedSauce, inputtedMeat, inputtedVeg);
    let displayPizzaDetails = displayPizzaDetails(newDreamPizza);
    let userCost = new displayCostDetails(inputtedSize);  //this was from Brooke mtg
    newDreamPizza.displayPizzaDetails(newDreamPizza);
    userCost.displayCostDetails();    //this was from Brooke mtg //() unknown
    console.log(newDreamPizza.buildPizza());
    console.log(userCost.Cost);
    $("#dream-pizza-show").show();
    $('#pizza-builder').hide();
    $('#order-instructions').hide();

    //Refresh Dream Pizza UI
    $("#try-again").click(function() {
      window.location.reload();
    });
  });

}); // closing bracket for original doc.ready(fxn)