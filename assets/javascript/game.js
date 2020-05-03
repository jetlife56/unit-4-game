$(document).ready(function() {
    // Empty Variable
    var wins = 0;
    var lose = 0;
    var totalScore = 0;
    // Random Number 
    var computerGuess = parseInt(Math.floor(Math.random() * 110));
 $('#pointstoreach').html(computerGuess);
    console.log(computerGuess);

    var ruby = parseInt(Math.floor(2));
    var topaz = parseInt(Math.floor(6));
    var memorial = parseInt(Math.floor(1));
    var emerald = parseInt(Math.floor(4));

    console.log(ruby);
    console.log(topaz);
    console.log(memorial);
    console.log(emerald);
    // Reset Function

    function reset() {
        totalScore = 0;
        $('totalplayerscore').html(totalScore);
        computerGuess = parseInt(Math.floor(Math.random() * 120) + 19);
        $('#pointstoreach').html(computerGuess);
    
    ruby = parseInt(Math.floor(2));
    topaz = parseInt(Math.floor(6));
    memorial = parseInt(Math.floor(1));
    emerald = parseInt(Math.floor(4));

    }


//create a click function for images generate number

$("#ruby").on("click", function() {
    
            totalScore = totalScore + ruby;
            $("#totalplayerscore").html(totalScore);
            console.log(ruby + totalScore);
            if (totalScore == computerGuess) {
                checkifwon();
            }else if (totalScore > computerGuess) {
                checkifwon();
            }
});
    
$("#topaz").on("click", function() {
    
            totalScore = totalScore + topaz;
            $("#totalplayerscore").html(totalScore);
            console.log(topaz + totalScore);
            if (totalScore == computerGuess) {
                checkifwon();
            }else if (totalScore > computerGuess) {
                checkifwon();
            }
});
    
$("#memorial").on("click", function() {
    
            totalScore = totalScore + memorial;
            $("#totalplayerscore").html(totalScore);
            console.log(memorial + totalScore);
            if (totalScore == computerGuess) {
                checkifwon();
            }else if (totalScore > computerGuess) {
                checkifwon();
            }
});

$("#emerald").on("click", function() {
    
            totalScore = totalScore + emerald;
            $("#totalplayerscore").html(totalScore);
            console.log(emerald + totalScore);
            if (totalScore == computerGuess) {
                checkifwon();
            }else if (totalScore > computerGuess) {
                checkifwon();
            }
});
    // create win and losses

function checkifwon() {
    
    if(totalScore === computerGuess) {
    
    wins++;
    console.log(wins);
    $("#totalscore").html("You Win");
    $("#wins").html("Wins: " + wins);
    reset();
} else if (totalScore > computerGuess) {
    
    lose++;
    console.log(lose);
    $("#totalscore").html("You Lost");
    $("#losses").html("Losses: " + lose);
    reset();
}
}});
