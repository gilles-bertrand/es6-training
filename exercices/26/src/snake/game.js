import Snake from './snake';
import Drawing from './drawing';
import Apple from './apple';

/* global document */
export default class Game {
  constructor(canvasWidth = 900, canvasHeight = 600) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.blockSize = 30;
    this.widthInBlocks = this.canvasWidth / this.blockSize;
    this.heightInBlocks = this.canvasHeight / this.blockSize;
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.centreX = this.canvasWidth / 2;
    this.centreY = this.canvasHeight / 2;
    this.timeout = null;
    this.delay = 100;
    this.snakee = null;
    this.applee = null;
    this.score = 0;
  }

  init() {
    this.canvas.width = this.canvasWidth;
    this.canvas.height = this.canvasHeight;
    this.canvas.style.border = '30px solid gray';
    this.canvas.style.margin = '50px auto';
    this.canvas.style.display = 'block';
    this.canvas.style.backgroundColor = '#ddd';
    document.body.appendChild(this.canvas);
  }

  launch() {
    this.snakee = new Snake('right', [6, 4], [5, 4], [4, 4], [3, 4], [2, 4]);
    this.applee = new Apple();
    this.score = 0;
    this.delay = 300;
    clearTimeout(this.timeOut);
    this.tick();
  }

  tick() {
    this.snakee.ramp();
    if (this.snakee.checkCollision(this.widthInBlocks, this.heightInBlocks)) {
      Drawing.gameOver(this.ctx, this.centreX, this.centreY);
      clearTimeout(this.timeout);
    } else {
      if (this.snakee.isEatingApple(this.applee)) {
        this.score += 1;
        this.snakee.ateApple = true;
        do {
          this.applee.setNewPosition(this.widthInBlocks, this.heightInBlocks);
        } while (this.applee.isOnSnake(this.snakee));
        if (this.score % 5 === 0) {
          this.speedUp();
        }
      }
    }

    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    Drawing.drawSnake(this.ctx, this.blockSize, this.snakee);
    Drawing.drawApple(this.ctx, this.blockSize, this.applee);
    Drawing.drawScore(this.ctx, this.centreX, this.centreY, this.score);
    this.timeOut = setTimeout(this.tick.bind(this), this.delay);
  }

  speedUp() {
    this.delay /= 2;
  }
}
