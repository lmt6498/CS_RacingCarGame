var carEnemy = function (x, y, src, speed) {

    this.x = x;
    this.y = y;
    this.img = new Image();
    this.img.src = src;
    this.speed = speed;

    carEnemy.prototype.draw = function (canvas) {
        var ctx = canvas.getContext("2d");
        ctx.drawImage(this.img, this.x, this.y, carSize, carSize);
    }
    carEnemy.prototype.move = function () {
        this.y += this.speed;
        if(this.y - carSize>= 600) {
            this.y= -carSize;
            this.x= random(0,600-carSize);
            this.speed= random(2,4);
            score++;
            document.getElementById('score').innerHTML= 'Your scores:'+score;
        }
        if (score > 50){
            this.speed = random(5,7);
        }else if(score >100){
            this.speed = random(8,10);
        }

    }
}
var carEnemys = [];
function createCarEnemy(carRandom) {

    for (var i = 0; i < carRandom; i++) {
        var carEnemy1 = new carEnemy(random(0, 600 - carSize), -20, getRandomCar(), random(2, 4));
        this.carEnemys.push(carEnemy1);
    }
}
function animation() {
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    car.move(37, 38, 40, 39);
    car.draw(canvas);
    for (var i = 0; i < carEnemys.length; i++) {
        this.carEnemys[i].move();
        this.carEnemys[i].draw(canvas);
    }
}
setInterval(animation, 10);

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

