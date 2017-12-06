function displayScore() {
    text("Score:", 50, 40);

    image(p1Stats.p1Img, 100, 25, 20, 20);
    text("" + p1Score, 125, 40);

     image(p2Stats.p2Img, 175, 25, 20, 20);
     text("" + p2Score, 200, 40);

     image(p3Stats.p3Img, 250, 25, 20, 20);
     text("" + p3Score, 275, 40);

}

function checkWin() {

}