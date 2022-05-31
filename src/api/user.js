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
};

export default userApi;
