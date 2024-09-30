const audioContext = new AudioContext();

// get the audio element
const audioElement = document.querySelector("audio");

// pass it into the audio context
const track = audioContext.createMediaElementSource(audioElement);

let audioCtx = new window.AudioContext();

async function createReverb() {
  let convolver = audioCtx.createConvolver();

  // load impulse response from file
  let response = await fetch("C:\Users\User\Downloads\audio for the web\hm-tsyn-inspire-mix.mp3");
  let arraybuffer = await response.arrayBuffer();
  convolver.buffer = await audioCtx.decodeAudioData(arraybuffer);

  return convolver;
}

// …

let reverb = await createReverb();

// someOtherAudioNode -> reverb -> destination
someOtherAudioNode.connect(reverb);
reverb.connect(audioCtx.destination);
