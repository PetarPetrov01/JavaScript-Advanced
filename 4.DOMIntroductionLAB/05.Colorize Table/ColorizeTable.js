function colorize() {
    let arr = document.getElementsByTagName('tr')
    for (let i = 1; i < arr.length; i++) {
        console.log(i);
        if (i % 2 == 0) {
            arr[i - 1].style.backgroundColor = 'teal'
        }
    }
}