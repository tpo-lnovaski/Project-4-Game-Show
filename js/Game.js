/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game{
 
    constructor() {
        this.missed = 0;
        this.phrases = [
            new Phrase('Hello World'),
            new Phrase('Shaken not stirred'),
            new Phrase('infinity and beyond'),
            new Phrase('Greased Lightning'),
            new Phrase('Go for broke')];
        this.activePhrase = null;
    }

    getRandomPhrase() {
        let phraseNum = Math.floor(Math.random()*this.phrases.length);
        return this.phrases[phraseNum];
    }
    
    startGame() {
        //reset board
        while(phraseUL.lastChild) {
            phraseUL.removeChild(phraseUL.lastChild);
        }
       for(let i=0; i<qwerty.length; i++) {
           qwerty[i].className = 'key';
       };
       for(let i=0; i<5;i++){
            const heartImg = heartsList.children[i].firstElementChild;
            heartImg.src = 'images/liveHeart.png'
       };
       this.missed = 0;

        //set board
        overlay.style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    handleInteraction(button) {
        const isPresent = this.activePhrase.checkLetter(button);
        if(isPresent === true){
            button.className = 'chosen';
            this.activePhrase.showMatchedLetter(button);
            this.checkForWin();
        } else {
            button.className = 'wrong';
            this.removeLife();
          };
    }

    removeLife() {
        this.missed += 1;
        const heartNum = this.missed - 1;
        const heartImg = heartsList.children[heartNum].firstElementChild;
        heartImg.src = 'images/lostHeart.png'
      
        if (this.missed === 5) {
            console.log('ya burnt')
            this.gameOver('loss');
        };
    }

    checkForWin() {
        const hiddenLetters = document.getElementsByClassName('hide');
        if(hiddenLetters.length === 0) {
            this.gameOver('win');
        };
    }

    gameOver(outcome) {  
        overlay.style.display = 'block';
        
        if(outcome === 'loss') {
            overlay.className = 'lose';
            gameOverMessage.textContent = 'Sorry, you lost!';
        } else if (outcome === 'win') {
            overlay.className = 'win';
            gameOverMessage.textContent = 'YOU WON';
        };
    }

 }