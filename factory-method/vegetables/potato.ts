import Food from '../food';

class Potato extends Food {
    constructor() {
        super();
        this.name = 'Potato';
        this.price = 3.33;
    }
}

export default Potato;