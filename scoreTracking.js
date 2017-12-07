function displayScore() {
    text("Score:", 50, 40);

    image(p1Stats.p1Img, 100, 25, 20, 20);
    text("" + p1Score, 125, 40);

     image(p3Stats.p3Img, 175, 25, 20, 20);
     text("" + p3Score, 200, 40);

     image(p2Stats.p2Img, 250, 25, 20, 20);
     text("" + p2Score, 275, 40);

}

function checkWin() {
    if(p1Score == 5) {
        textAlign(CENTER, [CENTER]);
        textSize(40);
        text("Player 1 wins!", width/2, height/2);
        gameOver = true;
    }
    else if(p3Score == 5) {
        textAlign(CENTER, [CENTER]);
        textSize(40);
        text("Player 2 wins!", width/2, height/2);
        gameOver = true;
    }
    else if(p2Score == 5) {
        textAlign(CENTER, [CENTER]);
        textSize(40);
        text("Player 3 wins!", width/2, height/2);
        gameOver = true;
    }
}