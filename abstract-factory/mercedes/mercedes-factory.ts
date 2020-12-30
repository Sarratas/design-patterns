import CarFactory from '../car-factory';
import MercedesCar from './mercedes-car';
import MercedesEngine from './mercedes-engine';
import MercedesWheel from './mercedes-wheel';

class MercedesFactory implements CarFactory {
    makeCar() {
        return new MercedesCar();
    }

    makeEngine() {
        return new MercedesEngine();
    }

    makeWheel() {
        return new MercedesWheel();
    }
}

export default MercedesFactory;