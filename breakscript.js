//compiles all breaks into a array to be selected from
let breakarr = [new Audio('breaks/break (1).wav'), new Audio('breaks/break (2).wav'), new Audio('breaks/break (3).wav'), new Audio('breaks/break (4).wav'), new Audio('breaks/break (5).wav'), new Audio('breaks/break (6).wav'), new Audio('breaks/break (7).wav'), new Audio('breaks/break (8).wav'), new Audio('breaks/break (9).wav'), new Audio('breaks/break (10).wav'), new Audio('breaks/break (11).wav'), new Audio('breaks/break (12).wav'), new Audio('breaks/break (13).wav'), new Audio('breaks/break (14).wav')];
let lastBreak = 0;

//old playAudio function which relied on Element
function playAudio() { 
    var x = document.getElementById("myAudio");
    x.play();
} 

//new playAudio function which chooses sound from array randomly
function playAudioNEW() { 
    let random = Math.floor(Math.random() * breakarr.length);
    breakarr[random].play();
    lastBreak = random;
}

//Pause and reset Time for all Breaks
function pauseAudio() { 
    for (i = 0; i < breakarr.length; i++) {
        breakarr[i].pause();
        breakarr[i].currentTime = 0;
    }
}

function getRandInt(max) {
    return Math.floor(Math.random() * max);
}

