$(document).ready(function() {



  $("#favorite-things-input form").submit(function(event) {
    event.preventDefault();

    var favoriteFoodInput = $("input#fav-food").val();
    var favoritePersonInput = $("input#fav-person").val();
    var favoritePresidentInput = $("input#fav-president").val();

    $(".fav-food").append(favoriteFoodInput);
    $(".fav-person").append(favoritePersonInput);
    $(".fav-president").append(favoritePresidentInput);


    $("#user-response").show();

  })





});
