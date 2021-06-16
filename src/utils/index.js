export const signUp = async (
  username,
  email,
  password,
  favourites,
  setUser
) => {
  const response = await fetch("http://localhost:5000/users/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: username,
      email: email,
      password: password,
      favourites: favourites,
    }),
  });
  const data = await response.json();
  setUser(data.username);
};

export const userLogin = async (username, email, password) => {
  const response = await fetch("http://localhost:5000/users/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: username,
      email: email,
      password: password,
    }),
  });
  const data = await response.json();
  setUser(data.username);
};

export const updateUser = async (username, email, password, setUser) => {
  const response = await fetch("http://localhost:5000/users", {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: username,
      update: {
        username: username,
        email: email,
        password: password,
      },
    }),
  });
  const data = await response.json();
  setUser(data.username);
};
