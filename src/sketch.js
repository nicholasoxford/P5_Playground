/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
<<<<<<< HEAD

let style
let video
const isTransferring = false
let resultImg
=======
let theShader
// this variable will hold our webcam video
let cam

function preload () {
  // load the shader
  theShader = loadShader('assets/webcam.vert', 'assets/webcam.frag')
}
>>>>>>> parent of 8f80c2e... webcam

function setup () {
  createCanvas(320, 240)

<<<<<<< HEAD
  video = createCapture(VIDEO, videoHide)

  // The results image from the style transfer
  // resultImg = createImg('')
  // resultImg.hide()
=======
  cam = createCapture(VIDEO)
  cam.size(710, 400)

  cam.hide()
}
>>>>>>> parent of 8f80c2e... webcam

  // // The button to start and stop the transfer process
  // select('#startStop').mousePressed(startStop)

  // Create a new Style Transfer method with a defined style.
  // We give the video as the second argument
  style = ml5.styleTransfer('models/udnie', video, modelLoaded)
}
function videoHide () {
  video.hide()
}
// function draw () {
//   // Switch between showing the raw camera or the style
//   if (isTransferring) {
//     image(resultImg, 0, 0, 320, 240)
//   } else {
//     image(video, 0, 0, 320, 240)
//   }
// }

// A function to call when the model has been loaded.
function modelLoaded () {
  select('#status').html('Model Loaded')
}

// // Start and stop the transfer process
// function startStop () {
//   if (isTransferring) {
//     select('#startStop').html('Start')
//   } else {
//     select('#startStop').html('Stop')
//     // Make a transfer using the video
//     style.transfer(gotResult)
//   }
//   isTransferring = !isTransferring
// }

// // When we get the results, update the result image src
// function gotResult (err, img) {
//   resultImg.attribute('src', img.src)
//   if (isTransferring) {
//     style.transfer(gotResult)
//   } else { console.log(err) }
// }
