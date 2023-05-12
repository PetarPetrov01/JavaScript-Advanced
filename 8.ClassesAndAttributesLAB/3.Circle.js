class Circle {
    constructor(radius) {
        this._radius = radius
        this._diameter = radius * 2
    }

    get radius() {
        return this._radius
    }

    set radius(radius) {
        this._radius = radius
        this._diameter = radius * 2
    }

    get area() {
        return this._radius ** 2 * Math.PI
    }

    set diameter(diameter) {
        this._diameter = diameter
        this._radius = _iameter / 2
    }
    get diameter() {
        return this._radius * 2
    }
}

let c = new Circle(2);
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);
c.diameter = 1.6;
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);