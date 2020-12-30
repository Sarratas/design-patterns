import Wheel from '../wheel';

class BMWWheel implements Wheel {
    getRadius() {
        return 5;
    }

    getPrice() {
        return 500;
    }
}

export default BMWWheel;