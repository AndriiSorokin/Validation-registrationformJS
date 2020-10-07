const signUpRefs = {
  form: document.getElementById("js-form"),
  inputName: document.getElementById("name"),
  inputLogin: document.getElementById("login"),
  inputPassword: document.getElementById("password"),
  formBtn: document.getElementById("btn"),
};

class User {
  constructor(name, login, password) {
    this.name = name;
    this.login = login;
    this.password = password;
  }
}

const users = [];
signUpRefs.form.addEventListener("submit", (event) => {
  event.preventDefault();
  let name = event.currentTarget.elements.name.value;
  let login = event.currentTarget.elements.login.value;
  let password = event.currentTarget.elements.password.value;

  const newUser = new User(name, login, password);
  users.push(newUser);
  console.log(newUser);
  console.log(users);
  event.currentTarget.reset();
});
console.log(users);
