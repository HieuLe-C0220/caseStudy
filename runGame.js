
let ball = new Ball(8,3,3);
let gach = new Gach(20,40,60,20);
let thanhDo = new ThanhDoBall();
//vẽ các khối gạch
let toadoGach = [];
for (i=0;i<5;i++) {
    toadoGach[i] = [];
    for (j=0;j<7;j++) {
        gach.setX(j);
        gach.setY(i);
        toadoGach[i].push({
            x: gach.getX(),
            y: gach.getY(),
            statusgach: false
        });
    }
}
function drawKhoigach() {
    for (i=0;i<5;i++) {
        for (j=0;j<7;j++) {
            if (!toadoGach[i][j].statusgach) {
                gach.draw(context,toadoGach[i][j].x,toadoGach[i][j].y);
            }
        }
    }
}
//bóng đập gạch
function BallvaGach() {
    for (i=0;i<5;i++) {
        for (j=0;j<7;j++) {
            if (!toadoGach[i][j].statusgach) {
                if (ball.x + ball.radius >= toadoGach[i][j].x && ball.x + ball.radius <= toadoGach[i][j].x + gach.width &&
                    ball.y + ball.radius >= toadoGach[i][j].y && ball.y - ball.radius <= toadoGach[i][j].y + gach.height) {
                    ball.dy = -ball.dy;
                    toadoGach[i][j].statusgach = true;
                }
            }
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
let checkGame = false;
function endGame(ball) {
    if (ball.y + ball.radius >= canvas.height) {
        checkGame = true;
    }
}
document.addEventListener('keydown',keyDown);
function loadGame() {
    if (!checkGame) {
        context.clearRect(0,0,canvas.width,canvas.height);
        ball.draw();
        ball.moveBall();
        thanhDo.drawThanh();
        thanhDo.doBall(ball);
        // drawKhoigach();
        // BallvaGach();
        endGame(ball);
        requestAnimationFrame(loadGame);
    } else {
        alert('Game Over!')
    }
}