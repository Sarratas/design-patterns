import Carrot from './vegetables/carrot';
import Tomato from './vegetables/tomato';
import Potato from './vegetables/potato';
import Vegetable from './vegetables/vegetable';

class VegetableFactory {
    public getVegetable(type: string): Vegetable {
        switch (type) {
            case 'carrot':
                return new Carrot();
            case 'tomato':
                return new Tomato();
            case 'potato':
                return new Potato();
            default:
                throw new Error('Unknown vegetable type');
        }
    }
}

export default VegetableFactory;