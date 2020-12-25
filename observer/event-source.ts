import Observer from './observer';
import MyEvent from './event';

class EventSource {
    private readonly observers: Observer[];

    constructor() {
        this.observers = [];
    }

    public subscribe(observer: Observer) {
        this.observers.push(observer);
    }

    public unsubscribe(observer: Observer) {
        this.observers.splice(this.observers.indexOf(observer), 1);
    }

    public notifyObservers(event: MyEvent) {
        this.observers.forEach(observer => {
            observer.update(event);
        });
    }
}

export default EventSource;