const banner = document.querySelector(".banner");
const canvas = document.getElementById("dotscanvas");
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;
const ctx = canvas.getContext("2d");

let dots = [];
let arrayColor = [
  "#E6E6FA",
  "#00FFFF",
  "#8F00FF",
  "#A020F0",
  "#FF0000",
  "#0000FF",
  "#FFFF00",
  "#964B00",
];
for (let i = 0; i < 50; i++) {
  dots.push({
    x: Math.floor(Math.random() * canvas.width),
    y: Math.floor(Math.random() * canvas.height),
    size: Math.random() * 5 + 3,
    color: arrayColor[Math.floor(Math.random() * 8)],
  });
}
console.log(dots);
const drawDots = () => {
  dots.forEach((dot) => {
    ctx.fillStyle = dot.color;
    ctx.beginPath();
    ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
    ctx.fill();
  });
};
drawDots();
document.addEventListener("mousemove", function (event) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawDots();
  const positionX = event.clientX;
  const positionY = event.clientY;
  // console.log(`position-X: ${positionX} position-Y: ${positionY}`);
  dots.forEach((e) => {
    let dis = Math.sqrt((e.x - positionX) ** 2 + (e.y - positionY) ** 2);
    if (dis < 300) {
      ctx.strokeStyle = e.color;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(e.x, e.y);
      ctx.lineTo(positionX, positionY);
      ctx.stroke();
    }
  });
});
document.addEventListener("mouseout", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawDots();
});
