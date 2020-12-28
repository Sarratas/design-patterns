import Player from './player';
import Fireball from './spells/fireball';
import Teleport from './spells/teleport';
import Protect from './spells/protect';

const player = new Player(50);

const fireball = new Fireball(player);
const protect = new Protect(player);
const teleport = new Teleport(player);

fireball.cast();
console.log('---');
fireball.cast();
console.log('---');
protect.cast();
console.log('---');
teleport.cast();
console.log('---');
protect.cast();
