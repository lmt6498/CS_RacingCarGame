var moveCar=function (){

    this.key = [];
    for(var i=1; i<145; i++){
        this.key.push(false);
    }
    this.move= function (i){
        this.key[i]= true;
    }
    this.stop=function (evt){
        this.key[i]= false;
    }
}
var controler= new moveCar();
function selectMove(e){
    controler.key[e.keyCode]= true;
}
function selectStop(e){
    controler.key[e.keyCode]= false;
}
function startMove(){

    window.addEventListener('keydown', selectMove);
    window.addEventListener('keyup', selectStop);
}
