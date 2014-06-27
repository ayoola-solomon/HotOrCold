function IsNumeric(n){
    return !isNaN(n);
} 

function rand (x) {
	return Math.round(Math.random()*x+1);
}

function hot () {
	return $("#randomnumber").text('You are Hot').
			animate({ opacity: 1, fontSize: "3em"}, "slow").
				css({ "background": "red", "color": "white"});
}

function cold () {
	return $("#randomnumber").text("You are Cold").
			animate({ width: "40%", opacity: 1, fontSize: "3em"}, 1500).
				css({ "background": "green"});
}

 var $numRand = rand(100);

$(function(){

    $("#guess").click(function() {
    
        var $userNum = $("#num").val();

        if ( isNaN ($userNum) || $userNum <= 0 || $userNum > 100 ) {
			$("#randomnumber").text('Please enter a guess between 1 and 100').css( { "margin-top": "450px;" } );
			return;
			}


        if ($userNum > $numRand) {
			hot();
		} 
		else if ($userNum < $numRand) {
			cold().animate({ width: "40%", opacity: 1, fontSize: "3em"}, 1500);
			}
			else {
				$("#randomnumber").text('You got it! My number was ' + $numRand).animate( {width: "60%", height: "10%"}, 1500);
				}

        return false;
    });
    

     $("#newgame").click(function() {
 			window.location = "index.html";
 			$('#num').val = "";
 		});

    // $("input[type=text]").each(function(){
    //     $(this).data("first-click", true);
    // });
    
    // $("input[type=text]").focus(function(){
       
    //     if ($(this).data("first-click")) {
    //         $(this).val("");
    //         $(this).data("first-click", false);
    //         $(this).css("color", "black");
    //     }
        
    // });
	
});