import Roll from './Roll';

class Frame {

   rollIndex = 0;
   rolls = [];

    roll(pins){
        var curRoll = new Roll(pins);
        this.rolls[this.rollIndex] = curRoll;
        this.rollIndex++;
    }

    isSpare(rollIndex) {
        return this.rolls[rollIndex].getPins() + this.rolls[rollIndex+1].getPins() == 10;
    }

    isStrike(rollIndex) {
        return this.rolls[rollIndex].getPins() == 10;
    }

    strikeBonus(rollIndex){
        return this.rolls[rollIndex+1].getPins() + this.rolls[rollIndex+2].getPins();
    }

    spareBonus(rollIndex){
        return this.rolls[rollIndex+2].getPins();
    }
    sumOfBallsInFrame(rollIndex){
        return (this.rolls[rollIndex].getPins() + this.rolls[rollIndex+1].getPins());
    }

    getScore() {
        var score = 0;
        var frameIndex = 0;
        for(let f=0;f<10;f++){
            if(this.isStrike(frameIndex)){
                score = score + 10 + this.strikeBonus(frameIndex);
                frameIndex = frameIndex + 1;
            }else if(this.isSpare(frameIndex)){
                score = score + 10 + this.spareBonus(frameIndex);
                frameIndex = frameIndex + 2;
            }else{
                score = score + this.sumOfBallsInFrame(frameIndex);
                frameIndex = frameIndex + 2;
            }
        }
        return score;
    }


}
export default Frame;
