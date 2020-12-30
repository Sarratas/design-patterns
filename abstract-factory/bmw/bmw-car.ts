import Car from '../car';

class BMWCar extends Car {
    getPrice() {
        return 200_000;
    }

    getName() {
        return 'BMW Car';
    }

    getMaxSpeed() {
        return 200;
    }
}

export default BMWCar;