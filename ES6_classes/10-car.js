export default class Car {
  constructor(brand, motor, color) {
    // Create objs
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // Methods

  cloneCar() {
    const newCar = new Car();
    Object.setPrototypeOf(newCar, Object.getPrototypeOf(this));
    return newCar;
  }
}
