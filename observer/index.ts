import EventSource from './event-source';
import ObserverA from './observerA';
import ObserverB from './observerB';
import Observer from './observer';
import MyEvent from './event';

const eventSource = new EventSource();

const observerA = new ObserverA();
eventSource.subscribe(observerA);

const observersB: Observer[] = [];
for (let i = 0; i < 5; ++i) {
    const observerB = new ObserverB();
    eventSource.subscribe(observerB);
    observersB.push(observerB);
}

const event1: MyEvent = {
    source: 'some-source',
    data: {
        'id': '1',
    }
}
eventSource.notifyObservers(event1);

for (const observerB of observersB) {
    eventSource.unsubscribe(observerB);
}

const event2: MyEvent = {
    source: 'some-other-source',
    data: {
        'id': '2',
    }
}

eventSource.notifyObservers(event2);