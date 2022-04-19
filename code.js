function computerPlay () {
    let randoNum = Math.floor(Math.random() * 3) + 1;
    if(randoNum === 1) {
        return 'rock';;
    } else if (randoNum === 2) {
        return 'paper';
    } else if (randoNum === 3) {
        return 'scissors';
    }
}
