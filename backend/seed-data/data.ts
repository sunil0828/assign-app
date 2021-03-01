function timestamp() {
  // sometime in the last 30 days
  const stampy =
    Date.now() - Math.floor(Math.random() * 1000 * 60 * 60 * 24 * 30);
  return new Date(stampy).toISOString();
}

const data = {
  users: [
    {
      name: "Sunil",
      email: "sunil@gmail.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true,
    },
    {
      name: "Sunny",
      email: "sunny@gmail.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: false,
    },
    {
      name: "John",
      email: "john@gmail.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: false,
    },
  ],
};

export default data;