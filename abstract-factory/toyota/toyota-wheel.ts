import Wheel from '../wheel';

class ToyotaWheel implements Wheel {
    getRadius() {
        return 8;
    }

    getPrice() {
        return 800;
    }
}

export default ToyotaWheel;