let canvas = document.querySelector('.captcha');
let val = Math.floor(1000 + Math.random() * 9000);
let width = canvas.width;
let height = canvas.height;
let ctx = canvas.getContext("2d");

let numSpots = 128;
let maxSize = 18;
let minSize = 3;
let colors = ["aqua",  "black", "blue",  "fuchsia",
    "green", "cyan",  "lime",  "maroon",
    "navy",  "olive", "purple","red",
    "silver","teal",  "yellow","azure",
    "gold",  "bisque","pink",  "orange"];

let numColors = colors.length;

let genCaptcha = (spots, lines, stroke) => {
    //Spots
    if (spots && spots !== 0){
        numSpots = spots;
    }
    for (let n = 0; n < numSpots; n++){
        let X = Math.random()*width;
        let Y = Math.random()*height;
        let size = minSize+(Math.random()*(maxSize-minSize));
        let colorIndex = Math.random()*(numColors-1);
        colorIndex = Math.round(colorIndex);
        let color = colors[colorIndex];

        makeSpots(ctx, X, Y, size, color);
    }
    if (lines > 0){
        makeLines();
    }
    //Numbers
    let gradient = ctx.createLinearGradient(0, height, 0, 0);
    let cI = Math.random()*(numColors-1);
    cI = Math.round(cI);
    gradient.addColorStop("0", colors[cI]);
    gradient.addColorStop("1", "blue");
    ctx.clearRect("2px", "2px", width, height);
    ctx.strokeStyle = "black";
    ctx.font = "bold 54px serif";

    let numX = 50, numY = 100;
    let sNumber = val.toString();
    for (let i = 0; i <= 4; i++){
        numX += 30;
        numY = Math.floor(Math.random() * 75 + 50);
        let cI = Math.random()*(numColors-1);
        cI = Math.round(cI);
        let color = colors[cI];
        ctx.fillStyle = color;
        ctx.fillText(sNumber.charAt(i), numX + 30, numY);
        if (stroke){
            if (typeof stroke === "string"){
                for (let i = 0; i < numColors; i++){
                    if (stroke == colors[i]){
                        ctx.strokeStyle = colors[i];
                    }
                }
            }
            ctx.strokeText(sNumber.charAt(i), numX + 33, numY);
        }
  
    }
    if (lines === "front"){
        makeLines();
    }

    
    //PNG Data
        let base64 = canvas.toDataURL();
        return base64;
}
//Makespots
let makeSpots = (ctx, X, Y, size, color) => {
    ctx.shadowColor = "#222";
    ctx.shadowOffsetX = 1;
    ctx.shadowOffsetY = 1;
    ctx.shadowBlur = 7;

    let startAngle        = (Math.PI/180)*0;
    let endAngle          = (Math.PI/180)*360;

    ctx.beginPath();
    ctx.arc(X, Y, size, startAngle, endAngle, false);
    ctx.fillStyle = color;
    ctx.fill();
}

//Makelines
let makeLines = () => {
    let X = 0, Y = 0;
    let i;
    for (i = 0; i < numColors; i++){
        ctx.beginPath();
        ctx.moveTo(X, Y);
        X = Math.floor(Math.random() * width);
        Y = Math.floor(Math.random() * height);
        let colorIndex = Math.random()*(numColors-1);
        colorIndex = Math.round(colorIndex);
        let color = colors[colorIndex];
        ctx.strokeStyle = color;
        ctx.lineTo(X, Y);
        ctx.stroke();
    }
}
