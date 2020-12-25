import Observer from './observer';
import MyEvent from './event';

class ObserverA implements Observer {
    update(event: MyEvent) {
        console.log(`Observer A got an event from ${event.source}`);
    }
}

export default ObserverA;