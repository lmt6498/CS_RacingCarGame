var carEnemy = function (x, y, src, speed) {

    this.x = x;
    this.y = y;
    this.img = new Image();
    this.img.src = src;
    this.speed = speed;
    this.carSize = 100;

    carEnemy.prototype.draw = function (canvas) {
        var ctx = canvas.getContext("2d");
        ctx.drawImage(this.img, this.x, this.y, this.carSize, this.carSize);
    }
    carEnemy.prototype.move = function () {
        this.y += this.speed;
        if(this.y - this.carSize>=600) {
            this.y= random(-100,-20);
            this.x= random(0,600-this.carSize);
            this.speed= random(3,4);
            score++;
            document.getElementById('score').innerHTML= 'Your scores:'+score;
        }
        if (score > 50){
            this.speed = random(5,7);
        }

    }
}
var carEnemys = [];
function createCarEnemy(carRandom) {

    for (var i = 0; i < carRandom; i++) {
        var carEnemy1 = new carEnemy(random(0,600 - this.carSize), -20, getRandomCar(), random(3,4));
        // var carEnemy2 = new carEnemy(random(350, 600 - this.carSize), -20, getRandomCar(), 5);
        this.carEnemys.push(carEnemy1);
        // this.carEnemys.push(carEnemy2);
    }
}
function animation() {
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    car.move(37, 38, 40, 39);
    car.draw(canvas);
    for (var i = 0; i < carEnemys.length; i++) {
        carEnemys[i].move();
        carEnemys[i].draw(canvas);
        if (checkCollision(carEnemys[i], car)) {
            clearInterval(interval);
            alert("Game over!");
        }
    }
}
var interval= setInterval(animation, 10);
function getRandomCar() {
    var carRandom = +Math.floor(Math.random() * 4)
    switch (carRandom) {
        case 0:
            return 'Images/car1.png';
        case 1:
            return 'Images/car2.png';
        case 2:
            return 'Images/car3.png';
        case 3:
            return 'Images/car4.png';
        default:
            return 'Images/car1.png';
    }
}

function random(min, max) {
    return parseInt(Math.random() * (max - min + 1) + min);
}

createCarEnemy(4);

// setInterval(createCarEnemy);

