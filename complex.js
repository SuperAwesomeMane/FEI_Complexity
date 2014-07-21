$(document).ready(function() {

    $('.slide3').click(function() {
        $('#si2').css({
            "display": "none"
        });
        $('#si3').css({
            "display": "inline"
        });
        $('.slide3').css({
            "background-position": "-14px, 0px"
        });
        $('.slide2').css({
            "background-position": "0px, 0px"
        });

    });
    $('.slide2').click(function() {
        $('#si2').css({
            "display": "inline"
        });
        $('#si3').css({
            "display": "none"
        });
        $('.slide2').css({
            "background-position": "-14px, 0px"
        });
        $('.slide3').css({
            "background-position": "0px, 0px"
        });
    });



    $('.sub').click(function() {
        var userName = document.getElementById('nameBox').value;
        var userEmail = document.getElementById('userEmail').value;
        var userSubject = document.getElementById('userSubject').value;
        var userMessage = document.getElementById('userMessage').value;

        if (userName === "" || userEmail === "" ||
            userSubject === "" || userMessage === "") {

            alert("There are empty fields.");
            return false;
        } else {
            confirm("Thank you, " + userName + "! Your form was submitted.");
        }
    });
});
