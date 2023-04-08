function walk(steps, footPrint, speed) {

    let distanceInKm = steps * footPrint / 1000
    let breaks = Math.floor(distanceInKm / 0.5)

    function hasLeadingZero(time) {
        if (time <= 10) {
            return '0' + time
        }
        return time
    }

    let timeInHours = distanceInKm / speed + breaks / 60
    let hours = Math.floor(timeInHours)
    let minutes = Math.floor((timeInHours * 60) % 60)
    let seconds = Math.round((timeInHours * 3600) % 60)

    
    console.log(`${hasLeadingZero(hours)}:${hasLeadingZero(minutes)}:${hasLeadingZero(seconds)}`);
}
walk(2564, 0.70, 5.5)