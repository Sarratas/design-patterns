import Spell from './spell';

class Teleport extends Spell {
    protected manaCost = 5;

    protected onCast() {
        console.log('> Teleport');
    }

    protected onBeforeCast() {
        console.log('Teleport on before cast hook');
    }
}

export default Teleport;