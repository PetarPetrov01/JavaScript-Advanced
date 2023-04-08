function dayOfWeek(day){
    let dayInWeek = 0
    switch(day){
        case 'Monday':
        dayInWeek = 1
        break;
        case 'Tuesday':
        dayInWeek = 2
        break;
        case 'Wednesday':
        dayInWeek = 3
        break;
        case 'Thursday':
        dayInWeek = 4
        break;
        case 'Friday':
        dayInWeek = 5
        break;
        case 'Saturday':
        dayInWeek = 6
        break;
        case 'Sunday':
        dayInWeek = 7
        break;
        default:
        dayInWeek = 'error'
        break;
    }
    console.log(dayInWeek);
}
dayOfWeek('Invalid')