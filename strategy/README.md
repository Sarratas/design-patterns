# Strategy pattern

> The strategy pattern (also known as the policy pattern) is a behavioral software design pattern that enables selecting an algorithm at runtime. Instead of implementing a single algorithm directly, code receives run-time instructions as to which in a family of algorithms to use.

*https://en.wikipedia.org/wiki/Strategy_pattern*

This example calculates tax for set of people (additional, helper class implemented in `person.ts` file) using one of defined strategies. Common interface for those strategies is defined in `tax-strategies/tax-strategy.ts`. All other files in that directory contain specific strategies, which are provided for TaxCalculator in constructor. TaxCalculator object counts taxes for every person in set using strategy obtained through constructor.
