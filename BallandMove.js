let canvas = document.getElementById('myGame');
let context = canvas.getContext('2d');

let thamsoBall = {
    x: 7,
    y: 7,
    radius: 7,
    dx: 3,
    dy: 3,
};
//vẽ quả bóng
let drawBall = function () {
    context.beginPath();
    context.arc(thamsoBall.x, thamsoBall.y,thamsoBall.radius,0,Math.PI*2);
    context.fill();
    context.closePath();
};
//vẽ quả bóng chuyển động
function moveBall() {
    context.clearRect(0,0,canvas.width,canvas.height);
    drawBall();
    if (y<7 || y>canvas.height-7) {
        dy = -dy;
    }
    if (x<7 || x>canvas.width-7) {
        dx = -dx;
    }
    x += dx;
    y += dy;
    requestAnimationFrame(moveBall);
}
// moveBall();
drawBall();