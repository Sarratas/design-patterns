import IUserManager, { User } from './user-manager';
import UserManagerOld from './user-manager-old';

class UserManagerAdapter implements IUserManager {
    private userManager: UserManagerOld;

    public constructor(userManager: UserManagerOld) {
        this.userManager = userManager;
    }

    public getUser(id: number): User {
        const user = this.userManager.getUser(id);
        // handle special case in old user manager
        if (user === 'No such user') {
            return undefined;
        }
        return user;
    }

    public setUser(id: number, user: User): void {
        this.userManager.setUser(user, id);
    }

    public deleteUser(id: number): void {
        // simulate deleting user
        this.userManager.setUser(undefined, id);
    }
}

export default UserManagerAdapter;