class GuessingGame {
    constructor() {

    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.hulf = Math.ceil((this.min + this.max) / 2);
        return this.hulf;
    }

    lower() {
        this.max = this.hulf;
    }

    greater() {
        this.min = this.hulf;
    }
}

module.exports = GuessingGame;