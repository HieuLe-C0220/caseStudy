
let ball = new Ball(7,7,7,3,3);
let gach = new HCN(15,30,40,15);
let thanhDo = new ThanhDoBall();
//vẽ các khối gạch
function drawKhoigach() {
    for (i=0;i<7;i++) {
        for (j=0;j<13;j++) {
            gach.setX(j);
            gach.setY(i);
            gach.draw(context,gach.getX(),gach.getY());
        }
    }
}
//điều khiển bằng phím
function keyDown(event) {
    switch (event.keyCode) {
        case 37:
            thanhDo.moveLeft();
            break;
        case 39:
            thanhDo.moveRight();
            break;
    }
}
document.addEventListener('keydown',keyDown);
function drawBall() {
    ball.moveBall();
}

function loadGame() {
    drawBall();
    thanhDo.drawThanh();
    drawKhoigach();
    requestAnimationFrame(loadGame);
}