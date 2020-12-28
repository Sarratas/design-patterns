class Processor {
    public powerOn() {
        console.log('Processor power on');
    }

    public powerOff() {
        console.log('Processor power off');
    }

    public enableBoostMode(enable: boolean) {
        if (enable) {
            console.log('Processor boost mode enabled');
        } else {
            console.log('Processor boost mode disabled');
        }
    }
}

export default Processor;
