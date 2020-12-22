import Person from '../person';

interface TaxStrategy {
    calculate(person: Person): number;
}

export default TaxStrategy;