const Login = () => {
  return (
    <>
      <div className="logo container d-flex justify-content-end">
        <img className="" src="../assets/Logo.svg" alt="" />
      </div>
      <div className=" card login my-3 d-flex align-items-center">
        <div className="card-body">
          <img className="image" src="../assets/LoginFrame.svg" alt="" />
          <div class="login-card">
            <div class="login-card-body">
              <div class="login-card-title">
                <h3 class="title">Statement of Account Platform</h3>
                <p class="paragraph">Enter your log in credentials</p>
              </div>

              <form class="login-form">
                <div class="form-group login-details py-2">
                  <label class="label" for="username">
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    class="form-control input-box"
                    placeholder="Enter your username"
                    id="username"
                    required
                  />
                </div>

                <div class="form-group login-details py-2">
                  <label class="label" for="password">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    class="form-control input-box"
                    placeholder="Enter your password"
                    id="password"
                    required
                  />
                </div>

                <div class="form-group login-details py-2">
                  <label class="label" for="token">
                    Token
                  </label>
                  <input
                    type="number"
                    name="token"
                    class="form-control input-box"
                    placeholder="Enter your token"
                    id="token"
                    required
                  />
                </div>

                <div class="pt-5">
                  <button type="submit" value="login" class="btn login-button">
                    LOG IN
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
