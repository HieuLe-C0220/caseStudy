let HCN = function(x,y,weight,height) {
    this.x = x;
    this.y = y;
    this.weight = weight;
    this.height = height;
    this.between = 20;
    this.draw = function (context,x,y) {
        context.beginPath();
        context.rect(x, y, this.weight, this.height);
        context.fillStyle = 'green';
        context.fill();
        context.closePath();
    };
    this.setX = function (a) {
        this.x = this.x + a*(this.weight + this.between);
    };
    this.getX = function () {
        return this.x;
    };
    this.setY = function (a) {
        this.y = this.y + a*(this.height + this.between);
    };
    this.getY = function () {
        return this.y;
    }
};





