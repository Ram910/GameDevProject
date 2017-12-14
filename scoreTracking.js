function displayScore() {
    text("Score:", 40, 30);

    image(p1Stats.p1Img, 90, 15, 20, 20);
    text("" + p1Score, 115, 30);

     image(p3Stats.p3Img, 165, 15, 20, 20);
     text("" + p3Score, 190, 30);

     image(p2Stats.p2Img, 240, 15, 20, 20);
     text("" + p2Score, 265, 30);

}

function checkWin() {
    if(p1Score == 5) {
        textAlign(CENTER, [CENTER]);
        textSize(40);
        image(p1Stats.p1Img, width/2 - 85, height/2 - 50);
        text("Wins!", width/2 + 30, height/2);
        gameOver = true;
    }
    else if(p3Score == 5) {
        textAlign(CENTER, [CENTER]);
        textSize(40);
        image(p3Stats.p3Img, width/2 - 85, height/2 - 50);
        text("Wins!", width/2 + 30, height/2);
        gameOver = true;
    }
    else if(p2Score == 5) {
        textAlign(CENTER, [CENTER]);
        textSize(40);
        image(p2Stats.p2Img, width/2 - 85, height/2 - 50);
        text("Wins!", width/2 + 30, height/2);
        gameOver = true;
    }
    if(gameOver) {
        textSize(20);
        text("Press Space for new game", width/2, height/2 + 30);
    }

}

function newGame() {
    if(gameOver) {
        if(keyDown(32)) {
            resetRound();
            resetScore();
        }
    }
}