import HitBox from '../interface/hitbox.interface';

export default class CollisionDetector {
  worldWidth: number;
  worldHeight: number;

  constructor(worldHeight: number, worldWidth: number) {
    this.worldHeight = worldHeight;
    this.worldWidth = worldWidth;
  }

  detectCollision(player: HitBox, obj: HitBox): boolean {
    // world bottom border collision
    if (
      player.y + player.height >= this.worldHeight &&
      player.y >= this.worldHeight - player.height
    ) {
      player.y = this.worldHeight - player.height;
    }

    // world top border collision
    if (player.y - player.height <= 0) {
      player.y = 0;
    }

    // left side world collision
    if (player.x <= 0) {
      player.x = 0;
    }

    // right side world collision
    if (player.x + player.width >= this.worldWidth) {
      player.x = this.worldWidth - player.width;
    }

    // obj detection
    if (
      (player.y + player.height >= obj.y || obj.y + obj.height >= player.y) ||
      player.x + player.width >= obj.width || obj.x + obj.width >= player.x
    ) {
      return true;
    } else {
      return false;
    }
  }
}
