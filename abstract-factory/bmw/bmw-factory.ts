import CarFactory from '../car-factory';
import BMWCar from './bmw-car';
import BMWWheel from './bmw-wheel';
import BMWEngine from './bmw-engine';

class BMWFactory implements CarFactory {
    makeCar() {
        return new BMWCar();
    }

    makeEngine() {
        return new BMWEngine();
    }

    makeWheel() {
        return new BMWWheel();
    }
}

export default BMWFactory;