class Key {
  private signature: number;
  constructor() {
    this.signature = Math.random();
  }
  getSignature(): number {
    return this.signature;
  }
}
class Person {
  private key: Key;
  constructor(key: Key) {
    this.key;
  }
  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  protected door: boolean;
  protected key: Key;
  private tenants: Person[] = [];

  abstract OpenDoor(key: Key): void;

  comeIn(person: Person) {
    if (this.door) {
      this.tenants.push(person);
    } else {
      return this.tenants;
    }
  }
}

class MyHouse extends House {
  constructor(key: Key) {
    super();
    this.key = key;
  }
  OpenDoor(key: Key): void {
    if (this.key.getSignature() === key.getSignature()) {
      this.door = true;
    } else {
      this.door = false;
    }
  }
}
const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.OpenDoor(person.getKey());

house.comeIn(person);

export {};
