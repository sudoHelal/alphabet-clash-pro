// Hide the element
function hideElementById(elementById){
    const homeScreen = document.getElementById(elementById);
    homeScreen.classList.add('hidden');
}


// Show the element 
function showElementById(elementById){
    const playGroundScreen = document.getElementById(elementById);
    playGroundScreen.classList.remove('hidden');

}
// setBackgroundColor
function setBackgroundColorById(elementById){
    const backgroundColor = document.getElementById(elementById);
    backgroundColor.classList.add('bg-[#FFA500]');
}
function removeBackgroundColorById(elementById){
    const backgroundColor = document.getElementById(elementById);
    backgroundColor.classList.remove('bg-[#FFA500]');
}

// updated value function
function getTextElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementTextValue = element.innerText;
    const value = parseInt(elementTextValue);
    return value;
}
// set the value function
function setTextElementValueById(elementId,score){
    const element = document.getElementById(elementId);
    element.innerText = score;
}

function getElementTextById(elementId){
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text; 
}

function getARandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);
    // console.log(index,alphabets[index]);
    const alphabet = alphabets[index];
    return alphabet;

}