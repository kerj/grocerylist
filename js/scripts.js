// $(document).ready(function(){
//   $("form").submit(function(event))
//
//   var foodItems = [itemOne, itemTwo, itemThree, itemFour];
//   foodItems.map("#foodItem").val()
//
//   $("input#" + foodItems.forEach(function(foodItem){
//
//
//     event.preventDefault();
//
//   }))
//
// });

$(document).ready(function(){
  $("form").submit(function(event){
      event.preventDefault();

  var groceryInput = [];
  var item = 0;

  for (var x = 0; x < 4; x++) {
    groceryInput.push($("#item" + x).val());
  }

  groceryInput.forEach(function(foodInput){
      $("#list").prepend("<li>" + foodInput + "</li>");
    });
  // $("input#" + foodItem).val();
  //   console.log(newArrayEl);
  //   console.log(newArray);
  //   newArray.forEach(function(item){
  });
});
