import TaxCalculator from './tax-calculator';
import FlatTaxStrategy from './tax-strategies/flat-tax';
import ProportionalTaxStrategy from './tax-strategies/proportional-tax';
import ProgressiveTaxStrategy from './tax-strategies/progressive-tax';
import RegressiveTaxStrategy from './tax-strategies/regressive-tax';
import Person from './person';

const flatTaxCalculator = new TaxCalculator(new FlatTaxStrategy());
const proportionalTaxCalculator = new TaxCalculator(new ProportionalTaxStrategy());
const progressiveTaxCalculator = new TaxCalculator(new ProgressiveTaxStrategy());
const regressiveTaxCalculator = new TaxCalculator(new RegressiveTaxStrategy());

const people = [
    new Person(50),
    new Person(100),
    new Person(500),
    new Person(1000),
    new Person(1500),
    new Person(2000),
    new Person(5000)
];

console.log(flatTaxCalculator.calculateTaxes(people));
console.log(proportionalTaxCalculator.calculateTaxes(people));
console.log(progressiveTaxCalculator.calculateTaxes(people));
console.log(regressiveTaxCalculator.calculateTaxes(people));