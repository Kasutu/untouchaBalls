export default class GetRandom {
    getRandom(array, qty) {
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
}
