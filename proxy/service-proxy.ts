import { IService } from "./service";

export class ServiceProxy implements IService {
    private service: IService;
    private cache: Map<number, number>;
    private static count: number = 0;

    constructor(service: IService) {
        this.service = service;
        this.cache = new Map<number, number>();
    }

    public execute(input: number): number {
        ServiceProxy.count++;
        if (this.checkAccess(input)) {
            this.log();
            if (!this.cache.has(input)) {
                const result = this.service.execute(input);
                this.cache.set(input, result);
            }
            return this.cache.get(input);
        } else {
            return 0;
        }
    }

    public static getCount() {
        return ServiceProxy.count;
    }

    private checkAccess(input) {
        console.log('Checking access');
        return input < 5;
    }

    private log() {
        console.log('Proxy logging...');
    }
}