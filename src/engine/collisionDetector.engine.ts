import HitBox from '../interface/hitbox.interface';

export default class CollisionDetector {
  setWorldBoundaries(player: HitBox, worldHeight: number, worldWidth: number) {
    // world bottom border collision
    if (
      player.y + player.height > worldHeight &&
      player.y > worldHeight - player.height
    ) {
      player.y = worldHeight - player.height;
    }

    // world top border collision
    if (player.y - player.height < 0 - player.height) {
      player.y = 0;
    }

    // left side world collision
    if (player.x < 0) {
      player.x = 0;
    }

    // right side world collision
    if (player.x + player.width > worldWidth) {
      player.x = worldWidth - player.width;
    }
  }

  detectCollision(player: HitBox, obj: HitBox): boolean {
    // obj detection
    if (
      (player.y + player.height >= obj.y && obj.y + obj.height >= player.y) ||
      player.x + player.width >= obj.width
    ) {
      return true;
    } else {
      return false;
    }
  }
}
