function checkCollision(carEnemy, carPlay) {
    var carSize = carEnemy.carSize;
    var left1 =carEnemy.x;
    var right1 =carEnemy.x + carEnemy.carSize;
    var top1 =carEnemy.y;
    var bottom1 =carEnemy.y + carEnemy.carSize;

    var left2 =carPlay.x;
    var right2 =carPlay.x + carPlay.carSize;
    var top2 =carPlay.y;
    var bottom2 =carPlay.y + carPlay.carSize;

    // if (right1 < left2 || bottom1 < top2 || left1 > right2 || top1 > bottom2){
    //     return false;
    // }else {
    //     return true;
    // }
    var objDistance = Math.pow(left1 - left2, 2) + Math.pow(top1 - top2, 2);

    if (objDistance <= Math.pow(carSize-10, 2)) {
        return true;
    } else {
        return false;
    }
}