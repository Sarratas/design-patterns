import Fan from './computer/fan';
import GraphicCard from './computer/graphic-card';
import Monitor from './computer/monitor';
import PowerSupply from './computer/power-supply';
import Processor from './computer/processor';

class Computer {
    private fan: Fan;
    private graphicCard: GraphicCard;
    private monitor: Monitor;
    private powerSuppy: PowerSupply;
    private processor: Processor;

    public constructor() {
        this.fan = new Fan();
        this.graphicCard = new GraphicCard();
        this.monitor = new Monitor();
        this.powerSuppy = new PowerSupply();
        this.processor = new Processor();
    }

    public powerOn() {
        console.log('--- Computer power on ---');
        this.powerSuppy.start();
        this.monitor.powerOn();
        this.graphicCard.powerOn();
        this.processor.powerOn();
        this.fan.start();
        this.fan.setNormalSpeed();
    }

    public powerOff() {
        console.log('--- Computer power off ---');
        this.monitor.powerOff();
        this.graphicCard.powerOff();
        this.processor.powerOff();
        this.fan.stop();
        this.powerSuppy.stop();
    }

    public setHighPerformanceMode(enable: boolean) {
        console.log(`--- Computer high performance ${enable ? 'on' : 'off'}`);
        this.processor.enableBoostMode(enable);
        if (enable) {
            this.powerSuppy.setPerformanceMode();
            this.fan.setHighSpeed();
        } else {
            this.powerSuppy.setEfficiencyMode();
            this.fan.setNormalSpeed();
        }
    } 
}

export default Computer;
