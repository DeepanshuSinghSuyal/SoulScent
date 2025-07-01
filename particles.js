const canvas = document.createElement('canvas');
canvas.id = 'petalCanvas';
canvas.style.position = 'fixed';
canvas.style.top = 0;
canvas.style.left = 0;
canvas.style.zIndex = '-1';
canvas.style.pointerEvents = 'none';
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);

const ctx = canvas.getContext('2d');

class Petal {
  constructor() {
    this.reset();
  }

  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * -canvas.height;
    this.radius = Math.random() * 6 + 4;
    this.speedY = Math.random() * 1 + 0.5;
    this.angle = Math.random() * Math.PI * 2;
    this.angularSpeed = Math.random() * 0.02 + 0.005;
  }

  update() {
    this.y += this.speedY;
    this.angle += this.angularSpeed;
    this.x += Math.sin(this.angle) * 0.5;

    if (this.y > canvas.height) {
      this.reset();
    }
  }

  draw() {
    ctx.beginPath();
    ctx.ellipse(this.x, this.y, this.radius, this.radius / 2, this.angle, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255, 182, 193, 0.6)';
    ctx.fill();
  }
}

const petals = Array.from({ length: 50 }, () => new Petal());

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  petals.forEach((p) => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(animate);
}

animate();

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
