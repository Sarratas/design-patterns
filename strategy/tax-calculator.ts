import TaxStrategy from './tax-strategies/tax-strategy';
import Person from './person';

class TaxCalculator {
    private taxStrategy: TaxStrategy;

    constructor(taxStrategy: TaxStrategy) {
        this.taxStrategy = taxStrategy;
    }

    calculateTaxes(people: Person[]): number[] {
        return people.map(person => this.taxStrategy.calculate(person));
    }
}

export default TaxCalculator;