import { Service } from "./service";
import { ServiceProxy } from "./service-proxy";

const service = new ServiceProxy(new Service());

console.log(service.execute(2));
console.log(service.execute(3));
console.log(service.execute(8));
console.log(service.execute(3));

console.log(`Execute method was called ${ServiceProxy.getCount()} times`);
