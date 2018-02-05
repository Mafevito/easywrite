var boxCanvas = document.getElementById("canvas");
var lienzo = boxCanvas.getContext("2d");

var estado = false,
    xinicial = 0,
    xfinal = 0,
    yinicial = 0,
    yfinal = 0,
    punto = false;

var x = "black",
    y = 2;

boxCanvas.addEventListener("mousemove", function (e) {
  encontrarxy('move', e);
}, false);

boxCanvas.addEventListener("mousedown", function (e) {
  encontrarxy('down', e);
}, false);

boxCanvas.addEventListener("mouseup", function (e) {
  encontrarxy('up', e);
}, false);

boxCanvas.addEventListener("mouseout", function (e) {
  encontrarxy('out', e);
}, false);


function dibujar() {
  lienzo.beginPath();
  lienzo.strokeStyle = x;
  lienzo.lineWidth = y;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function encontrarxy(res, e) {
  if (res == 'down') {
    xinicial = xfinal;
    yinicial = yfinal;

    xfinal = e.clientX - boxCanvas.offsetLeft;
    yfinal = e.clientY - boxCanvas.offsetTop;

    estado = true;
    punto = true;

    if(punto) {
      lienzo.beginPath();
      lienzo.fillStyle = x;
      lienzo.fillRect(xfinal, yfinal, 2, 2);
      lienzo.closePath();
      punto = false;
    }
  }
  if (res == 'up' || res == 'out') {
    estado = false;
  }
  if (res == 'move') {
    if (estado) {
      xinicial = xfinal;
      yinicial = yfinal;

      xfinal = e.clientX - boxCanvas.offsetLeft;
      yfinal = e.clientY - boxCanvas.offsetTop;
      dibujar();
    }
  }
}


$('#clear-button').click(function(){
      background(50, 180, 255);
   });
