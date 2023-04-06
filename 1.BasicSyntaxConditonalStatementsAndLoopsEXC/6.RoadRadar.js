function roadRadar(speed, area) {
    let speedLimit = 0
    let status = ''
    switch (area) {
        case 'motorway':
            speedLimit = 130
            break;
        case 'interstate':
            speedLimit = 90
            break;
        case 'city':
            speedLimit = 50
            break;
        case 'residential':
            speedLimit = 20
            break;
    }
    if (speed <= speedLimit) {
        status = ''
    } else if (speed >= speedLimit && speed <= speedLimit + 20) {
        status = 'speeding'
    } else if (speed >= speedLimit + 20 && speed <= speedLimit + 40) {
        status = 'excessive speeding'
    } else {
        status = 'reckless driving'
    }

    if (!status) {
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    } else {
        console.log(`The speed is ${speed - speedLimit} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
    }
}
roadRadar(71, 'city')