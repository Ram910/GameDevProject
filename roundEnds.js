
function checkIfRoundEnd() {
    if(playersAlive === 1) {
        if(p1Stats.isAlive) {
            p1Score += 1;
        }
        else if(p2Stats.isAlive) {
            p2Score += 1;
        }
        else if(p3Stats.isAlive) {
            p3Score += 1;
        }
        resetRound();
    }
}