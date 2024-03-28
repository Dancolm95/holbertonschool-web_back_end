export default class Car {
    constructor(brand, motor, color) {
        this._brand = brand;
        this._motor = motor;
        this._color = color;
    }
    // Getter for the _brand atributt
    get brand() {
        return this._brand;
    }

    // Getter for the _motor attribute
    get motor() {
        return this._motor;
    }

    // Getter for the _color attribute
    get color() {
        return this._color;
    }
    cloneCar() {
        const origin = this;
        return Object.assign(Object.create(Object.getPrototypeOf(origin)), {
            _brand: undefined,
            _motor: undefined,
            _color: undefined,
        });
    }
}