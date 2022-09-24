
let words = ["milk"]; 
// let words = ["javascript", "monkey", "amazing", "pancake", "books", "milk"]; 
let word = words[Math.floor(Math.random() * words.length)];
let answerArray = []; 

for(let i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}

let remainLetters = word.length;
let attempt = 0; 

while (remainLetters > 0 && attempt < 3) {
    alert(answerArray.join(" "));

    let letters = prompt("Guess a letter, or click Cancel to stop playing.");
    
    let guess = letters.toLowerCase();  

    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert("Please enter a single letter."); 
    } else if (!word.includes(guess)) {
        alert("There is no such letter in the word. Please try again."); 
        attempt++;    
    } else {        
        for ( let j = 0; j < word.length; j++ ) {
            if (word[j] == guess) {
                if (answerArray[j] == guess) {
                    alert("This letter is already in the word, enter another letter.")
                    remainLetters++;       
                }
                answerArray[j] = guess;
                remainLetters--;    
                console.log(remainLetters);   
            }  
        } 
    }
}

if (attempt === 3) {
    alert("Game over")
    console.log("It was word " + word);
}

if (remainLetters === 0) {
    alert(answerArray.join(" "));
    alert("Good job! The answer was " + word);
}

