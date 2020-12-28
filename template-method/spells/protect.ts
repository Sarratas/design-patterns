import Spell from './spell';

class Protect extends Spell {
    protected manaCost = 20;

    protected onCast() {
        console.log('> Protect!');
    }
}

export default Protect;