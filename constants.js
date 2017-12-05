
var player1;
var player2;
var player3;
var players;

var bulletsP1;
var bulletsP2;
var bulletsP3;
var reloadTime;

var walls;
var wallLeft;
var wallRight;
var wallTop;
var wallBot;

var canvasWidth = 1280;
var canvasHeight = 720;


var p1Stats = {
    rotX: 90,
    ySpd: 0,
    isAlive: true,
    color: 0
};

var p2Stats = {
    rotX : 90,
    ySpd : 0,
    isAlive: true,
    color: 0
};

var p3Stats = {
    rotX : 90,
    ySpd: 0,
    isAlive: true,
    color: 0
};

var bulletStats = {
    spd: 5,
    size: 3
};


var stats = {
    spd : 4,
    size: 40
};
