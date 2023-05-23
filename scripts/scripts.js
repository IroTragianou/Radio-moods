// Get the button elements
let happyButton = document.querySelector(".happy");
let inLoveButton = document.querySelector(".inlove");
let badassButton = document.querySelector(".badass");

// Define the audio objects
let happyAudio = new Audio("audios/Dontstopmenow.mp3");
let inLoveAudio = new Audio("audios/Luce-Dufault-Damn-Your-Eyes.mp3");
let badassAudio = new Audio("audios/watch-me-bleed.mp3");

// Define variables to store playback positions
let happyPlaybackPosition = 0;
let inLovePlaybackPosition = 0;
let badassPlaybackPosition = 0;

// Define the functions to play or pause the audio
function toggleHappyAudio() {
  if (!happyAudio.paused || !inLoveAudio.paused || !badassAudio.paused) {
    inLoveAudio.pause();
    badassAudio.pause();
    removePlayingClass();
  }

  if (happyAudio.paused) {
    happyAudio.currentTime = happyPlaybackPosition;
    happyAudio.play();
    happyButton.classList.add("playing");
  } else {
    happyPlaybackPosition = happyAudio.currentTime;
    happyAudio.pause();
    happyButton.classList.remove("playing");
  }
}

function toggleInLoveAudio() {
  if (!inLoveAudio.paused || !happyAudio.paused || !badassAudio.paused) {
    happyAudio.pause();
    badassAudio.pause();
    removePlayingClass();
  }

  if (inLoveAudio.paused) {
    inLoveAudio.currentTime = inLovePlaybackPosition;
    inLoveAudio.play();
    inLoveButton.classList.add("playing");
  } else {
    inLovePlaybackPosition = inLoveAudio.currentTime;
    inLoveAudio.pause();
    inLoveButton.classList.remove("playing");
  }
}

function toggleBadassAudio() {
  if (!badassAudio.paused || !happyAudio.paused || !inLoveAudio.paused) {
    happyAudio.pause();
    inLoveAudio.pause();
    removePlayingClass();
  }

  if (badassAudio.paused) {
    badassAudio.currentTime = badassPlaybackPosition;
    badassAudio.play();
    badassButton.classList.add("playing");
  } else {
    badassPlaybackPosition = badassAudio.currentTime;
    badassAudio.pause();
    badassButton.classList.remove("playing");
  }
}

function removePlayingClass() {
  happyButton.classList.remove("playing");
  inLoveButton.classList.remove("playing");
  badassButton.classList.remove("playing");
}

// Attach click event listeners to the buttons
happyButton.addEventListener("click", toggleHappyAudio);
inLoveButton.addEventListener("click", toggleInLoveAudio);
badassButton.addEventListener("click", toggleBadassAudio);
