var road = document.getElementById('main-wrapper');

road.style.width = '600px';
road.style.height = '600px';
road.style.position = 'relative';
road.style.background = "url('Images/road2.jpg')";

// Move background
var increment = 0;
setInterval(function () {
    road.style.backgroundPosition = '0px ' + increment + 'px';
    increment += 2;
}, 10);