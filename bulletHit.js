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

}

function playerHit(player, bullet) {
    if (player == "player1") {
        player1.remove();
        p1Stats.isAlive = false;
        bullet[0].life = 0;
        //bullets.remove();
        print("It collied");
    }
    else if(player == "player2") {
        player2.remove();
        p2Stats.isAlive = false;
        bullet[0].life = 0;
       // bullets.remove();
    }
    else if(player == "player3") {
        player3.remove();
        p3Stats.isAlive = false;
        bullet[0].life = 0;
        //bullets.remove();
    }
}