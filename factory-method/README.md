> The factory method pattern is a creational pattern that uses factory methods to deal with the problem of creating objects without having to specify the exact class of the object that will be created. This is done by creating objects by calling a factory method—either specified in an interface and implemented by child classes, or implemented in a base class and optionally overridden by derived classes—rather than by calling a constructor.

*https://en.wikipedia.org/wiki/Factory_method_pattern*

In this example implementation we create abstract FoodFactory class in `food-factory.ts` file and extend it in `fruits-factory.ts` and `vegetables-factory.ts`. Fruit and vegetable types are defined in corresponding directories. In `index.ts` both factories are instantiated and used to create objects.
