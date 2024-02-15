// function playMain(){
// // step-1:hide the home screen. to hide the screen add the class hidden to the home section.
// const homeSection = document.getElementById('home-screen');
// homeSection.classList.add('hidden');

// // step-2: show the playground.
// const playgroundSection =document.getElementById('play-ground');
// playgroundSection.classList.remove('hidden')
// // console.log(playgroundSection.classList)
// }




function handleKeyboardButton(event){
    const playerPressed = event.key;
    
    console.log('player pressed', playerPressed);

    // stop the game if pressed 'Esc'

    if(playerPressed === 'Escape'){
        gameOver();
    }

    const currentAlphabetElement = document.getElementById('current-alphabet')
    const targetAlphabet =currentAlphabetElement.innerText;
    const expectedAlphabet = targetAlphabet.toLowerCase();
    console.log(playerPressed, targetAlphabet);

    // check matched or not 
    if(playerPressed === expectedAlphabet){
        console.log('you get a point');
        // console.log('hello', expectedAlphabet);

        const currentScore = getTextElementValueById('current-score');
        // console.log(currentScore);
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score', updatedScore);







// ----------------------------------------------------

        // update score:
        // // 1.get the current score
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // console.log(currentScore);
        // // 2. increase the score by 1 by 1
        // const newScore = currentScore + 1;

        // // 2. show the updated score
        // currentScoreElement.innerText = newScore;

        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else{
        console.log('you missed. you lost a life');

        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life', updatedLife);
        if(updatedLife === 0){

            gameOver();
        }






        // -------------------------------------
        // step-1: get the current life number

        //  const currentLifT = document.getElementById('current-life');
        //  const currentLifeText = currentLifT.innerText;
        //  const currentLife = parseInt(currentLifeText);


        // // step-2: reduce the life count

        // const newLife = currentLife - 1;

        // // step-3: display the score updated life count

        // currentLifT.innerText = newLife;
    }
}

// capture keyboard key press
document.addEventListener('keyup', handleKeyboardButton)


function continueGame(){
    // step-1: generate a random alphabet
    const alphabet = getRandomAlphabet();
    // console.log('your random alphabet', alphabet)
    
    // step-1: randomly generated alphabet to the screen (show it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;
    // set background color 
    setBackgroundColorById(alphabet);


}

function playMain(){
    // hide everything show only the playground
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');

    // reset score and life
    setTextElementValueById('current-life', 5)
    setTextElementValueById('current-score', 0)


    continueGame();
    // setBackgroundColorById();
}


function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');
    // updated total score 
    // 1. get the final score 
    const lastScore = getTextElementValueById('current-score')
    console.log(lastScore);
    setTextElementValueById('total-score', lastScore);



// clear the last selected alphabet highlight.
const currentAlphabet = getElementTextById('current-alphabet');
// console.log(currentAlphabet);
removeBackgroundColorById(currentAlphabet)
}