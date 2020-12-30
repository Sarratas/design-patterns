import Wheel from '../wheel';

class MercedesWheel implements Wheel {
    getRadius() {
        return 6;
    }

    getPrice() {
        return 400;
    }
}

export default MercedesWheel;