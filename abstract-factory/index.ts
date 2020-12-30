
import Car from './car';
import Engine from './engine';
import Wheel from './wheel';
import CarFactory from './car-factory';
import BMWFactory from './bmw/bmw-factory';
import MercedesFactory from './mercedes/mercedes-factory';
import ToyotaFactory from './toyota/toyota-factory';


const factories: CarFactory[] = [];
factories.push(new ToyotaFactory());
factories.push(new MercedesFactory());
factories.push(new BMWFactory());

const cars: Car[] = [];
for (const factory of factories) {
    cars.push(factory.makeCar());
}

const engines: Engine[] = [];
for (const factory of factories) {
    engines.push(factory.makeEngine());
}

const wheels: Wheel[] = [];
for (const factory of factories) {
    wheels.push(factory.makeWheel());
}

console.log(`Factories created ${wheels.length} different wheels and ${engines.length} different engines for ${cars.length} different cars!`);