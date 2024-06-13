// function playNow(){
//     const homeScreen = document.getElementById('home-screen');
//     homeScreen.classList.add('hidden');

//     const playGroundScreen = document.getElementById('play-ground-screen');
//     playGroundScreen.classList.remove('hidden');
// }
function handleKeyboardKeyUp(event){
    playerPress = event.key;
    console.log("player pressed",playerPress);
    // stop the game if pressed 'Esc'
    if(playerPress === 'Escape'){
        gameOver();
    }

    // get the expect to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLocaleLowerCase();
    console.log(playerPress,expectedAlphabet);

    // Check right or wrong key press
    if(playerPress === expectedAlphabet){
        console.log('press right word!.');
        // update score:
        const currentScoreElement = getTextElementValueById('current-score');
        // increase the score by 1
        const newScore = currentScoreElement + 1;
        // Show the score
        setTextElementValueById('current-score',newScore);
        // ------------------------------------------------------
        // // 1. get the current score
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // console.log(currentScore);
        // // 2. increase the score by 1
        // const newScore = currentScore + 1;
        // // 3. show the updated score
        // currentScoreElement.innerText = newScore;


       
        // start a new round
        removeBackgroundColorById(expectedAlphabet);
        continueGame()
    }
    else{
        console.log('you press wrong word');
        // 1.get current life
        const currentLifeElement = getTextElementValueById("current-life");
        // 2.update lie by 1
        const newLife = currentLifeElement - 1;
        setTextElementValueById('current-life',newLife);
        if(newLife === 0){
            gameOver();
        }


        // step-1: get the current Life number
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);

        // // step-2: reduce the life count
        // const newLife = currentLife - 1;
        // // step-3: display the updated life count
        // currentLifeElement.innerText = newLife; 
    }
}

document.addEventListener('keyup',handleKeyboardKeyUp)

function continueGame(){
    const alphabet = getARandomAlphabet();
    const currentAlphabetElement = document.getElementById("current-alphabet");
    currentAlphabetElement.innerText = alphabet; 
    console.log('your alphabet ',alphabet);
    setBackgroundColorById(alphabet);
    
}
function playNow(){
    // hide everything only show the playground
    hideElementById('home-screen');
    hideElementById('score-screen');
    showElementById('play-ground-screen')
    // reset score and life
    setTextElementValueById('current-score',0);
    setTextElementValueById('current-life',5);
    
    continueGame();
    }
    function gameOver(){
        showElementById('score-screen');
        hideElementById('play-ground-screen');
        
        // final score
        const lastScore = document.getElementById('current-score').innerText;
        console.log(lastScore);
        setTextElementValueById("final-score",lastScore)

        // clear the last selected alphabet highlight
        const currentAlphabet = getElementTextById('current-alphabet');
        removeBackgroundColorById(currentAlphabet);
   
}
