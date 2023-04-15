function carFactory(carObj) {
    let modifiedCar = {
        model: carObj.model
    }

    let enginePower = 0
    let engineVolume = 0
    if (carObj.power <= 90) {
        enginePower = 90
        engineVolume = 1800
    } else if (carObj.power <= 120) {
        enginePower = 120
        engineVolume = 2400
    } else {
        enginePower = 200
        engineVolume = 3500
    }

    modifiedCar.engine = {
        power: enginePower,
        volume: engineVolume
    }

    modifiedCar.carriage = {
        type: carObj.carriage,
        color: carObj.color
    }

    if (carObj.wheelsize % 2 == 0) {
        carObj.wheelsize--
    }

    modifiedCar.wheels = new Array(4).fill(carObj.wheelsize)

    return modifiedCar
}
carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}
)