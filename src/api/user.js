const userApi = {
  register: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          status: "200",
        });
      }, 1000);
    });
  },

  login: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          username: "nguyendang127",
          password: "123456",
        });
      }, 1000);
    });
  },
};

export default userApi;
