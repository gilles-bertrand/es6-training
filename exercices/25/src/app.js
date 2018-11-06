const body = document.body;
const canvas = document.createElement('canvas');
canvas.width = 500;
canvas.height = 500;
canvas.style.border = '1px solid #000000';
const ctx = canvas.getContext('2d');
ctx.save();
ctx.fillStyle = '#FF0000';
ctx.fillRect(0, 0, 100, 30);
ctx.beginPath();
ctx.arc(200, 50, 25, 0, Math.PI * 2, true);
ctx.fill();
ctx.font = 'bold 50px sans-serif';
ctx.fillStyle = '#F0C000';
ctx.fillText('gilles est en forme', 30, 200);
ctx.restore();

body.appendChild(canvas);
