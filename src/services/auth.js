import { sleep } from "../utils/sleep";

export const doSignin = async (users, email, password) => {
  const storedUser = users.find((user) => user.email === email);

  if (!storedUser) {
    return Promise.reject("El usuario ingresado no existe");
  }

  const user = users.find((user) => {
    return user.email === email && user.password === password;
  });

  await sleep(1000);
  if (!user) {
    return Promise.reject("Contraseña inexistente");
  }
  // si llega hasta aca, significa que la promesa se resuelve bien
  // porque las funciones async (asíncronas) devuelven una promesa
  return user;
};

export const doSignup = async (users, setUsers, user) => {
  // estos van a ser mis campos requeridos
  // todo servicio de auth siempre va a tener
  // ❗ campos requeridos ❗

  const fieldsRequired = ["email", "password"];
  const errors = [];

  //vemos si estan completos los campos requeridos
  //sino devuelvo un array con los errores

  Object.entries(user).forEach((element) => {
    const [key, value] = element;
    const isFieldReq = fieldsRequired.includes(key);

    if (!value && isFieldReq) {
      const error = ` ${key} is required`;
      errors.push(error);
    }
  });

  if (errors.length > 0) {
    await sleep(1000);
    return Promise.reject(errors);
  } else {
    await sleep();
    setUsers([...users, user]);
  }
};
