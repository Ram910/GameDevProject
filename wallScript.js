function drawWalls() {
    wallLeft = createSprite(-1, canvasHeight/2, 1, canvasHeight);
    wallRight = createSprite(canvasWidth + 1, canvasHeight/2, 1, canvasHeight);
    wallTop = createSprite(canvasWidth/2, -1, canvasWidth, 1);
    wallBot = createSprite(canvasWidth/2, canvasHeight + 1, canvasWidth, 1);
    walls.add(wallLeft);
    walls.add(wallRight);
    walls.add(wallTop);
    walls.add(wallBot);
}

function wallCollision() {
    players.collide(walls);
}