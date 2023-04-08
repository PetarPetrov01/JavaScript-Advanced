function previousDay(year, month, day) {
    month = month - 1
    let date = new Date(year, month, day)
    const previousDay = new Date(date.getTime());
    previousDay.setDate(date.getDate() - 1);

    console.log(`${previousDay.getFullYear()}-${previousDay.getMonth()+1}-${previousDay.getDate()}`);
}
previousDay(2016, 9, 30)