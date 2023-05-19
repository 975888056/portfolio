// 获取画布
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// 获取窗口宽度和高度
const width = window.innerWidth;
const height = window.innerHeight;

// 设置画布大小
canvas.width = width;
canvas.height = height;

// 创建圆形对象
class Circle {
  constructor(x, y, radius, color, vx, vy) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.vx = vx;
    this.vy = vy;
  }

  // 绘制圆形
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.fillStyle = this.color;
    ctx.fill();
  }

  // 更新圆形位置和速度
  update() {
    this.vy += 0.5;
    this.x += this.vx;
    this.y += this.vy;
  }
}

// 生成随机整数
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// 生成随机颜色
function randomColor() {
  return `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;
}

// 存储圆形对象的数组
let circles = [];

// 每隔一段时间生成新的圆形对象
setInterval(() => {
  // 随机生成圆形的位置、半径、颜色和速度
  const x = width / 2;
  const y = 0;
  const radius = randomInt(10, 30);
  const color = randomColor();
  const vx = randomInt(-5, 5);
  const vy = randomInt(-10, -5);

  // 创建新的圆形对象并将其添加到数组中
  const circle = new Circle(x, y, radius, color, vx, vy);
  circles.push(circle);
}, 1000);

// 动画循环
function animate() {
  // 清空画布
  ctx.clearRect(0, 0, width, height);

  // 遍历圆形对象数组并绘制和更新每个圆形
  circles.forEach((circle, index) => {
    circle.draw();
    circle.update();

    // 如果圆形超出画布下方，则从数组中删除该圆形
    if (circle.y > height + circle.radius) {
      circles.splice(index, 1);
    }
  });

  // 每帧更新动画
  requestAnimationFrame(animate);
}

animate();
