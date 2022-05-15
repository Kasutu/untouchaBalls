export default class CollisionDetector {
    setWorldBoundaries(player, worldHeight, worldWidth) {
        // world bottom border collision
        if (player.y + player.height > worldHeight &&
            player.y > worldHeight - player.height) {
            player.y = worldHeight - player.height;
        }
        // world top border collision
        if (player.y - player.height < 0 - player.height / 2) {
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
    detectCollision(player, obj) {
        // obj detection
        if ((player.y + player.height >= obj.y && obj.y + obj.height >= player.y) ||
            player.x + player.width >= obj.width) {
            return true;
        }
        else {
            return false;
        }
    }
}
