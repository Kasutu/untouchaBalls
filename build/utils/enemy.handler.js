import Enemy from '../class/child/enemy.child.js';
import getRandom, { getRandomNumberBetween } from './getRandom.util.js';
export function enemyHandler(arr, playerInBattle) {
    const enemyAttrib = [
        {
            name: 'enemy1',
            hp: getRandomNumberBetween(1, 50),
            damage: getRandom([0.09, 0.1, 0.15, 0.2, 0.25]),
            x: 50,
            y: 50,
        },
        {
            name: 'enemy2',
            hp: getRandomNumberBetween(1, 50),
            damage: getRandom([0.09, 0.1, 0.15, 0.2, 0.25]),
            x: 200,
            y: 50,
        },
        {
            name: 'enemy3',
            hp: getRandomNumberBetween(1, 50),
            damage: getRandom([0.09, 0.1, 0.15, 0.2, 0.25]),
            x: 350,
            y: 50,
        },
    ];
    enemyAttrib.forEach((e) => {
        const tempEnemy = new Enemy(e.name, e.hp, e.damage);
        tempEnemy.x = e.x;
        tempEnemy.y = e.y;
        tempEnemy.height = 100;
        tempEnemy.width = 100;
        arr.push(tempEnemy);
    });
    arr.push(playerInBattle);
}
