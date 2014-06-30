 $(function () {

 		function rand (x) {
			return Math.round(Math.random()*x+1);
		}

	 	var numRand = rand(100);
	 	var current = null;
	 	var previous = null;
 	
 		$('#guess').click(function(){
 			
 				var $userNum = $("#num").val();
 				var val = $userNum;

 					previous = current;
 					current = val;

 				if (val > 100 || val < 1) {
 					alert("Error Message");
 				} 

 				else if ( val == numRand ) {
 					alert("Congratulations");
 				}

 				else if ( current > numRand ) {
 					if ( previous !== null && Math.abs( numRand - current ) < Math.abs( numRand - previous ) ) {
 						alert("Walmer");
 					}

 					else if ( previous !== null && Math.abs( numRand - current ) > Math.abs( numRand - previous ) ) {
 						alert("Colder");
 					} 

 					else {
 						alert("Too High");
 					}
 				}

 				else if ( current < numRand ) {
 					if ( previous !== null && Math.abs( numRand - current ) < Math.abs( numRand - previous ) ) {
 						alert("Too Low - Walmer");
 					}

 					else if ( previous !== null && Math.abs( numRand - current ) > Math.abs( numRand - previous ) ) {
 						alert("Too Low - Colder")
 					}

 					else {
 						alert("Too Low");
 					}
 				}

 				else {
 					alert("Not a Number");
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
