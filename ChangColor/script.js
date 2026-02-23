var color = document.querySelector(".color");
var button = document.querySelector("button");


button.addEventListener("click", function(){

    var first = Math.floor(Math.random()*256).toString(16).padStart(2, "0");
    var second = Math.floor(Math.random()*256).toString(16).padStart(2, "0");
    var third = Math.floor(Math.random()*256).toString(16).padStart(2, "0"); 
   var colorCode =  "#" + first + second + third;
    color.style.backgroundColor = colorCode;

})