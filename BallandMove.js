let canvas = document.getElementById('myGame');
let context = canvas.getContext('2d');

let x = 7; y = 7;
let dx = 3; dy = 3;
//vẽ quả bóng
let drawBall = function () {
    context.beginPath();
    context.arc(x,y,7,0,Math.PI*2);
    context.fill();
    context.closePath();
};
//vẽ quả bóng chuyển động
function moveBall() {
    context.clearRect(0,0,canvas.width,canvas.height);
    drawBall();
    if (y<0 || y>canvas.height) {
        dy = -dy;
    }
    if (x<0 || x>canvas.width) {
        dx = -dx;
    }
    x += dx;
    y += dy;
    requestAnimationFrame(moveBall);
}
moveBall();