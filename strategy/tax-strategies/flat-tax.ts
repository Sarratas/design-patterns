import TaxStrategy from './tax-strategy';
import Person from '../person';

class FlatTaxStrategy implements TaxStrategy {
    calculate(person: Person): number {
        return 20;
    }
}

export default FlatTaxStrategy;