function level1() {
    /*
    Draw level as non-sprite rectangles
    */
    var rects = [
        {x: 301, y: 620, w: 50, h: 200},
        {x: 979, y: 620, w: 50, h: 200},
        {x: 979, y: 100, w: 50, h: 200},
        {x: 301, y: 100, w: 50, h: 200},
        {x: 100, y: 418, w: 200, h: 50},
        {x: 1180, y: 418, w: 200, h: 50},
        {x: 640, y: 545, w: 400, h: 50},
        {x: 640, y: 175, w: 400, h: 50}
    ]

    // var rects = [
    //     {x: 276, y: 520, w: 50, h: 200},
    //     {x: 954, y: 520, w: 50, h: 200},
    //     {x: 954, y: 0, w: 50, h: 200},
    //     {x: 276, y: 0, w: 50, h: 200},
    //     {x: 0, y: 393, w: 200, h: 50},
    //     {x: 1080, y: 393, w: 200, h: 50},
    //     {x: 440, y: 520, w: 400, h: 50},
    //     {x: 440, y: 150, w: 400, h: 50}
    // ]

    for(var i = 0; i < rects.length; i++) {
        var rectangle = createSprite(rects[i].x, rects[i].y, rects[i].w, rects[i].h);
        rectangle.shapeColor = color(110, 190, 255);
        drawEmojis((rectangle));
    }
    // var rectangle = createSprite(200, 200, 200, 100);
    // rectangle.shapeColor = color(0);
    // drawEmojis(rectangle);
    player1.position.x = 640;
    player1.position.y = 43;

    player2.position.x = 1206;
    player2.position.y = 654;

    player3.position.x = 74;
    player3.position.y = 654;



    /*
    Overlap all rectangles with emoji sprites
    */

}

function level2() {

}

function level3() {

}

function levelSwitch() {

}

function drawEmojis(sprite) {
    
    var spriteW = sprite.width;
    var spriteH = sprite.height;

    var spriteX = sprite.position.x - spriteW/2; //Set initial X-pos for the sprites
    var spriteY = sprite.position.y - spriteH/2; //Set initial Y-pos for the sprites

    var wallW = 50; //Sprite width
    var wallH = 50; //Sprite height

    var emojiW = spriteW/wallW; //Calculate how many emojis on the X-axis
    var emojiH = spriteH/wallH; //Calculate how many emojis on the Y-axis

    for(var i = 0; i < emojiW; i++) {
        for(var j = 0; j < emojiH; j++) {
            var emojiX = spriteX + wallW * i + 25; //Set X-pos
            var emojiY = spriteY + wallH * j + 25; //Set Y-Pos
            var levelWall = createSprite(emojiX, emojiY); //Create the sprite
            levelWall.addImage(loadImage("assets/wallEmoji.png")); //Give sprite emoji image
            walls.add(levelWall); //Add sprite to walls group for collision detection
        }
    }

}