
//Checks if players are hit or bullet hits wall
function bulletCollision() {

    if(player1.overlap(bulletsP2) || player1.overlap(bulletsP3)) {
        if(player1.overlap(bulletsP2)) {
            playerHit("player1", bulletsP2);
        }
        else if(player1.overlap(bulletsP3)) {
            playerHit("player1", bulletsP3);
        }

    }

    if(player2.overlap(bulletsP1) || player2.overlap(bulletsP3)) {
        if(player2.overlap(bulletsP1)) {
            playerHit("player2", bulletsP1);
        }
        else if(player2.overlap(bulletsP3)) {
            playerHit("player2", bulletsP3);
        }
    }

    if(player3.overlap(bulletsP2) || player3.overlap(bulletsP1)) {
        if(player3.overlap(bulletsP1)) {
            playerHit("player3", bulletsP1);
        }
        else if(player3.overlap(bulletsP2)) {
            playerHit("player3", bulletsP2);
        }
    }

    if(bulletsP1.overlap(walls)) {
        wallHit(bulletsP1);
    }

    if(bulletsP2.overlap(walls)) {
        wallHit(bulletsP2);
    }

    if(bulletsP3.overlap(walls)) {
        wallHit(bulletsP3);
    }

}

//Causes players to die when hit
function playerHit(player, bullet) {
    if (player == "player1") {
        player1.remove();
        p1Stats.isAlive = false;
        playersAlive -= 1;
        bullet[0].life = 0;
    }
    else if(player == "player2") {
        player2.remove();
        p2Stats.isAlive = false;
        playersAlive -= 1;
        bullet[0].life = 0;
       // bullets.remove();
    }
    else if(player == "player3") {
        player3.remove();
        p3Stats.isAlive = false;
        playersAlive -= 1;
        bullet[0].life = 0;
    }
}

//Bullet removal upon wall collision
function wallHit(bullet) {
    bullet[0].life = 0;
}