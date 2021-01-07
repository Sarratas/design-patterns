export interface IService {
    execute(input: number): number;
}

export class Service implements IService {
    execute(input: number): number {
        // simulate expensive function call
        for (let i = 0; i < 1000000; ++i) { }

        console.log('Service method executed');
        return input * 2;
    }
}