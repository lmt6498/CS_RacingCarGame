var Car = function (x, y, src, speed) {

    this.x = x;
    this.y = y;
    this.img = new Image();
    this.img.src = src;
    this.speed = speed;

    this.draw = function (canvas) {
        var ctx = canvas.getContext("2d");
        ctx.drawImage(this.img, this.x, this.y, carSize, carSize);
    }
    this.move = function (left, up, down, right) {
        if (controler.key[left]) {
            if (this.x > 0) this.x -= this.speed;
        }
        if (controler.key[up]) {
            if (this.y > 0) this.y -= this.speed;
        }
        if (controler.key[down]) {
            if (this.y < 600 - carSize) this.y += this.speed;
        }
        if (controler.key[right]) {
            if (this.x < 600 - carSize) this.x += this.speed;
        }
    }
}
const carSize = 100;
let score= +0;
var canvas = document.getElementById("myCanvas");
var car = new Car(250, 500, 'Images/car.png', 3);

