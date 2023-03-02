var ctx;

canvas = document.querySelector("canvas")

let x = document.getElementById("canvas").style.width;
let y = document.getElementById("canvas").style.height;

    canvas = document.querySelector("canvas")
    ctx = canvas.getContext("2d");
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
    let x = document.getElementById("canvas").style.width / 12
    let y = document.getElementById("canvas").style.height / 12
    for (let i = 0; i < x; i++) {
        for (let n = 0; n < y; n++) {
            ctx.fillText("#", i*12, n*12);
        }
    }
}

redraw();
