let wordsContainer = document.getElementById("words");
let finalWordsContainer = document.getElementById("final-words");

let wordsBattle = document.getElementById("battle");

let totalActive = 0;

let wordL = document.getElementById("wordL");
let wordR = document.getElementById("wordR");

let sectionOneSubmit = document.getElementById("submit1");
let sectionThreeSubmit = document.getElementById("submit3");

let finalWords = document.getElementById("final");
let finalChosenWords = [];
let chosenWords = [];

let index = 0;
/*
    Connection: 0
    Authenticity: 1
    Integrity: 2
    Personal Growth: 3
    Creativity: 4
    Traps: 5
*/
let wordList = [
    {word: "Connection", value: 0},
    {word: "Family", value: 0},
    {word: "Empathy", value: 0},
    {word: "Love", value: 0},
    {word: "Faith", value: 0},
    {word: "Kindness", value: 0},
    {word: "Communication", value: 0},
    {word: "Teamwork", value: 0},
    {word: "Collaboration", value: 0},
    {word: "Concern for others", value: 0},
    {word: "Impact", value: 0},
    {word: "Community", value: 0},
    {word: "Meaning", value: 0},
    {word: "Service", value: 0},
    {word: "Caring", value: 0},
    {word: "Spirituality", value: 0},
    {word: "Inclusiveness", value: 0},
    {word: "Generosity", value: 0},
    {word: "Hope", value: 0},
    {word: "Friendship", value: 0},
    {word: "Authenticity", value: 1},
    {word: "Freedom", value: 1},
    {word: "Self-awareness", value: 1},
    {word: "Independence", value: 1},
    {word: "Individuality", value: 1},
    {word: "Integrity", value: 2},
    {word: "Leadership", value: 2},
    {word: "Respect", value: 2},
    {word: "Accountability", value: 2},
    {word: "Trust", value: 2},
    {word: "Truth", value: 2},
    {word: "Perseverance", value: 2},
    {word: "Hard Work", value: 2},
    {word: "Reliability", value: 2},
    {word: "Determination", value: 2},
    {word: "Excellence", value: 2},
    {word: "Loyalty", value: 2},
    {word: "Commitment", value: 2},
    {word: "Results-oriented", value: 2},
    {word: "Fairness", value: 2},
    {word: "Self-reliant", value: 2},
    {word: "Discipline", value: 2},
    {word: "Personal Growth", value: 3},
    {word: "Accomplishment", value: 3},
    {word: "Happiness", value: 3},
    {word: "Adventure", value: 3},
    {word: "Well-being", value: 3},
    {word: "Wisdom", value: 3},
    {word: "Gratitude", value: 3},
    {word: "Health", value: 3},
    {word: "Inner Peace", value: 3},
    {word: "Learning", value: 3},
    {word: "Emotional Intelligence", value: 3},
    {word: "Optimism", value: 3},
    {word: "Discovery", value: 3},
    {word: "Competence", value: 3},
    {word: "Strength", value: 3},
    {word: "Knowledge", value: 3},
    {word: "Challenge", value: 3},
    {word: "Efficiency", value: 3},
    {word: "Stability", value: 3},
    {word: "Calmness", value: 3},
    {word: "Improvement", value: 3},
    {word: "Peace", value: 3},
    {word: "Enjoyment", value: 3},
    {word: "Harmony", value: 3},
    {word: "Laughter", value: 3},
    {word: "Creativity", value: 4},
    {word: "Resourcefulness", value: 4},
    {word: "Solution-focused", value: 4},
    {word: "Innovation", value: 4},
    {word: "Success", value: 5},
    {word: "Effectiveness", value: 5},
    {word: "Wealth", value: 5},
    {word: "Prosperity", value: 5},
    {word: "Security", value: 5},
    
]

let minWords = 12;

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function addWord() {
    let newWord = document.createElement("button");
    let newText = document.createTextNode("Test");

    newWord.appendChild(newText);
    wordsContainer.appendChild(newWord);
}

function fillWords(words, container, numActive, button, mode) {
    shuffleArray(words);
    words.forEach(w => {
        let newWord = document.createElement("button");
        let newText = document.createTextNode(w.word);
        newWord.classList.add("word-button");
        newWord.setAttribute("value", w.value);
        newWord.setAttribute("onclick", "toggleActive(this," + numActive + "," + button.id +  "," + mode + ")");

        newWord.appendChild(newText);
        container.appendChild(newWord);
    });
}

function toggleActive(callElement, numActive, button, mode) {
    if(callElement.classList.contains("active")) {
        totalActive--;
    }
    else {
        totalActive++;
    }
    callElement.classList.toggle("active");

    if(mode === true) {
        if(totalActive >= numActive) {
        
            button.disabled = false;
        }
        else {
            button.disabled = true;
        }
    }
    else {
        if(totalActive === numActive) {
            button.disabled = false;
        }
        else {
            button.disabled = true;
        }
    }
}

function sectionTwo() {
    let chosenWordElements = document.querySelectorAll(".active");
    totalActive = 0;
    chosenWordElements.forEach(e => {
        chosenWords.push({word: e.textContent, value: e.value});
    });

    console.log(chosenWords);

    wordsContainer.style.display = "none";
    sectionOneSubmit.style.display = "none";
    wordsBattle.style.display = "flex";

    if(chosenWords.length <= minWords) {
        wordsBattle.style.display = "none";
        sectionThree();
        return;
    }
    updateWords();

         
}

function sectionThree() {
    finalWordsContainer.style.display = "flex";
    wordsBattle.style.display = "none";
    sectionThreeSubmit.style.display = "block";

    while(wordsContainer.firstChild) {
        wordsContainer.removeChild(wordsContainer.firstChild);
    }
    fillWords(chosenWords, finalWordsContainer, 5, sectionThreeSubmit, false);

}

function finalSection() {
    let chosenWordElements = document.querySelectorAll(".active");
    chosenWordElements.forEach(e => {
        finalChosenWords.push(e.textContent);
    });
    finalWordsContainer.style.display = "none";
    sectionThreeSubmit.style.display = "none";
    finalWords.style.display = "flex";

    finalWords.children[1].textContent = finalChosenWords[0] + ", " +  finalChosenWords[1] + ", " +  finalChosenWords[2] + ", " +  finalChosenWords[3] + ", " + finalChosenWords[4];

}
function updateWords() {
    
    wordL.textContent = chosenWords[0].word;
    let found = false;
    for(var i = 1; i < chosenWords.length; i++) {
        if(chosenWords[i].value === chosenWords[0].value) {
            wordR.textContent = chosenWords[i].word;
            found = true;
            break;
        }
        index++;
    }
    if(found === false) {
        wordR.textContent = chosenWords[1].word;
    }
}

document.addEventListener("click", e => {
    if(!e.target.classList.contains("left-battle") && !e.target.classList.contains("right-battle")) {
        return;
    }
    let isLeftWord = e.target.classList.contains("left-battle");
    let isRightWord = e.target.classList.contains("right-battle");

    if(isLeftWord) {
        chosenWords.push(chosenWords.splice(0,1)[0]);
        chosenWords.splice(index, 1);
    }
    if(isRightWord) {
        chosenWords.push(chosenWords.splice(index, 1)[0]);
        chosenWords.shift();
    }

    if(chosenWords.length <= minWords) {
        sectionThree();
        return;
    }
    updateWords();
    index = 0;


    console.log(chosenWords)
})  


fillWords(wordList, wordsContainer, minWords, sectionOneSubmit, true);
