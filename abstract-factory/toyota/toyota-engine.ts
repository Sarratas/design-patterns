import Engine from '../engine';

class ToyotaEngine implements Engine {
    start() {
        console.log('Toyota engine starting');
    }

    stop() {
        console.log('Toyota engine stopping');
    }
}

export default ToyotaEngine;