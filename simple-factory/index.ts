import VegetableFactory from './vegetable-factory';

const vegetableFactory = new VegetableFactory();

const vegetableNames = ['potato', 'potato', 'tomato', 'carrot', 'tomato', 'potato'];

vegetableNames.map(
    vegetableName => vegetableFactory.getVegetable(vegetableName)
).forEach(
    vegetable => console.log(`${vegetable.getName()} costs ${vegetable.getPrice()}`)
);

