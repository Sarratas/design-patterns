import Engine from '../engine';

class MercedesEngine implements Engine {
    start() {
        console.log('Mercedes engine starting');
    }

    stop() {
        console.log('Mercedes engine stopping');
    }
}

export default MercedesEngine;