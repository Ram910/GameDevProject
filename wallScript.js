function drawWalls() {
    wallLeft = createSprite(-10, canvasHeight/2, 10, canvasHeight);
    wallRight = createSprite(canvasWidth + 5, canvasHeight/2, 10, canvasHeight);
    wallTop = createSprite(canvasWidth/2, -10, canvasWidth, 10);
    wallBot = createSprite(canvasWidth/2, canvasHeight + 5, canvasWidth, 10);
    walls.add(wallLeft);
    walls.add(wallRight);
    walls.add(wallTop);
    walls.add(wallBot);
}

function wallCollision() {
    players.collide(walls);
}