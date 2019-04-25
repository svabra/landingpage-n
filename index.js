// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
//appDiv.innerHTML = `<h1>JS Starter</h1>`;

// find elements
var canvas = $("canvas");
//console.log("canvas width:" + canvas.width);
var c = document.getElementById("myCanvas");
c.width = window.innerWidth;
c.height = window.innerHeight;
console.log(c);

ctx = c.getContext("2d");

/************/
var x = 100;
var y = 100;
var dx = 0.5;
var dy = 1;
var radius = 50

function Connector(srcEl, trgEl) {
  this.srcEl = srcEl;
  this.trgEl = trgEl;


  this.draw = function() {}

  this.update = function() {
    // at the end draw
    this.draw();
  }
}

function animate() {

  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, innerWidth, innerHeight);
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2 * Math.PI);
  //ctx.strokeStyle = '#20B2AA';
  //ctx.stroke(); 
  ctx.fillStyle = 'rgba(95, 158, 160, 0.8)';
  ctx.fill();

  if (x + radius > window.innerWidth || x - radius < 0) {
    dx = -dx;
  }
  x += dx;
  //y += dy;
}

animate();

window.addEventListener('mousemove', function(event) {
  //console.log(event);
  //console.log(event.x);

});


$(document).ready(function () {
// POSITION THE SVAN
  var x = (window.innerWidth / 2) - ($("img").eq(0).width() / 2);
  alert(window.innerWidth +" - "+$("img").eq(0).width());
  $("#imgContainer").css({left: x});


  $("#controls").on('mouseover', 'div', function() {
    console.log('mouse-over');
    $("#imgContainer img").removeClass("opaque");

    var newImage = $(this).index() + 1;
    $("#imgContainer img").eq(newImage).addClass("opaque");
    drawLine($(this));

  });

  $("#controls").on('mouseout', 'div', function() {
    console.log('POSITION: ' + $(this).position());

    $("#imgContainer img").removeClass("opaque");
    $("#imgContainer img").eq(0).addClass("opaque");
    clearCanvas();
  });
});