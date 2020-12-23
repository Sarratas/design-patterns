# Decorator pattern

> The decorator pattern is a design pattern that allows behavior to be added to an individual object, dynamically, without affecting the behavior of other objects from the same class.

*https://en.wikipedia.org/wiki/Decorator_pattern*

`logger.ts` file contains definition of very simple class with only one method `write()`. Object of that class will be the subject of decoration. `decorators/logger-decorator.ts` file provides definition for abstract decorator class which inherits from logger class. It makes `write()` method abstract, so all decorators has to implement it. It also overrides the constructor, to accept one argument with base logger class. All other files in the `decorators` directory contain child classes, which change the message in different ways and then call the `write()` method from stored base logger. `index.ts` file creates and tests raw logger and few decorated loggers.
