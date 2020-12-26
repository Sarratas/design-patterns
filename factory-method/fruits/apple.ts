import Food from '../food';

class Apple extends Food {
    constructor() {
        super();
        this.name = 'Apple';
        this.price = 2.15;
    }
}

export default Apple;