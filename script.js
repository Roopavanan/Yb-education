 
 document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
        document.querySelector(".loading-screen").style.display = "none";
        document.querySelector(".content").style.display = "block";
    }, 3000); // Adjust loading time as needed
});
document.addEventListener("keydown", function(event) {
    alert("Error: F-13 not found! Did you just try to hack the matrix?");
    document.body.style.backgroundColor = "red";
    setTimeout(() => { document.body.style.backgroundColor = "black"; }, 1000);
});

var width = window.innerWidth - 100;
var height = window.innerHeight - 50;
function run() {
    var top = Math.random() * height;
    var left = Math.random() * width;
    document.querySelector('.joker').style.top = top + 'px';
    document.querySelector('.joker').style.left = left + 'px';
}

document.addEventListener("DOMContentLoaded", function() {
    var joker = document.querySelector('.joker');
    joker.addEventListener("mouseover", run);
    joker.addEventListener("mousemove", run);
});