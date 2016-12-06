

// Initializing variables

var toAdd = "";
var addAlso = "";
var total = 0;

//JavaScript
// clock
window.onload = function() {

    document.getElementById("clock").innerHTML = new Date();
};

//JQuery
$(document).ready(function () {
          // Panel One Accommodations
    $( "#menuOne" ).mouseenter(function() {
        $( "#panel" ).slideDown();
    });
    $( "#panel" ).mouseleave(function() {
        $( "#panel" ).slideUp();
    });

    // Panel Two Sleeping Gear
    $( "#menuTwo" ).mouseenter(function() {
        $( "#panelTwo" ).slideDown();
    });
    $( "#panelTwo" ).mouseleave(function() {
        $( "#panelTwo" ).slideUp();
    });

          // Panel Three Riding Gear
    $( "#menuThree" ).mouseenter(function() {
        $( "#panelThree" ).slideDown();
    });
    $( "#panelThree" ).mouseleave(function() {
        $( "#panelThree" ).slideUp();
    });

          // Panel Four Entertainment and Food
    $( "#menuFour" ).mouseenter(function() {
        $( "#panelFour" ).slideDown();
    });
    $( "#panelFour" ).mouseleave(function() {
        $( "#panelFour" ).slideUp();
    });

          // Retract panels
    $( ".header" ).mouseenter(function() {
        $( "#panel" ).slideUp();
        $( "#panelTwo" ).slideUp();
        $( "#panelThree" ).slideUp();
        $( "#panelFour" ).slideUp();
    });

            // Adding to the check list
    $(".menuItems").click(function () {
        var toAdd = $(this).attr("id");
        var addAlso = $(this).attr("alt");
        $(".list").append('<p class="item">' + toAdd + " $"+ addAlso + '</p>');
    });
    var total = parseInt(addAlso);

    $("div span").innerHTML(total );




    $(document).on("click",".item",function () {
       $(this).remove()

    });

});
