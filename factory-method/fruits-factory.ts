import FoodFactory from './food-factory';
import Food from './food';
import Apple from './fruits/apple';
import Pear from './fruits/pear';
import Pineapple from './fruits/pineapple';
import FoodType from './food-types';

class FruitsFactory extends FoodFactory {
    getFood(type: FoodType): Food {
        switch (type) {
            case FoodType.APPLE:
                return new Apple();
            case FoodType.PEAR:
                return new Pear();
            case FoodType.PINEAPPLE:
                return new Pineapple();
            default:
                throw new Error('Unknown fruit type');
        }
    }   
}

export default FruitsFactory;