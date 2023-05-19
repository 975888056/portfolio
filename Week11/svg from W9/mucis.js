"use strict"; // <-- see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode

// Connect the two buttons to their corresponding functions
let playButton = document.getElementById("play-button")
playButton.onclick = play

let stopButton = document.getElementById("stop-button")
stopButton.onclick = stop

let notes = ['D4', 'C4', 'B3', 'A3', 'B3', 'C4', 'D4', 'D4']

function nextPitch() {
  let n = notes.shift()
  notes.push(n)
  return n
}

let loops = []

function musicMachine() {
  const gainNode = new Tone.Gain(0.5).toDestination()
  const synth = new Tone.PolySynth(Tone.Synth).connect(gainNode)

  loops[0] = new Tone.Loop(time => {
    let pitch = nextPitch()
    synth.triggerAttackRelease(pitch, "4n", time)
  }, "4n").start(0)

  Tone.Transport.start()
}

//play
function play() {
Tone.start().then(musicMachine);
}

// stop
function stop() {
    loops.forEach( loop =>loop.stop())

    Tone.Transport.stop()
}