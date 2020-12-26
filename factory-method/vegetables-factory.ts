import FoodFactory from './food-factory';
import Food from './food';
import Carrot from './vegetables/carrot';
import Potato from './vegetables/potato';
import Tomato from './vegetables/tomato';
import FoodType from './food-types';

class VegetablesFactory extends FoodFactory {
    getFood(type: FoodType): Food {
        switch (type) {
            case FoodType.CARROT:
                return new Carrot();
            case FoodType.POTATO:
                return new Potato();
            case FoodType.TOMATO:
                return new Tomato();
            default:
                throw new Error('Unknown vegetable type');
        }
    }   
}

export default VegetablesFactory;