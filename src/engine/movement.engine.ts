import Directions from '../interface/directions.interface';

class Movement {
  protected up: boolean = false;
  protected down: boolean = false;
  protected left: boolean = false;
  protected right: boolean = false;

  public listen(): void {
    addEventListener('keydown', this.inputListener);
    addEventListener('keyup', this.inputListener);
  }

  private inputListener(event: KeyboardEvent) {
    let inputState = event.type === 'keydown' ? true : false;

    switch (true) {
      case event.key === 'ArrowUp' ||
        event.keyCode === 87 ||
        event.keyCode === 32: // up arrow key
        this.up = inputState;
        break;
      case event.key === 'ArrowLeft' || event.keyCode === 65: // left arrow key
        this.left = inputState;
        break;
      case event.key === 'ArrowRight' || event.keyCode === 68: // right arrow key
        this.right = inputState;
        break;
      case event.key === 'down' || event.keyCode === 83:
        this.down = inputState;
    }
  }

  public get(): Directions {
    return {
      up: this.up,
      down: this.down,
      left: this.left,
      right: this.right,
    };
  }
}
