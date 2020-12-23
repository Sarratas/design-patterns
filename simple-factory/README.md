# Simple Factory pattern

> The Simple factory pattern  describes a class that has one creation method with a large conditional that based on method parameters chooses which product class to instantiate and then return.

*https://refactoring.guru/design-patterns/factory-comparison*

Provided example features simple factory class defined in `vegetable-factory.ts` file. Object of that factory is created in `index.ts`. It allows to create instances of vegetables using `getVegetable()` method depending on a string passed to the method. Abstract class vegetable is defined in `vegetables/vegetable.ts` file. All other files in that directory contain child classes, which can be instantiated by factory.