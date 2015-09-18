$(document).ready(function(){
	$("#name").hide().fadeIn(3000);
    $('#bio-header h2').hide().fadeIn(10000);
    $('#skills-header h2').hide().fadeIn(13000);
    $('#work-header h2').hide().fadeIn(16000);
    $('#contact-header h2').hide().fadeIn(19000);

    $("#bio-header").click(function(){
        $("#bio-info").slideToggle("slow");
    });
    $("#skills-header").click(function(){
        $("#skills-info").slideToggle("slow");
    });
    $("#work-header").click(function(){
        $("#work-info").slideToggle("slow");
    });
    $("#contact-header").click(function(){
        $("#contact-info").slideToggle("slow");
    });
});