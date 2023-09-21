const keyboardKeys = document.querySelectorAll(".piano-keys .key"),
volumeSlider = document.querySelector(".volume-slider input"),
keysCheckbox = document.querySelector(".keys-checkbox input");

let allKeys = [],
audio = new Audio("tunes/a.wav"); // by default, audio src will be the "a" tune

const  playTune = (key) => {
    audio.src = `tunes/${key}.wav` // passing audio src based on keys pressed
    audio.play(); // play audio
    

    const clickedKey = document.querySelector(`[data-key="${key}"]`) // getting clicked key elements
    clickedKey.classList.add("active"); //add active class to the clicked key element
    setTimeout(() => { // removing active class after 150 ms from the clicked key element
        clickedKey.classList.remove("active");
    }, 150);
};

keyboardKeys.forEach(key => {
    allKeys.push(key.dataset.key); // addig data-key value to the allKeys array
    // calling playTune function with passing data-key value as an argument
    key.addEventListener("click", () => playTune(key.dataset.key));
    console.log(key.dataset.key)
});

const handleVolume = (e) => {
    audio.volume = e.target.value; // passing the range slider value as an audio volume
}

const showHideKeys = () => {
    //toggle hides class from each key on the checkbox click
    keyboardKeys.forEach( key => key.classList.toggle("hide"))
}

const pressedKey = (e) => {
    // if the pressed key is in the allKeys array, only call the playTune funtion
    if(allKeys.includes(e.key)) playTune(e.key);
};

keysCheckbox.addEventListener("click", showHideKeys);
volumeSlider.addEventListener("input", handleVolume);
document.addEventListener("keydown", pressedKey);