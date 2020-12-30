abstract class Car {
    abstract getPrice();
    abstract getName();
    abstract getMaxSpeed();

    honk() {
        console.log('HONK HONK');
    }
}

export default Car;