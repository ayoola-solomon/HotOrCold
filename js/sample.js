function rand(n) {
	return (Math.floor(Math.random()*n+1));
}

var my_number = rand(100);

// start a new game

function new_game() {
	$('#num').val = "";

	// Generate a new random number
	my_number = rand(100);

	//Tell the user that we're ready for them to guess
	alert("OK, I'm thinking of another number...");
}

// Process the user's guess

$('#guess').click( function() {
	
	var user_guess = $('#num').val;

	if ( isNaN (user_guess) || user_guess < 1 || user_guess > 100 ) {
		alert('Please enter a guess between 1 and 100');
		return;
	}

	if (user_guess > my_number) {
		alert('Too High - try again');
	} 
		else if (user_guess < my_number) {
			alert('Too Low - guess a higher number')
		}
			else {
				alert ('You got it! My number was ' + my_number);
				new_game();
			}

			return false;
});
