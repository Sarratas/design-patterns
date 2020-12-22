import Vegetable from './vegetable';

class Potato extends Vegetable {
    constructor() {
        super();
        this.name = 'Potato';
        this.price = 3.33;
    }
}

export default Potato;