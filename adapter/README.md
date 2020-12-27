# Adapter pattern

> The adapter pattern is a software design pattern (also known as wrapper, an alternative naming shared with the decorator pattern) that allows the interface of an existing class to be used as another interface. It is often used to make existing classes work with others without modifying their source code.

*https://en.wikipedia.org/wiki/Adapter_pattern*

To present adapter pattern two user manager classes were created. Old one simulate the class, that was used and is still present in many places of the system. New user manager is class implementing IUserManager interface and is gradually being introduced into the system. We don't want to change old user manager, but it's necessary to use it in some places interchangeably with new manager. To be able to do that, we implemented adapter in `user-manager-adapter.ts`. It handles incompatibilities between managers:
- getUser method return undefined instead of hardcoded string if user doesn't exist
- setUser method uses correct arguments order
- deleteUser is simulated with setUser method in old manager

With those changes we can use old user manager packed with adapter in `testUserManager` function in `index.ts`, as well as the new manager. The results are the same, as expected.
