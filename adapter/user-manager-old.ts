import { User } from './user-manager';

class UserManagerOld {
    private users: Record<number, User>;

    public constructor() {
        this.users = {};
    }

    public getUser(id: number) {
        return this.users[id] ?? 'No such user';
    }

    public setUser(user: User, id: number): void {
        this.users[id] = user;
    }
}

export default UserManagerOld;