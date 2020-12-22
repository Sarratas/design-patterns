import TaxStrategy from './tax-strategy';
import Person from '../person';

class ProgressiveTaxStrategy implements TaxStrategy {
    calculate(person: Person): number {
        const salary = person.getSalary();
        if (salary < 200) {
            return salary * 0.05;
        }
        if (salary < 1000) {
            return salary * 0.10;
        }
        if (salary < 2000) {
            return salary * 0.15;
        }
        return salary * 0.25;
    }
}

export default ProgressiveTaxStrategy;