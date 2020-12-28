class Player {
    private mana: number;

    public constructor(mana: number) {
        this.mana = mana;
    }

    public getMana(): number {
        return this.mana;
    }

    public modifyMana(amount: number): void {
        this.mana += amount;
    }
}

export default Player;