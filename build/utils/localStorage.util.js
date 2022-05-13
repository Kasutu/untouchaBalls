export default class LocalDb {
    set(value) {
        let val = value.toString();
        localStorage.setItem('xp', val);
    }
    get() {
        return Number(localStorage.getItem('xp'));
    }
}
