$(document).ready(function() {
    $('#si2').hide();

    $('.slide2').click(function() {
        $('#si1').hide();
        $('#si2').show();
        $('.slide2').css({
            "background-position": "-14px, 0px"
        });
        $('.slide1').css({
            "background-position": "0px, 0px"
        });

    });
    $('.slide1').click(function() {
        $('#si1').show();
        $('#si2').hide();
        $('.slide1').css({
            "background-position": "-14px, 0px"
        });
        $('.slide2').css({
            "background-position": "0px, 0px"
        });
    });



    $('.sub').click(function() {
    	var userName = document.getElementById('nameBox').value;
    	var userEmail = document.getElementById('userEmail').value;
    	var userSubject = document.getElementById('userSubject').value;
    	var userMessage = document.getElementById('userMessage').value;

    	if(userName === "" || 
    		userEmail === "" ||
    		userSubject === "" ||
    		userMessage === "")
    	{
    		alert("There are empty fields.");
    		return false;
    	}
    	else
    	{
    		confirm("Thank you, " + userName + "! Your form was submitted.");
    	}
    });
});
