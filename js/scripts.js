//dream pizza build biz
function DreamPizza() {
  this.pizza = [];
} 

DreamPizza.prototype.buildPizza = function(size, crust, sauce, cheese, toppings) {
  this.size.push(pizza);
  this.crust.push(pizza);
  this.sauce.push(pizza);
  this.cheese.push(pizza);
  this.toppings.push(pizza);
  return this.size + ", " + this.crust + ", " + this.sauce + ", " + this.cheese + ", " + this.toppings;
};

let pizzaAmerican = new DreamPizza ("Medium", "Regular", "Red", ["mozzarella", "fontina"],["toppings"],)
let pizzaItalian = new DreamPizza ("Large", "Regular", "Pesto", ["mozzarella", "fontina"], ["toppings"])
let pizzaQueenDiet = new DreamPizza ("Medium", "Gluten Free", "Garlic-EVOO", ["vegan mozz"], ["vegetarian toppings"])

//pizza cost biz
let smSize = '10';
let medSize = '15';
let lgSize = '20';
let xlgSize = '25';

let sizeCost = [];//if/else if selection of one of the above
function SizeResult(smSize, medSize, lgSize, xlgSize) {
  this.smSize = smSize;
  this.medSize = medSize;
  this.lgSize = lgSize;
  this.xlgSize = xlgSize;
}

//to UI
  // if (size === smSize) {
  //   cost += 10;
  // } else if (size === medSize) {
  //   cost += 15;
  // } else if (size === lgSize) {
  //   cost += 20;
  // } else if (size === xlgSize) {
  //   cost +=25;
  // }

let regCrust = '0';
let gfCrust = '5';

let crustCost = [];//if/else selection of one of the above

function CrustResult (regCrust, gfCrust) {
  this.regCrust = regCrust;
  this.gfCrust = gfCrust;
}
//to UI
// if (crust === regCrust) {
//   cost += 0;
// } else (crust === gfCrust) {
//   cost =+ 5;
// }


let pepp = 1;
let chicken = 1;
let bacon = 1;
let sausage = 1;

let meatCost = [];//selection of any of the above);
  for (let i = 0; i< meatCost.length; i +=1) {
    (parseInt(meatCost[i]) * 5)
  }

let olives  = "1" 
let spinach = "1" 
let garlic = "1" 
let jalapeno = "1" 
let mushrooms = "1" 
let onion = "1"
let tomato = "1"
let basil = "1"

let vegCost = [];//selection of any of the above);
//vegToppings.push['#pizza-veg'];
//let x; for (x of vegtopping)
// OR use vegToppings.map(); 

for (let i = 0; i <= length.vegCost; i += 1) {
    vegCost.push(vegCost[i]);
  }
  //let (each vegTopping === cost +$1);

DreamPizza.prototype.buildCost = function() {
  add(sizeCost + crustCost + meatCost + vegCost);
};
//wk 2 lsn 53 insurance quote



//User Interface
$(document).ready(function() {
  $("form#pizza-builder").submit(function(event) {
    event.preventDefault();
    $("#dream-pizza-show").show();
//    let userResponses = []; // wk 3 lsn 20 end
    $("input:radio[name=pizza-size]:checked").each(function() {
      const pizzaSize = $(this).val();
      $('#pizza-size').append(pizzaSize + "<br>");
//      userResponses.push(pizzaSize); // wk 3 lsn 20 end
    });
    $("input:radio[name=pizza-crust]:checked").each(function() {
      const pizzaCrust = $(this).val();
      $('#pizza-crust').append(pizzaCrust + "<br>");
    });
    // $("input:checkbox[name=pizza-cheese]:checked").each(function() {
    //   const pizzaCheese = $(this).val();
    //   $('#pizza-cheese').append(pizzaCheese + "<br>");
    // });
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