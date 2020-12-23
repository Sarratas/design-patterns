import Logger from '../logger';

abstract class LoggerDecorator extends Logger {
    protected logger: Logger;

    public constructor(logger: Logger) {
        super();
        this.logger = logger;
    }

    public abstract write(message: string): void;
}

export default LoggerDecorator;