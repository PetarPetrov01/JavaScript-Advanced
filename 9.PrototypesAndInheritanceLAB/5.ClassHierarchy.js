function result() {
    class Figure {
        constructor(units = 'cm') {
            this.units = units
        }

        get area() {
            return this.units
        }

        changeUnits(newUnits) {
            this.units = newUnits
        }

        scale(num) {
            switch (this.units) {
                case 'mm':
                    num *= 10
                    break;
                case 'cm':
                    break;
                case 'm':
                    num /= 10
                    break;
                default:
                    break;
            }
            return num
        }

        toString() {
            return `Figures units: ${this.units}`
        }
    }

    class Circle extends Figure {
        constructor(radius, units) {
            super(units)
            this._radius = radius
        }

        get area() {
            return this.radius ** 2 * Math.PI
        }

        get radius() {
            return this.scale(this._radius)
        }

        toString() {
            return `${super.toString()} Area: ${this.area} - radius: ${this.radius}`
        }
    }

    class Rectangle extends Figure {
        constructor(width, height, units) {
            super(units)
            this._width = width
            this._height = height
        }

        get area() {
            return this.width * this.height
        }

        get width() {
            return this.scale(this._width)
        }
        get height() {
            return this.scale(this._height)
        }

        toString() {
            return `${super.toString()} Area: ${this.area} - width: ${this.width}, height: ${this.height}`
        }
    }

    return { Figure, Circle, Rectangle }
}

let classes = result()
let { Figure, Circle, Rectangle } = classes

let c = new Circle(5);
console.log(c.area); // 78.53981633974483
console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5

let r = new Rectangle(3, 4, 'mm');
console.log(r.area); // 1200 
console.log(r.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40

r.changeUnits('cm');
console.log(r.area); // 12
console.log(r.toString()); // Figures units: cm Area: 12 - width: 3, height: 4

c.changeUnits('mm');
console.log(c.area); // 7853.981633974483
console.log(c.toString()) // Figures units: mm Area: 7853.981633974483 - radius: 50
