class Person {
    private salary: number;

    constructor(salary: number) {
        this.salary = salary;
    }

    getSalary(): number {
        return this.salary;
    }
}

export default Person;