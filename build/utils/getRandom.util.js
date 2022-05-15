export default function getRandom(array, qty) {
    if (qty !== undefined) {
        const arr = [];
        for (let i = 0; i < qty; i++) {
            arr.push(array[Math.floor(Math.random() * array.length)]);
        }
        return arr;
    }
    else {
        return array[Math.floor(Math.random() * array.length)];
    }
}
export function getRandomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
