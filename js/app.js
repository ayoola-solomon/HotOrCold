 $(function () {

 		function rand (x) {
			return Math.round(Math.random()*x+1);
		};

	 	var numRand = rand(100);
	 	console.log(numRand);
	 	var current = null;
	 	var previous = null;
 	
 		$('#guess').click(function(){
 			
 				var $userNum = $("#num").val();
 				var val = $userNum;

 					previous = current;
 					current = val;

 				if (val > 100 || val < 1) {
 					$("#randomnumber").text("Please guess a number between 1 and 100");
 				} 
 				else if ( val == numRand ) {
 					$("#randomnumber").text("Congratulations! You got the Number");
 				}
 				else if ( current > numRand ) {
 					if ( previous !== null && Math.abs( numRand - current ) < Math.abs( numRand - previous ) ) {
 						$("#randomnumber").text("You are Hot");
 					}
 					else if ( previous !== null && Math.abs( numRand - current ) > Math.abs( numRand - previous ) ) {
 						$("#randomnumber").text("You are Cold");
 					} 
 					// else {
 					// 	$("#randomnumber").text("Too High");
 					// }
 				}
 				else if ( current < numRand ) {
 					if ( previous !== null && Math.abs( numRand - current ) < Math.abs( numRand - previous ) ) {
 						$("#randomnumber").text("You are Hot");
 					}
 					else if ( previous !== null && Math.abs( numRand - current ) > Math.abs( numRand - previous ) ) {
 						$("#randomnumber").text("You are Cold")
 					}
 					// else {
 					// 	$("#randomnumber").text("Too Low");
 					// }
 				}
 				else {
 					$("#randomnumber").text("This game can oly accept numbers");
 				}

 				$("#num").val('');
 		});

		// Button for a new game
 		$('#newgame').click(function() {
 			window.location = "index.html";
 		});

 		// Activates by pressing the enter key
 		$("#num").keyup(function(event){
    		if(event.keyCode == 13){
        		$("#guess").click();
    		}
		});

 });
