
function movePlayer1() {



    if (!keyDown("w") && !keyDown("s")) {
        p1Stats.ySpd = 0;
    }
    else if (keyDown("w") && keyDown("s")) {
        p1Stats.ySpd = 0;
    }
    else if(keyDown("w")) {
        p1Stats.ySpd = -stats.spd;
    }
    else if(keyDown("s")) {
        p1Stats.ySpd = stats.spd;
    }


   if(keyDown("a")) {
        p1Stats.rotX += -stats.spd;
        player1.rotation += -stats.spd;

    }
    if(keyDown("d")) {
        p1Stats.rotX += stats.spd;
        player1.rotation += stats.spd;
    }

    player1.setSpeed(p1Stats.ySpd, p1Stats.rotX);



}

function movePlayer2() {
    if (!keyDown(104) && !keyDown(101)) {
        p2Stats.ySpd = 0;
    }
    else if (keyDown(104) && keyDown(101)) {
        p2Stats.ySpd = 0;
    }
    else if(keyDown(104)) {
        p2Stats.ySpd = -stats.spd;
    }
    else if(keyDown(101)) {
        p2Stats.ySpd = stats.spd;
    }


    if(keyDown(100)) {
        p2Stats.rotX += -stats.spd;
        player2.rotation += -stats.spd;
    }
    if(keyDown(102)) {
        p2Stats.rotX += stats.spd;
        player2.rotation += stats.spd;
    }

    player2.setSpeed(p2Stats.ySpd, p2Stats.rotX);

}

function movePlayer3() {
    if (!keyDown(38) && !keyDown(40)) {
        p3Stats.ySpd = 0;
    }
    else if (keyDown(38) && keyDown(40)) {
        p3Stats.ySpd = 0;
    }
    else if(keyDown(38)) {
        p3Stats.ySpd = -stats.spd;
    }
    else if(keyDown(40)) {
        p3Stats.ySpd = stats.spd;
    }


    if(keyDown(37)) {
        p3Stats.rotX += -stats.spd;
        player3.rotation += -stats.spd;
    }
    if(keyDown(39)) {
        p3Stats.rotX += stats.spd;
        player3.rotation += stats.spd;
    }

    player3.setSpeed(p3Stats.ySpd, p3Stats.rotX);

}