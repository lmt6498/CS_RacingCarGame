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
function selectMove(evt){
    controler.key[evt.keyCode]= true;
}
function selectStop(evt){
    controler.key[evt.keyCode]= false;
}
function startMove(){
    window.addEventListener('keydown', selectMove);
    window.addEventListener('keyup', selectStop);
}
