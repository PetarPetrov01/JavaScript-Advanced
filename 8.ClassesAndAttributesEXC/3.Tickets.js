function ticketDatabase(arr, sortCriteria) {

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination
            this.price = +price
            this.status = status
        }
    }

    return arr.map(line => new Ticket(...line.split('|')))
        .sort((a, b) => {
            return typeof a[sortCriteria] == 'number' ? a[sortCriteria] - b[sortCriteria] :
                a[sortCriteria].localeCompare(b[sortCriteria])
        })
}

console.log(ticketDatabase(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|available',
    'Philadelphia|132.20|departed',
    'Chicago|140.20|available',
    'Dallas|144.60|sold',
    'New York City|206.20|sold',
    'New York City|240.20|departed',
    'New York City|305.20|departed'],
    'price'))