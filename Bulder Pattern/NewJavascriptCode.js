class User {
  constructor(name, { age, phone = 8077826938, address } = {}) {
    this.name = name;
    this.age = age;
    this.phone = phone;
    this.address = address;
  }
}

const user = new User("Anant", { phone: 8077826938 });
