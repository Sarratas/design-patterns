import TaxStrategy from './tax-strategy';
import Person from '../person';

class RegressiveTaxStrategy implements TaxStrategy {
    calculate(person: Person): number {
        const salary = person.getSalary();
        if (salary < 200) {
            return salary * 0.25;
        }
        if (salary < 1000) {
            return salary * 0.15;
        }
        if (salary < 2000) {
            return salary * 0.10;
        }
        return salary * 0.05;
    }
}

export default RegressiveTaxStrategy;