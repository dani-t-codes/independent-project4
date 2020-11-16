//Business Logic for DreamPizza ------------
function DreamPizza(size, crust, sauce, meatToppings, vegToppings, totalCost) {
  this.size = size;
  this.crust = crust;
  this.sauce = sauce;
  this.meatToppings = meatToppings;
  this.vegToppings = vegToppings;
  this.totalCost = totalCost += 10;
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
//above & below - do === variables need to be "strings" or naw?? // might have to tie in .val() in UI
DreamPizza.prototype.addOnGFCost = function() {
  if (this.crust === 'Gluten-Free') {
    this.totalCost += 5;
  };
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
function displayCostDetails(dreamPizzaToDisplay) { //belows probs not right
  
  return this.totalCost;
}
// dreamPizza.html(this.totalCost.sizeCost.addOnGFCost.addOnToppingsCost); //as is does not work to combine all the fxns

function displayPizzaDetails(displayUserDreamPizza) {

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
    let newDreamPizza = new DreamPizza(inputtedSize, inputtedCrust, inputtedSauce, inputtedMeat, inputtedVeg, this.totalCost);
    console.log(newDreamPizza);
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

}); // closing bracket for original doc.ready(fxn)