//Business Logic
function dreamPizza(size, crust, sauce, cheese, toppings) {
  this.size = size;
  this.crust = crust;
  this.sauce = sauce;
  this.cheese = cheese;
  this.toppings = toppings;
} 

//dream pizza build biz 
dreamPizza.prototype.buildPizza = function() {
  return this.size + ", " + this.crust + ", " + this.sauce + ", " + this.cheese + ", " + this.toppings;
};

let pizzaAmerican = new dreamPizza ("Medium", "Regular", "Red", ["mozzarella", "fontina"],["toppings"],)

let pizzaItalian = new dreamPizza ("Large", "Regular", "Pesto", ["mozzarella", "fontina"], ["toppings"])

let pizzaQueenDiet = new dreamPizza ("Medium", "Gluten Free", "Garlic-EVOO", ["vegan mozz"], ["vegetarian toppings"])

//pizza cost biz

let smSize = { price: $10};
let medSize = { price: $15};
let lgSize = { price: $20};
let xlgSize = { price: $25};

const sizeCost = cost;//selection of one of the above

let regCrust = { name: "Regular", price: $0};
let gfCrust = { name: "Gluten Free", price: $5};

const crustCost = add (regCrust + gfCrust);//selection of one of the above

let pepperoni = { price: $5};
let chicken = { price: $5};
let bacon = { price: $5};
let sausage = { price: $5};

const meatCost = add(pepperoni + chicken + bacon + sausage);//selection of any of the above);

let olives  = "1" 
let spinach = "1" 
let garlic = "1" 
let jalapeno = "1" 
let mushrooms = "1" 
let onion = "1"
let tomato = "1"
let basil = "1"

let vegToppingsArray = [];
//vegToppings.push['#pizza-veg'];
//let x; for (x of vegtopping)
// OR use vegToppings.map(); 

for (let i = 0; i <= length.vegTopping; i = ++) {
    console.log(i);
  }
  //let (each vegTopping === cost +$1);

const vegCost = add([vegToppings]);

dreamPizza.prototype.buildCost = function() {
  add(sizeCost + crustCost + meatCost + vegCost);
};
//wk 2 lsn 53 insurance quote



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