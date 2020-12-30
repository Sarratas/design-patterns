import Engine from '../engine';

class BMWEngine implements Engine {
    start() {
        console.log('BMW engine starting');
    }

    stop() {
        console.log('BMW engine stopping');
    }
}

export default BMWEngine;