import LoggerDecorator from './logger-decorator';

class Timestamped extends LoggerDecorator {
    public write(message: string): void {
        // warning - this method converts time to UTC
        const dateString = new Date().toISOString().slice(0,10);
        const timestampedMessage = `[${dateString}]: ${message}`;
        this.logger.write(timestampedMessage);
    }
}

export default Timestamped;