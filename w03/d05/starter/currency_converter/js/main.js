$(function(){

  var dollars;
  var pounds;
  var convertedNumber;
  var amount;
  var input;


  function dollarsToPounds(input){
    pounds = (input * .67).toPrecision(4);
    return pounds;
  }

  $('.user_input').on('keypress', function(e){
    var input = $('.user_input').val();
    if (e.which === 13){
      dollarsToPounds(input);

      console.log(pounds);
      $('.output').text("$" + input + " is " + "£ " + pounds);
    }
  })



})
