var canvas = document.getElementById('screenGame');
var ctx = canvas.getContext('2d')

var windowHeight = canvas.height/50;
var windowWidth = canvas.width/50;


for (let row = 0; row < windowHeight; row++) {
    for (let col = 0; col < windowWidth; col++) {
        ctx.fillRect(row, col,50,50)
    }    
}