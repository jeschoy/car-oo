class Vehicle {
  constructor(a, b, c) {
    this.make = a;
    this.model = b;
    this.year = c;
  }
  honk() {
    console.log('Beep.');
  }
  toString() {
    console.log(
      `The vehicle is a ${this.make} ${this.model} from ${this.year}`
    );
  }
}

class Car extends Vehicle {
  constructor(a, b, c) {
    super(a, b, c);
  }
  numWheels() {
    return 4;
  }
}

class Motorcycle extends Vehicle {
  constructor(a, b, c) {
    super(a, b, c);
  }
  numWheels() {
    return 2;
  }
  revEngine() {
    console.log('VROOM!!!');
  }
}
