> The template method is a method in a superclass, usually an abstract superclass, and defines the skeleton of an operation in terms of a number of high-level steps. These steps are themselves implemented by additional helper methods in the same class as the template method.
> The helper methods may be either abstract methods, in which case subclasses are required to provide concrete implementations, or hook methods, which have empty bodies in the superclass. Subclasses can (but are not required to) customize the operation by overriding the hook methods. The intent of the template method is to define the overall structure of the operation, while allowing subclasses to refine, or redefine, certain steps.

*https://en.wikipedia.org/wiki/Template_method_pattern*

Template method `cast` is defined in Spell class in `spell/spell.ts`. That class defines also two hook methods `onBeforeCast` and `onAfterCast` and one abstract method `onCast`. It always execute some steps, like checking if caster has enough mana, but also requires subclass to implement onCast behaviour and allows to define hook methods.
