//Business Logic Archive ------------
//Under DreamPizza
// this.pizza = [];

// DreamPizza.prototype.buildPizza = function() {
//   this.size + " pizza with " + this.crust + " crust, " + this.sauce + " sauce, " + this.cheese + ", and " + this.toppings;
// }

// DreamPizza.prototype.addPizza = function(pizza) {
//   this.pizza.push(pizza);
// }

// function Cost(size) { 
//   this.size = size;
// }

// DreamPizza.prototype.buildCost = function() {
//   this.cost.push(cost);
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

// DreamPizza.prototype.pizzaCost = function(cost) {
//   this.cost.push(cost);
// }

//UI Archive ------------

//    let userResponses = []; // wk 3 lsn 20 end
//     $("input:radio[name=pizza-size]:checked").each(function() {
//       const pizzaSize = $(this).val();
//       $('#pizza-size').append(pizzaSize + "<br>");
// //      userResponses.push(pizzaSize); // wk 3 lsn 20 end
//     });
//     $("input:radio[name=pizza-crust]:checked").each(function() {
//       const pizzaCrust = $(this).val();
//       $('#pizza-crust').append(pizzaCrust + "<br>");
//     });
//     // $("input:checkbox[name=pizza-cheese]:checked").each(function() {
//     //   const pizzaCheese = $(this).val();
//     //   $('#pizza-cheese').append(pizzaCheese + "<br>");
//     // });
//     $("input:checkbox[name=pizza-sauce]:checked").each(function() {
//       const pizzaSauce = $(this).val();
//       $('input#pizza-sauce').append(pizzaSauce + "<br>");
//     });
//     $("input:checkbox[name=pizza-meat]:checked").each(function() {
//       const pizzaMeat = $(this).val();
//       $('#pizza-meat').append(pizzaMeat + "<br>");
//     });
//     $("input:checkbox[name=pizza-veg]:checked").each(function() {
//       const pizzaVeg = $(this).val();
//       $('#pizza-veg').append(pizzaVeg + "<br>");
//     });