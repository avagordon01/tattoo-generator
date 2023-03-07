let canvas = document.querySelector("canvas")
let ctx = canvas.getContext("2d");
ctx.font = "12px monospace";

function resizeWidth(value) {
    document.getElementById("canvas").style.width=value;
    document.getElementById("canvas").width=value;
    redraw();
}

function resizeHeight(value) {
    document.getElementById("canvas").style.height=value;
    document.getElementById("canvas").height=value;
    redraw();
}


function redraw() {
    let x = document.getElementById("canvas").width / 12
    console.log(x);
    let y = document.getElementById("canvas").height / 12
    console.log(y);
    for (let i = 0; i < x; i++) {
        for (let n = 0; n < y; n++) {
            ctx.fillText("#", i*12, n*12);
        }
    }
}

redraw();

const fileUpload = document.querySelector('input[type=file]');
const file = fileUpload.files[0];
const img = new Image();
img.addEventListener(
  "load",
  () => {
    console.log("loaded")
  },
  false
);
img.src = file;

function updateImage() {
    canvas.drawImage();
}