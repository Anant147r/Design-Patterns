class User {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  hasAccess() {
    return this.name === "Anant";
  }
}

class NullUser {
  constructor() {
    this.id = -1;
    this.name = "Guest";
  }

  hasAccess() {
    return false;
  }
}

function getUser(id) {
  var user = users.find((user) => user.id === id);
  if (!user) return new NullUser();
  return user;
}

function printUser(id) {
  const user = getUser(id);
  console.log("Hello " + user.name);

  console.log(`Hello ${user.name}`);
  if (user.hasAccess()) console.log(`You have access`);
  else console.log(`You are not allowed here`);
}
