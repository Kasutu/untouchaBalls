import Directions from "../interface/directions.interface";

class Joystick {
  protected up: boolean = false;
  protected down: boolean = false;
  protected left: boolean = false;
  protected right: boolean = false;

  public listen(): void {
    addEventListener('keydown', this.inputListener);
    addEventListener('keyup', this.inputListener);
  }

  public inputListener(event: KeyboardEvent) {
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
