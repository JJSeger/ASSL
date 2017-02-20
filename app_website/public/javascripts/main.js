/*Code for the interactive globe*/



var canvas = document.getElementById("3DView");
var options = {
    globeBackColor: "#333333FF",
    globeFrontColor: "#FFFFFF",
    globeLinesColor: "#000000FF"
};

var globe = new Globe(canvas,options);

var clickCallback = function() {
    console.log("clicked on image");
};

globe.addImage(40.8645306,-76.5524554, "star.png");
globe.addImage(-28.597736,-81.363348, "star.png", {}, clickCallback );


/*----------------------Animates the H1 element-------------*/

$('h1').addClass('animated rubberBand');


/*-----------------Animates the H2 Element----------------*/
$('i').addClass('animated bounceInDown');

