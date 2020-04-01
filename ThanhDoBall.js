let thamsoThanh = {
    marginLeft: 0,
    marginTop: canvas.height - 10,
    weight: 70,
    height: 10,
    speed: 15,
};
let ThanhDoBall = function () {
    this.x = thamsoThanh.marginLeft;
    this.y = thamsoThanh.marginTop;
    this.w = thamsoThanh.weight;
    this.h = thamsoThanh.height;
    this.speed = thamsoThanh.speed;
    this.isLeft = false;
    this.isRight = false;
    this.drawThanh = function() { //vẽ thanh đỡ
        context.beginPath();
        context.rect(this.x, this.y, this.w, this.h);
        context.fillStyle = 'gray';
        context.fill();
        context.closePath();
    };
    this.moveLeft = function () { //thanh di chuyển sang trái
        this.x -= this.speed;
        if (this.x<0) {
            this.x = 0;
        }
    };
    this.moveRight = function () { //thanh di chuyen sang phải
        this.x += this.speed;
        if (this.x> canvas.width - this.w) {
            this.x= canvas.width - this.w;
        }
    };
};


