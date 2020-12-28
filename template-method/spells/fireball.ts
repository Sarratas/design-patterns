import Spell from './spell';

class Fireball extends Spell {
    protected manaCost = 10;

    protected onCast() {
        console.log('> Fireball!');
    }

    protected onBeforeCast() {
        console.log('Fireball on before cast hook');
    }

    protected onAfterCast() {
        console.log('Fireball on after cast hook');
    }
}

export default Fireball;