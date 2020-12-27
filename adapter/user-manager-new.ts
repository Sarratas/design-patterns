import IUserManager, { User } from './user-manager';

class UserManagerNew implements IUserManager {
    private users: Record<number, User>;

    public constructor() {
        this.users = {};
    }
    
    public getUser(id: number): User {
        return this.users[id];
    }

    public setUser(id: number, user: User): void {
        this.users[id] = user;
    }

    public deleteUser(id: number): void {
        delete this.users[id];
    }
}

export default UserManagerNew;