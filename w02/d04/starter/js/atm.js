//Begin with the document ready function
$(function(){
  var checkingBalance = 0;
  var savingsBalance = 0;

  $('#depositChecking').on('click', function(){
    var inputAmount = parseFloat($('#amountChecking').val());
    if (savingsBalance < 0){
      savingsBalance += inputAmount;
      $('#savingsBalance').text("$" + parseFloat(savingsBalance));
      }
    else {
      checkingBalance += inputAmount;
      }

    $('#checkingBalance').text("$" + parseFloat(checkingBalance));
      if (checkingBalance > 1){
        $('#checkingBalance').css('background-color', '#E3E3E3');
      }
      //$('#amountChecking').val('');
  });

  $('#withdrawChecking').on('click', function() {
    inputAmount = parseFloat($('#amountChecking').val());
    if (inputAmount > checkingBalance){
        $('#checkingBalance').css('background-color', 'red');
        savingsBalance -= (40 + inputAmount);
        if (savingsBalance < 0){
          $('#savingsBalance').css('background-color', 'red');
        }
        $('#savingsBalance').text("$" + parseFloat(savingsBalance));
        }
    else {
    checkingBalance -= inputAmount;
    }
    $('#checkingBalance').text("$" + parseFloat(checkingBalance));
    //$('#amountChecking').val('');
  });

  $('#depositSavings').on('click', function(){
    var inputAmount = parseFloat($('#amountSavings').val());
    savingsBalance += inputAmount;
    $('#savingsBalance').text("$" + parseFloat(savingsBalance));
    if (savingsBalance > 1){
      $('#savingsBalance').css('background-color', '#E3E3E3');
    }
    //$('#amountSavings').val('');
  });

  $('#withdrawSavings').on('click', function() {
    inputAmount = parseFloat($('#amountSavings').val());
    if (inputAmount > savingsBalance){
        $('#savingsBalance').css('background-color', 'red');
        return;
        }
    else {
      savingsBalance -= inputAmount;
    }
    $('#savingsBalance').text("$" + parseFloat(savingsBalance));
    //$('#amountSavings').val('');
  });
});

	//Begin work on the Checking Account

		//Checking account deposit function

			//Get value from the amountChecking input field

			//On click of the depositChecking button

				//Take that value and add it to the existing value in the checkingBalance div

		//Checking account withdrawl funtion

			//Get value from the amountChecking input field

			//On click of the withdrawChecking button

				// If that value is greater than the value in the account ignore that action
				// In other words if this would put the account into a negative balance do not allow it

				//Else subtract that value from the current amount in the checking account

	//Begin work on the Savings account

		//Savings account deposit function

		 		//Get value from the amountSavings input field

		 		//On click of the depositSavings button

		 			//Take that value and add it to the existing value in the savingsBalance div

		//Savings account withdraw funtion

		 		//Get value from the amountSavings input field

		 		//On click of the withdrawl button

		 			//If that value is greater than the value in the account ignore that action
		 			//In other words if this would put the account into a negative balance do not allow it

		 			//Else subtract that value from the current amount in the savings account



// Bonus-- get the two accounts to work with each other and allow for overdraft protection

// Double Bonus-- This isnt very DRY.  Using the keyword "this" see if you can make the withdraw and deposit functions work for both accounts

