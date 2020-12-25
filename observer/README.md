# Observer pattern

> The observer pattern is a software design pattern in which an object, named the subject, maintains a list of its dependents, called observers, and notifies them automatically of any state changes, usually by calling one of their methods.

*https://en.wikipedia.org/wiki/Observer_pattern*

In this example we define EventSource class (the subject) in `event-source.ts`. There is also observer interface with two implementations in `observerA.ts` and `observerB.ts`. In `index.ts` file, one EventSource object and several observers are created. Later observers subscribe to event source, which informs them about event using `notifyObservers` method. Observers B unsubscribe from the event source, while observer A keeps getting notifications.