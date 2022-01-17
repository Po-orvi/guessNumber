'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score=20;
let highscore=0;


document.querySelector('.check').addEventListener
('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    if(score>1){
    if(!guess)
    {
        document.querySelector('.message').textContent = 'No Number!';
    }
    else if(guess === secretNumber)
    {
        document.querySelector('.message').textContent = 'Correct Number!';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;
        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

    }
    else
    {
        if(guess > secretNumber){
            document.querySelector('.message').textContent = 'Too High!!!';
            score--;
            document.querySelector('.score').textContent = score;
        }
        else if(guess < secretNumber){
            document.querySelector('.message').textContent = 'Too Low!!!';
            score--;
            document.querySelector('.score').textContent = score;
        }
    }
}
else{
    document.querySelector('.message').textContent = 'Game Over!!!';
    score=0;
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = 'red';
}

});

document.querySelector('.again').addEventListener
('click', function () {
    score=20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.guess').value = '';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';

});
