
function setup () {
    createCanvas(canvasWidth, canvasHeight);

    startGame();

    p1Score = 0;
    p2Score = 0;
    p3Score = 0;

}

function draw () {
    background(110, 190, 255);
    drawSprites();

    displayScore();
    newGame();
    checkWin();

    movePlayer1();
    movePlayer2();
    movePlayer3();

    p1Shoot();
    p2Shoot();
    p3Shoot();



    bulletCollision();

    wallCollision();

    checkIfRoundEnd();

    if(keyDown(84)) {
        resetRound();
    }

}

function startGame() {

    initVariables();


    p1Stats.color = color(255, 0, 0);
    p2Stats.color = color(255, 0, 255);
    p3Stats.color = color(0, 0, 255);

    p1Stats.p1Img = loadImage('assets/appleDevil.png');
    p2Stats.p2Img = loadImage('assets/googleDevil.png');
    p3Stats.p3Img = loadImage('assets/fbDevil.png');

    player1 = createSprite(width/2, height/2 - 150, stats.size, stats.size);
    player1.addImage(p1Stats.p1Img);
    player1.scale = 0.6;
    player2 = createSprite(width/2 + 200, height/2 + 200, stats.size, stats.size);
    player2.addImage(p2Stats.p2Img);
    player2.scale = 0.6;
    player3 = createSprite(width/2 - 200, height/2 + 200, stats.size, stats.size);
    player3.addImage(p3Stats.p3Img);
    player3.scale = 0.6;

    players = new Group();

    players.add(player1);
    players.add(player2);
    players.add(player3);

    bulletsP1 = new Group();
    bulletsP2 = new Group();
    bulletsP3 = new Group();

    walls = new Group();
    drawWalls();
    level2();



    reloadTimeP1 = 0;
    reloadTimeP2 = 0;
    reloadTimeP3 = 0;

}

function resetRound() {
    clear();
    //Make a delay
    allSprites.removeSprites();
    startGame();
}