export default class Snake {
  constructor(direction, ...body) {
    this.body = body;
    this.direction = direction;
    this.ateApple = false;
  }

  ramp() {
    const nextPosition = this.body[0].slice();
    switch (this.direction) {
      case 'left':
        nextPosition[0] -= 1;
        break;
      case 'right':
        nextPosition[0] += 1;
        break;
      case 'down':
        nextPosition[1] += 1;
        break;
      case 'up':
        nextPosition[1] -= 1;
        break;
      default:
        throw new Error('Invalid Direction');
    }
    this.body.unshift(nextPosition);
    if (!this.ateApple) this.body.pop();
    else this.ateApple = false;
  }

  setDirection(newDirection) {
    let allowedDirections;
    switch (this.direction) {
      case 'left':
      case 'right':
        allowedDirections = ['up', 'down'];
        break;
      case 'up':
      case 'down':
        allowedDirections = ['left', 'right'];
        break;
      default:
        throw new Error('invalid direction');
    }
    if (allowedDirections.includes(newDirection)) {
      this.direction = newDirection;
    }
  }

  isEatingApple(appleToEat) {
    const head = this.body[0];
    if (head[0] === appleToEat.position[0] && head[1] === appleToEat.position[1]) return true;
  }

  checkCollision(widthInBlocks, heightInBlocks) {
    let wallCollision = false;
    let snakeCollision = false;
    const [head, ...rest] = this.body;
    const [snakeX, snakeY] = head;
    const minx = 0;
    const minY = 0;
    const maxX = widthInBlocks - 1;
    const maxY = heightInBlocks - 1;
    const isNotBetweenHorizontalWalls = snakeX < minx || snakeX > maxX;
    const isNotBetweenVerticalWalls = snakeY < minY || snakeY > maxY;
    if (isNotBetweenHorizontalWalls || isNotBetweenVerticalWalls) {
      wallCollision = true;
    }
    rest.map(block => {
      if (snakeX === block[0] && snakeY === block[1]) {
        snakeCollision = true;
      }
    });
    return wallCollision || snakeCollision;
  }
}
