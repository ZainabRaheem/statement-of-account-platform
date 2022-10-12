
const MockLogin = (data) => {
  if (data.userName !== "BossMan" || data.password !== "123456") {
    throw new Error("Combination of password and UserName is Incorrect");
  }
  else {
    return {
      token: "djbdnsdksd",
      data: {
        userName: "SN03039",
        firstName: "Boss",
        lastName: "Man",
      },
    };
  }
};

export default MockLogin;
