import TaxStrategy from './tax-strategy';
import Person from '../person';

class ProportionalTaxStrategy implements TaxStrategy {
    calculate(person: Person): number {
        return person.getSalary() * 0.15;
    }
}

export default ProportionalTaxStrategy;