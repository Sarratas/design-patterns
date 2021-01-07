# Proxy pattern

> A proxy, in its most general form, is a class functioning as an interface to something else. The proxy could interface to anything: a network connection, a large object in memory, a file, or some other resource that is expensive or impossible to duplicate. In short, a proxy is a wrapper or agent object that is being called by the client to access the real serving object behind the scenes. Use of the proxy can simply be forwarding to the real object, or can provide additional logic. In the proxy, extra functionality can be provided, for example caching when operations on the real object are resource intensive, or checking preconditions before operations on the real object are invoked. For the client, usage of a proxy object is similar to using the real object, because both implement the same interface.

*https://en.wikipedia.org/wiki/Proxy_pattern*

Please note, if you want to use proxy pattern in real project, first check native proxy implementation in JavaScript, which provides powerful way of intercepting calls to the object.

Example implementation in this directory shows proxy with 4 popular use cases:
- access control - `checkAccess` method is called before real service call
- logging - `log` method is called for each valid execution request
- caching - JS Map object is used to remember results of previous calls depending on the input
- counting - proxy class keeps counter for all calls of `execute` method
In `index.ts` file we wrap service object with proxy and call `execute` method with different parameters.
