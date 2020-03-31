let drawHCN = function () {

    for (i=0;i<7;i++) {
        for (j=0;j<12;j++) {
            context.beginPath();
            context.rect(
            15 + j*(45+20),
            40 + i*(15+15),
            45,
            15);
            context.fillStyle = 'green';
            context.fill();
            context.closePath();
        }
    }
};
drawHCN();

