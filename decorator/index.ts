import Logger from './logger';
import Uppercased from './decorators/uppercased';
import Timestamped from './decorators/timestamped';
import WithUser from './decorators/with-user';

const logger = new Logger();
logger.write('Test');

const uppercasedLogger = new Uppercased(new Logger());
const timestampedLogger = new Timestamped(new Logger());
const withUserLogger = new WithUser(new Logger);
const combinedLogger = new Uppercased(
    new Timestamped(
    new WithUser(
    new Logger())));

uppercasedLogger.write('Test');
timestampedLogger.write('Test');
withUserLogger.write('Test');
combinedLogger.write('Test');
