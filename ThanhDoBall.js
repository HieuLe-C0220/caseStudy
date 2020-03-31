let thamsoThanh = {
    marginLeft: 0,
    marginTop: canvas.height - 10,
    weight: 70,
    height: 10,
};
let ThanhDoBall = function () {
    context.beginPath();
    context.rect(
        thamsoThanh.marginLeft,
        thamsoThanh.marginTop,
        thamsoThanh.weight,
        thamsoThanh.height);
    context.fillStyle = 'gray';
    context.fill();
    context.closePath();
};
ThanhDoBall();
