//Business Logic for DreamPizza ------------
function DreamPizza() {
  this.pizza = [];
}; 

DreamPizza.prototype.addPizza = function(pizza) {
  this.pizza.push(pizza);
}
DreamPizza.prototype.buildCost = function() {
  this.cost;
}

DreamPizza.prototype.buildPizza = function() {
  this.size + " pizza with " + this.crust + " crust, " + this.sauce + " sauce, " + this.cheese + ", and " + this.toppings;
}

//Business Logic for User Pizzas ------------
function UserDreamPizza(size, crust, sauce, cheese, toppings, cost) {
  this.size = size;
  this.crust = crust;
  this.sauce = sauce;
  this.cheese = cheese;
  this.toppings = toppings;
  this.cost = cost;
};


//Business Logic for Pizza Cost ------------
//take out
// function Cost(size) { 
//   this.size = size;
// }


//UserDreamPizza Testing Objects
// let pizzaAmerican = new UserDreamPizza ("Medium", "Regular", "Red", ["mozzarella", "fontina"],["toppings"],)
// let pizzaItalian = new UserDreamPizza ("Large", "Regular", "Pesto", ["mozzarella", "fontina"], ["toppings"])
// let pizzaQueenDiet = new UserDreamPizza ("Medium", "Gluten Free", "Garlic-EVOO", ["vegan mozz"], ["vegetarian toppings"])

//Stretch Goal - More complex cost function
// BuildCost.prototype.addCost = function() {
//   return parseInt(this.sizeCost + this.crustCost + this.meatCost + this.vegCost);
// }

// let small = { cost: "10"};
// let medium = { cost:  "15"};
// let large = { cost: "20"};
// let xLarge = { cost: "25"};

// for (let i=0; i< this.size.length; i++) {
//   if (this.size === small) {
//     this.totalPizzaCost.push[10];
//   } else if (this.size === medium) {
//     this.totalPizzaCost.push[15];
//   } else if (this.size === large) {
//     this.totalPizzaCost.push[20];
//   } else if (this.size === xLarge) {
//     this.totalPizzaCost.push[25];
//   }
// };

//Cost of Reg. Crust = '0';
//Cost of GF Crust = '5';
// BuildCost.prototype.CrustResult = function(crust) {
//   this.crust = crust;
// }

// BuildCost.prototype.CrustCost = function(crust) {
//   for (let i=0; i< this.crust.length; i++) {
//     if (this.crust === regCrust) {
//       this.totalPizzaCost.push[0];
//     } else if (this.crust === gfCrust) {
//       this.totalPizzaCost.push[5];
//     }
//   };
// }

// // function setCheckboxValue(checkbox,value) {
// //   if (checkbox.checked!=value)
// //       checkbox.click();

// let pepp = 1;
// let chicken = 1;
// let bacon = 1;
// let sausage = 1;

// let meatCost = [];//selection of any of the above);
//   for (let i = 0; i< meatCost.length; i +=1) {
//     (parseInt(meatCost[i]) * 5)
//   }

// let olives  = "1" 
// let spinach = "1" 
// let garlic = "1" 
// let jalapeno = "1" 
// let mushrooms = "1" 
// let onion = "1"
// let tomato = "1"
// let basil = "1"

// let vegCost = [];//selection of any of the above);
// //vegToppings.push['#pizza-veg'];
// //let x; for (x of vegtopping)
// // OR use vegToppings.map(); 

// for (let i = 0; i <= length.vegCost; i += 1) {
//     vegCost.push(vegCost[i]);
//   }
//   //let (each vegTopping === cost +$1);

// DreamPizza.prototype.buildCost = function() {
//   add(sizeCost + crustCost + meatCost + vegCost);
// };
// //wk 2 lsn 53 insurance quote


//User Interface ------------
function displayPizzaDetails(userDreamPizzaToDisplay) {
}
function displayPizzaDetails(buildCost) {
}

$(document).ready(function() {
  $("form#pizza-builder").submit(function(event) {
    event.preventDefault();
    const inputtedSize = $("input:radio[name=pizza-size]:checked").val();
    const inputtedCrust = $("input:radio[name=pizza-crust]:checked").val();
    const inputtedSauce = $("input:radio[name=pizza-sauce]:checked").val();
    const inputtedCheese = $("input:checkbox[name=pizza-meat]:checked").val();
    const inputtedToppings = $("input:checkbox[name=pizza-veg]:checked").val();
    let newDreamPizza = new DreamPizza(inputtedSize, inputtedCrust, inputtedSauce, inputtedCheese, inputtedToppings);
    //let newCost = new Cost(inputtedSize);
    newDreamPizza.buildPizza();
    //newCost.buildCost();
    console.log(newDreamPizza.buildPizza());
    console.log(buildCost.newCost);
    $("#dream-pizza-show").show();
    $('#pizza-builder').hide();
    $('#order-instructions').hide();

    //Dream Pizza UI
    $("#try-again").click(function() {
      window.location.reload();
    });
  });

}); // closing bracket for original doc.ready(fxn)