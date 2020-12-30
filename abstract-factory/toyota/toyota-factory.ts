import CarFactory from '../car-factory';
import ToyotaCar from './toyota-car';
import ToyotaEngine from './toyota-engine';
import ToyotaWheel from './toyota-wheel';

class ToyotaFactory implements CarFactory {
    makeCar() {
        return new ToyotaCar();
    }

    makeEngine() {
        return new ToyotaEngine();
    }

    makeWheel() {
        return new ToyotaWheel();
    }
}

export default ToyotaFactory;