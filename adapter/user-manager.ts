export type User = Record<string, string>;

interface IUserManager {
    getUser(id: number): User;
    setUser(id: number, user: User): void;
    deleteUser(id: number): void;
}

export default IUserManager;