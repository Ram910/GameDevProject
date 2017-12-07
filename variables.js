
var player1;
var player2;
var player3;
var players;
var playersAlive = 3;

var p1Score;
var p2Score;
var p3Score;

var gameOver = false;

var bulletsP1;
var bulletsP2;
var bulletsP3;
var reloadTimeP1;
var reloadTimeP2;
var reloadTimeP3;


var walls;
var wallLeft;
var wallRight;
var wallTop;
var wallBot;

var canvasWidth = 1280;
var canvasHeight = 720;

var p1Stats = {
    score: 0
};

var p2Stats = {
    score: 0
};

var p3Stats = {
    score: 0
};

var bulletStats = {};

var stats = {};


function initVariables() {

    canvasWidth = 1280;
    canvasHeight = 720;

    playersAlive = 3;

    p1Stats = {
       rotX: 90,
       ySpd: 0,
       isAlive: true,
       color: 0
    };

    p2Stats = {
       rotX : 90,
       ySpd : 0,
       isAlive: true,
       color: 0
    };

    p3Stats = {
       rotX : 90,
       ySpd: 0,
       isAlive: true,
       color: 0
    };

    bulletStats = {
       spd: 7,
       size: 3
    };


    stats = {
       spd : 4,
       size: 40
    };
}

function resetScore() {
    p1Score = 0;
    p2Score = 0;
    p3Score = 0;
    gameOver = false;
}



