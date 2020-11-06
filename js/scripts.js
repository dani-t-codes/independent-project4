//Business Logic
function dreamPizza(size, crust, sauce, cheese, toppings) {
  this.size = size;
  this.crust = crust;
  this.sauce = sauce;
  this.cheese = cheese;
  this.toppings = toppings;
} 

// dreamPizza.prototype.buildPizza = function() {
//   console.log("Pizza!")
// };

// dreamPizza.prototype.buildCost = function() {
//   console.log("Cost $$$")
// };
//wk 2 lsn 53 insurance quote

let pizzaAmerican = new dreamPizza ("Medium", "Regular", "Red", ["mozzarella", "fontina"],["toppings"],)

let pizzaItalian = new dreamPizza ("Large", "Regular", "Pesto", ["mozzarella", "fontina"], ["toppings"])

let pizzaQueenDiet = new dreamPizza ("Medium", "Gluten Free", "Garlic-EVOO", ["vegan mozz"], ["vegetarian toppings"])

//User Interface
$(document).ready(function() {
  $("form#pizza-builder").submit(function(event) {
    event.preventDefault();
    $("#dream-pizza-show").show();
//    let userResponses = []; // wk 3 lsn 20 end
    $("input:checkbox[name=pizza-size]:checked").each(function() {
      const pizzaSize = $(this).val();
      $('#pizza-size').append(pizzaSize + "<br>");
//      userResponses.push(pizzaSize); // wk 3 lsn 20 end
    });
    $("input:checkbox[name=pizza-crust]:checked").each(function() {
      const pizzaCrust = $(this).val();
      $('#pizza-crust').append(pizzaCrust + "<br>");
    });
    $("input:checkbox[name=pizza-cheese]:checked").each(function() {
      const pizzaCheese = $(this).val();
      $('#pizza-cheese').append(pizzaCheese + "<br>");
    });
    $("input:checkbox[name=pizza-sauce]:checked").each(function() {
      const pizzaSauce = $(this).val();
      $('#pizza-sauce').append(pizzaSauce + "<br>");
    });
    $("input:checkbox[name=pizza-meat]:checked").each(function() {
      const pizzaMeat = $(this).val();
      $('#pizza-meat').append(pizzaMeat + "<br>");
    });
    $("input:checkbox[name=pizza-veg]:checked").each(function() {
      const pizzaVeg = $(this).val();
      $('#pizza-veg').append(pizzaVeg + "<br>");
    });
    $('#pizza-builder').hide();
    $('#order-instructions').hide();
  });
});