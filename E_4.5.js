// Реализовать следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
// Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность. 
// Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.


// Класс для электронных девайсов
class ElectricDevice {
    constructor(name, energyConsumption) {
        this.povered = false
        this.name = name
        this.energyConsumption = energyConsumption
    }

    turnOn() {
        this.povered = true
        console.log(`${this.name} is turned on`)
    }

    turnOff() {
        this.povered = false
        console.log(`${this.name} is turned off`)
    }

    calculatePowerConsuming(hours) {
        console.log(`Power consumption is ${hours * this.energyConsumption}, with consumption ${this.energyConsumption} by ${hours} `)
    }
    
}


// Подкласс для девайсов питающихся от батареи
class OnBatteryDevice extends ElectricDevice{
    constructor(name='device', batteryCappacity=100, energyConsumption=1) {
        super(name, batteryCappacity, energyConsumption)
        this.name = name
        this.batteryCappacity = batteryCappacity
        this.energyConsumption = energyConsumption
    }
    // переопределяю родительский метод включения
    turnOn() {
        this.povered = true
        console.log(`${this.name} is turned on and has ${this.batteryCappacity} battery left`)
    }

}

// Подкласс для девайсов питающихся от сети
class MainsPowerDevice extends ElectricDevice{
    constructor(name='device', energyConsumption=1) {
        super(name, energyConsumption)
        this.name = name
        this.energyConsumption = energyConsumption
    }
    // переопределяю родительский метод включения
    turnOn() {
        this.povered = true
        console.log(`${this.name} is turned on and connected to the mains power`)
    }

}


const computer = new MainsPowerDevice('A34-56', 3 )
const lamp = new OnBatteryDevice('A34-56', 31, 2 )


console.group(computer.name)
computer.turnOn()
computer.turnOff()
computer.calculatePowerConsuming(17)
console.groupEnd()

console.group(lamp.name)
lamp.turnOn()
lamp.turnOff()
lamp.calculatePowerConsuming(38)
console.groupEnd()


























