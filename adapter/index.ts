import UserManagerNew from './user-manager-new';
import UserManagerOld from './user-manager-old';
import UserManagerAdapter from './user-manager-adapter';
import IUserManager from './user-manager';

const userManagerNew = new UserManagerNew();
const userManagerOld = new UserManagerOld();
const userManagerAdapter = new UserManagerAdapter(userManagerOld);

console.log('New manager:');
testUserManager(userManagerNew);

console.log('Old manager with adapter:');
// we can't use old manager directly
// but expect it to behave the same as new when used through adapter class
testUserManager(userManagerAdapter);

function testUserManager(userManager: IUserManager) {
    userManager.setUser(1, { name: 'John' });
    userManager.setUser(2, { name: 'Alice' });

    const user1 = userManager.getUser(1);
    console.log(user1);

    userManager.deleteUser(1);
    const user2 = userManager.getUser(1);
    console.log(user2);
}
