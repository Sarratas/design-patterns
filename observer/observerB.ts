import Observer from './observer';
import MyEvent from './event';

class ObserverB implements Observer {
    update(event: MyEvent) {
        console.log(`Observer B got an event from ${event.source}`);
    }
}

export default ObserverB;