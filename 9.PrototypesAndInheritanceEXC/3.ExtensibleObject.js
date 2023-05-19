function extensibleObject() {
    let currentProto = Object.getPrototypeOf(this)

    this.extend = function (template) {
        for (const key of Object.keys(template)) {
            if (typeof template[key] == 'function') {
                currentProto[key] = template[key]
            } else {
                this[key] = template[key]
            }
        }
    }
    return this
}

const myObj = extensibleObject();

const template = {
    extensionMethod: function () { },
    extensionProperty: 'someString'
}
myObj.extend(template);

console.log(myObj)

