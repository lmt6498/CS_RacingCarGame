function checkCollision(carEnemy, carPlay){
    var carSize= carEnemy.carSize;
    var condition1= (carEnemy.x>=(carPlay.x-carSize))
        && (carEnemy.x<=(carPlay.x+carSize))
        && (carEnemy.y>=carPlay.y)
        && (carEnemy.y<=(carPlay.y));
    var condition2= (carEnemy.x>=carPlay.x)
        && (carEnemy.x<=(carPlay.x))
        && (carEnemy.y>=(carPlay.y-carSize))
        && (carEnemy.y<=(carPlay.y+carSize));
    var condition3= Math.pow(carEnemy.x-carPlay.x, 2)+Math.pow(carEnemy.y-carPlay.y, 2) <= Math.pow(carSize, 2);
    var condition4= Math.pow(carEnemy.x-carPlay.x, 2)+Math.pow(carEnemy.y-carPlay.y, 2) <= Math.pow(carSize, 2);
    var condition5= Math.pow(carEnemy.x-carPlay.x, 2)+Math.pow(carEnemy.y-carPlay.y, 2) <= Math.pow(carSize, 2);
    var condition6= Math.pow(carEnemy.x-carPlay.x, 2)+Math.pow(carEnemy.y-carPlay.y,2) <= Math.pow(carSize, 2);
    if(condition1||condition2||condition3||condition4||condition5||condition6) {
        return true;
    }else return false;
}