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

  login: (data) => {
    return new Promise((resolve, rejected) => {
      if (data.password === "123456") {
        setTimeout(() => {
          resolve({
            id: "gbs223",
            // username: "nguyendang127",
            token: "taotenNguyen",
            role: "user",
          });
        }, 1500);
      } else if (data.password === "654321") {
        setTimeout(() => {
          resolve({
            id: "gbs223",
            // username: "nguyendang127",
            token: "Nhutngu",
            role: "admin",
          });
        }, 1500);
      } else if (data.password === "222") {
        setTimeout(() => {
          resolve({
            id: "gbs223",
            // username: "nguyendang127",
            token: "Nhutngu",
            role: "",
          });
        }, 1500);
      } else {
        setTimeout(() => {
          rejected(console.log("error"));
        }, 1500);
      }
    });
  },

  // authorization: () => {
  //   return new Promise ((resolve) => {
  //     if (data.token === "taotenNguyen")
  //   })
  // }
};

export default userApi;
