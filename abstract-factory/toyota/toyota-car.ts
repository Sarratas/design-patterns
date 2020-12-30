import Car from '../car';

class ToyotaCar extends Car {
    getPrice() {
        return 100_000;
    }

    getName() {
        return 'Toyota Car';
    }

    getMaxSpeed() {
        return 140;
    }
}

export default ToyotaCar;