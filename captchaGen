let genCaptcha = val => {
    let canvas = document.querySelector('#captcha');
    let width = canvas.width;
    let height = canvas.height;
    let ctx = canvas.getContext("2d");

    let gradient = ctx.createLinearGradient(0, 0, width, 0);
    gradient.addColorStop("0", "green");
    gradient.addColorStop("1.0", "#06c");

    ctx.clearRect("2px", "2px", width, height);

    ctx.strokeStyle = gradient;
    ctx.font = "bold 48px serif";
    ctx.strokeText(val, 100, 100);
    ctx.fillStyle = gradient;
    ctx.fillText(val, 100, 100);

    let X = 0, Y = 0;
    let i;
    for (i = 0; i < 65; i++){
        ctx.beginPath();
        ctx.moveTo(X, Y);

        if (i > 62 || i < 6){
            ctx.strokeStyle = "orange";
        } else if (i % 2 == 0){
            ctx.strokeStyle = "magenta";
        } else {
            ctx.strokeStyle ="lightgreen";
        }

        X = Math.floor(Math.random() * width);
        Y = Math.floor(Math.random() * height);
        ctx.lineTo(X, Y);
        ctx.stroke();
    }

}
