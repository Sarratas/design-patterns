import LoggerDecorator from './logger-decorator';

class Uppercased extends LoggerDecorator {
    public write(message: string): void {
        const uppercasedMessage = message.toLocaleUpperCase();
        this.logger.write(uppercasedMessage);
    }
}

export default Uppercased;