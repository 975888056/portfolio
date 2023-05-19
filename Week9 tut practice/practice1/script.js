"use strict"; // <-- see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode

// Connect the two buttons to their corresponding functions
let playButton = document.getElementById("play-button")
playButton.onclick = play

let stopButton = document.getElementById("stop-button")
stopButton.onclick = stop

// A cyclic pattern of notes to rotate around the three loops.
// notice that you can write flats with a lowercase 'b' and sharps with a '#' after the note letter.
// Octaves are added in each voice (loop) below.
let pitchSequence = ['C', 'E', 'G', 'C', 'Bb', 'D', 'F', 'A']

// A function which returns the first pitch and rotates that pitch to the end of the sequence
function nextPitch() {
    let n = pitchSequence.shift()
    pitchSequence.push(n)
    return n
}

// Set up some shared state for managing the music generation
// loops holds on to each loop which is currently running
let loops = [];

let tenorCounter = 0;
let tenorPitch = 'C3'

let trebleCounter = 0;
let treblePitch = 'C4'

// The mechanism of the music machine.
// This function needs to be called after Tone has been started.
function musicMachine() {

//const synth = new Tone.PolySynth(Tone.Synth).toDestination();
//（这行代码创建了一个多音合成器对象 synth。Tone.PolySynth() 是一个构造函数，
//用于创建多音合成器对象。它接受一个合成器构造函数作为参数，以指定要使用的合成器类型。
//在这里，我们将 Tone.Synth 作为参数传递给 Tone.PolySynth()，
//表示我们要使用 Tone.Synth 作为每个音符的合成器类型。
//toDestination() 方法将多音合成器对象连接到默认的音频输出（你的扬声器）上。）

//const now = Tone.now();
//synth.triggerAttackRelease(["D4", "F4", "A4"], "4n", now);
//synth.triggerAttackRelease(["C4", "E4", "G4"], "4n", now + 0.5);
//synth.triggerAttackRelease(["E4", "G4", "B4"], "4n", now + 1);
//synth.triggerAttackRelease(["D4", "F4", "A4"], "4n", now + 1.5);


// Establish the signal path and synthesiser to use for the audio
    // Create a gain node so that we can turn down the signal. Otherwise, we'll introduce digital distortion by clipping on the way out of the computer.
    const gainNode = new Tone.Gain(0.5).toDestination();
    //create a polyphonic synth and connect it to the main output (your speakers)
    const synth = new Tone.PolySynth(Tone.Synth).connect(gainNode)

    // //play a middle 'C' for the duration of an 8th note
    // synth.triggerAttackRelease("C4", "8n")

    // Create a loop for each of the three independent voices.

    // Bass
    loops[0] = new Tone.Loop(time => {
        // Get the note and add the octave to the note, e.g., "C" becomes "C2"
        let pitch = nextPitch() + '2'
        // Trigger the pitch for a quaver duration and at the time the loop runs (e.g., now)
        synth.triggerAttackRelease(pitch, "8n", time);
    }, "4n").start(0);

    Tone.Transport.start()

    //Tenor
    loops[1] = new Tone.Loop(time => {
        // Play 2 of three time the loop runs
        if (tenorCounter++ % 3 != 0) {
            synth.triggerAttackRelease(tenorPitch, "4t", time);
        }
        else {
            // Change note on the rests
            tenorPitch = nextPitch() + '3'
        }
    }, "4t").start(0);
     // Treble
     loops[2] = new Tone.Loop(time => {
        if (trebleCounter++ % 2 == 0) {
            synth.triggerAttackRelease(treblePitch, "4t", time);
        }
        else {
            // Change note on the rests
            treblePitch = nextPitch() + '4'
        }
    }, "8n").start(0);

    
}

//
// Event handler functions
//

// Actions to take when the play button is pressed
function play() {

    // Start Tone and then call the musicMachine function once it is ready to go.
    //  (Remember that an interaction event is required to start it up!)
    Tone.start().then(musicMachine);
}

// Actions to take when the stop button is pressed.
function stop() {
    //stop all loops
    loops.forEach( loop =>loop.stop())
    Tone.Transport.stop()

}