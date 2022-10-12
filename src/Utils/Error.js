
export const ErrorHandler = (err) => {
  if (err.code === "ERR_NETWORK") {
    return {
      title: "Error",
      message: "You are offline",
    };
  }
  if (err.code === "ERR_BAD_REQUEST") {
    if (err.response.data) {
      console.log(err.response.data.message);
     return {
        title: "Error",
        message: err.response.data.message,
      };
    } else {
      return {
        title: "Error",
        message: "Something went wrong",
      };
    }
  }
  return {
    title: "Error",
    message: "Something went wrong",
  };
};
