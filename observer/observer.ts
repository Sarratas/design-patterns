import MyEvent from './event';

interface Observer {
    update(event: MyEvent);
}

export default Observer;