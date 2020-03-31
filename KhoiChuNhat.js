let thamsoHCN = {
    weight: 40,
    height: 15,
    marginLeft: 15,
    marginTop: 30,
    marginBetween: 20};
let khoiHCN = function() {
    this.x = thamsoHCN.marginLeft;
    this.y = thamsoHCN.marginTop;
    this.weight = thamsoHCN.weight;
    this.height = thamsoHCN.height;
    this.between = thamsoHCN.marginBetween;
    this.draw = function () {
        for (i=0;i<7;i++) {
            for (j=0;j<13;j++) {
                context.beginPath();
                context.rect(
                    this.x + j*(this.weight+this.between),
                    this.y + i*(this.height+this.between),
                    this.weight,
                    this.height);
                context.fillStyle = 'green';
                context.fill();
                context.closePath();
            }
        }
    }
};
let HCN = new khoiHCN(thamsoHCN);
HCN.draw();




