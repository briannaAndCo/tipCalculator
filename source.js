//This makes sure that the whole page is loaded before we run anything.
$(document).ready(function() {
  //This is how to get an element.
 var mealCostEl = document.getElementById("mealCost");

 mealCostEl.addEventListener('change', (event) => {
   alert("The meal cost was changed. The new value is: " + event.target.value);
});



})
