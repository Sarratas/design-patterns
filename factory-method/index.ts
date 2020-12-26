import FruitsFactory from './fruits-factory';
import VegetablesFactory from './vegetables-factory';
import Food from './food';
import FoodType from './food-types';

const fruitsFactory = new FruitsFactory();
const vegetablesFactory = new VegetablesFactory();

const foodArr: Food[] = [];

foodArr.push(fruitsFactory.getFood(FoodType.APPLE));
foodArr.push(fruitsFactory.getFood(FoodType.PEAR));
foodArr.push(fruitsFactory.getFood(FoodType.PINEAPPLE));

foodArr.push(vegetablesFactory.getFood(FoodType.CARROT));
foodArr.push(vegetablesFactory.getFood(FoodType.POTATO));
foodArr.push(vegetablesFactory.getFood(FoodType.TOMATO));

for (const food of foodArr) {
    console.log(`${food.getName()} costs ${food.getPrice()}`);
}
