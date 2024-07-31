// Реализовать следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
// Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность. 
// Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.


// Конструктор для электронных девайсов
function ElectricDevice(name, energyConsumption) {
    this.povered = false
    this.name = name
    this.energyConsumption = energyConsumption
}

// Добавляю через прототип меттд включения, общий
ElectricDevice.prototype.turnOn = function() {
    this.povered = true
    console.log(`${this.name} is turned on`)
}

// Добавляю через прототип меттд выключения, общий
ElectricDevice.prototype.turnOff = function() {
    this.povered = false
    console.log(`${this.name} is turned off`)
}

// Добавляю через прототип метод подсчета потребляемой мощности, общий
ElectricDevice.prototype.calculatePowerConsuming = function(hours) {
    return console.log(`Power consumption is ${hours * this.energyConsumption}, with consumption ${this.energyConsumption} by ${hours} `)
}

// "Подкласс" для девайсов питающихся от батареи
function OnBatteryDevice(name, batteryCappacity=100, energyConsumption=1){

    this.name = name
    this.batteryCappacity = batteryCappacity
    this.energyConsumption = energyConsumption

}

// Наследуюсь через прототип от общего для устройств "класса"
OnBatteryDevice.prototype = new ElectricDevice()
// Переопределяю метод включения для конкретного случая
OnBatteryDevice.prototype.turnOn = function() {
    this.povered = true
    console.log(`${this.name} is turned on and has ${this.batteryCappacity} battery left`)
}

function MainsPowerDevice(name, energyConsumption=1) {
    this.name = name
    this.energyConsumption = energyConsumption

}

MainsPowerDevice.prototype = new ElectricDevice()
MainsPowerDevice.prototype.turnOn = function() {
    this.povered = true
    console.log(`${this.name} is turned on and connected to the mains power`)
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


























