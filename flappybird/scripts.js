var myGameArea = {
    canvas: document.getElementById("screenGame"),
    start: function () {
        this.canvas.height = 500;
        this.canvas.width = window.innerWidth;
        this.context = this.canvas.getContext("2d")
    },
    clear: function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}


function cereatComponent(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    ctx = myGameArea.context;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
}


//show stats
function stats() {
    document.getElementById("firstWid").innerHTML = firstPilar.width
    document.getElementById("secondWid").innerHTML = secondPilar.width

    document.getElementById("firstHei").innerHTML = firstPilar.height
    document.getElementById("secondHei").innerHTML = secondPilar.height
}

//pilar object
function createPilar(height, width, color){
    this.height = height;
    this.width = width;
    this.color = color;
}


//calculate the height of the first column
function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

var gameObject;
var firstPilar = new createPilar(0, 100, "red");
var secondPilar = new createPilar(0, 100, "blue");


function createPilars() {

    var avalSpace = myGameArea.canvas.height - 150;

    firstPilar.height = getRandomIntInclusive(0, avalSpace);

    if (firstPilar.height != avalSpace) {
        secondPilar.height = avalSpace - firstPilar.height 
        console.log(secondPilar.height)
    }

    stats();

    cereatComponent(firstPilar.width, firstPilar.height, firstPilar.color, (0), (500-firstPilar.height));
    cereatComponent(secondPilar.width, secondPilar.height, secondPilar.color, (0), (0));
}



function gameStart() {
    myGameArea.start();
    createPilars();
}

gameStart()
