function solve(area, vol, inputArr) {
    let resultArr = JSON.parse(inputArr)
        .map(obj => {
            return {
                area: area.call(obj),
                volume: vol.call(obj)
            }
        })

    return resultArr
}

function vol() {

    return Math.abs(this.x * this.y * this.z);
};

function area() {
    return Math.abs(this.x * this.y);
};

solve(area, vol, `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`
)