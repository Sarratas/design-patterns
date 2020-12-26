abstract class Food {
    protected name: string;
    protected price: number;

    public getName() {
        return this.name;
    }

    public getPrice() {
        return this.price;
    }
}

export default Food;