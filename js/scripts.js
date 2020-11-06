//Business Logic

//User Interface
$(document).ready(function() {
  $("form#pizza-builder").submit(function(event) {
    event.preventDefault();
    $("#dream-pizza-show").show();
    $("input:checkbox[name=pizza-size]:checked").each(function() {
      const pizzaSize = $(this).val();
      $('#dream-pizza-show').append(pizzaSize + "<br>");
    });
    $('#pizza-builder').hide();
  });
});