import Car from './car';
import Engine from './engine';
import Wheel from './wheel';

interface CarFactory {
    makeCar(): Car;
    makeEngine(): Engine;
    makeWheel(): Wheel;
}

export default CarFactory;