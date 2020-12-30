import Car from '../car';

class MercedesCar extends Car {
    getPrice() {
        return 140_000;
    }

    getName() {
        return 'Mercedes Car';
    }

    getMaxSpeed() {
        return 130;
    }
}

export default MercedesCar;