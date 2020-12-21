class Singleton {
    private static _instance: Singleton;
    private count: number;

    private constructor() {
        this.count = 0;
    }

    public static getInstance(): Singleton {
        if (!Singleton._instance) {
            Singleton._instance = new Singleton();
        }

        return Singleton._instance;
    }

    public increment() {
        this.count++;
    }

    public getCount() {
        return this.count;
    }
}

export default Singleton;