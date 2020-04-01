//tạo lớp quả bóng
let Ball = function (x,y,radius,dx,dy) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.dx = dx; //Gia tốc theo phương x
    this.dy = dy; //Gia tốc theo phương y
    this.draw = function() { //vẽ quả bóng
        context.beginPath();
        context.arc(this.x, this.y,this.radius,0,Math.PI*2);
        context.fillStyle = 'black';
        context.fill();
        context.closePath();
    };
    // this.setBall = function () {
    //     this.x = this.x +this.dx;
    //     this.y = this.y + this.dy;
    // };
        let seft = this;
    this.moveBall = function () { //vẽ quả bóng chuyển động
        this.x += this.dx;
        this.y += this.dy;
        context.clearRect(0,0,canvas.width,canvas.height);
        seft.draw();
        if (this.y<this.radius || this.y>canvas.height-this.radius) {
            this.dy = -this.dy;
        }
        if (this.x<this.radius || this.x>canvas.width-this.radius) {
            this.dx = -this.dx;
        }
    }
};
