import Food from './food';
import FoodType from './food-types';

abstract class FoodFactory {
    public abstract getFood(type: FoodType): Food;
}

export default FoodFactory;