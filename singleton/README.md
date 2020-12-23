# Singleton pattern

> The singleton pattern is a software design pattern that restricts the instantiation of a class to one "single" instance. This is useful when exactly one object is needed to coordinate actions across the system.
*https://en.wikipedia.org/wiki/Singleton_pattern*

Singleton class is defined in `singleton.ts` file. It's constructor is defined as private, which prevents it from being created that way. Method `getInstance()` is called several times in `index.ts` file and always returns the same object, created lazily during the first call.
