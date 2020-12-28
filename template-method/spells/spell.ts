import Player from '../player';

abstract class Spell {
    protected abstract manaCost: number;
    protected caster: Player;

    public constructor(caster: Player) {
        this.caster = caster;
    }
    
    protected checkBeforeCast(): boolean {
        console.log('Check caster mana');
        return this.caster.getMana() >= this.manaCost;
    }

    protected handleManaCost() {
        console.log('Handle mana cost');
        this.caster.modifyMana(-this.manaCost);
    }

    public cast() {
        if (!this.checkBeforeCast()) {
            console.log('Out of mana!');
            return;
        }

        this.onBeforeCast();

        this.onCast();
        this.handleManaCost();
        
        this.onAfterCast();
    }

    protected abstract onCast();
    protected onBeforeCast() { }
    protected onAfterCast() { }
}

export default Spell;