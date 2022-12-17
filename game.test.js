import Game from './Game';

test('Test Gutter Game', () => {
    var gutterGame = new Game();
    rollMany(gutterGame, 20, 0);
    expect(gutterGame.score()).toBe(0);
});

test('Test All Ones Game', () => {
    var allOnesGame = new Game();
    rollMany(allOnesGame, 20, 1);
    expect(allOnesGame.score()).toBe(20);
});

test('Test Spare Game', () => {
    var oneSpareGame = new Game();
    oneSpareGame.roll(5);
    oneSpareGame.roll(5); // Spare
    oneSpareGame.roll(3);
    oneSpareGame = rollMany(oneSpareGame,17,0);
    expect(oneSpareGame.score()).toBe(16);
});

test('Test Strike Game', () => {
    var oneStrikeGame = new Game();
    oneStrikeGame.roll(10); // Strike
    oneStrikeGame.roll(3); 
    oneStrikeGame.roll(4);
    oneStrikeGame = rollMany(oneStrikeGame,16,0);
    expect(oneStrikeGame.score()).toBe(24);
});

test('Test Perfect Game', () => {
    var perfectGame = new Game();
    perfectGame = rollMany(perfectGame,12,10);
    expect(perfectGame.score()).toBe(300);
});

function rollMany(game, totalRolls, pins){
    for (let r=0; r<totalRolls; r++){
        game.roll(pins);
    }
    return game;
}



