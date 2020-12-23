import LoggerDecorator from './logger-decorator';

class WithUser extends LoggerDecorator {
    public write(message: string): void {
        const user = 'John Smith';
        const withUserMessage = `[by ${user}]: ${message}`;
        this.logger.write(withUserMessage);
    }
}

export default WithUser;