import { useEffect, useState } from "react";
import { dispatch } from "../redux/store";
import { setError, UserLogin } from "../redux/features/Users/auth";
import { useSelector } from "react-redux";
import { FiEyeOff, FiEye } from "react-icons/fi";
import ResponseModal from "../Components/shared/ResponseModal";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const { responseModal, token, user } = useSelector((state) => state.auth);
  const nav = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loginToken, setLoginToken] = useState("");
  const [passwordType, setPasswordType] = useState("password");
  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    if (
      loginToken.length !== 10 ||
      password.length < 1 ||
      userName.length < 1
    ) {
      setButtonDisabled(true);
    } else {
      setButtonDisabled(false);
    }
  }, [password, userName, loginToken]);

  const SetPasswordTypeHandler = () => {
    if (passwordType === "password") {
      setPasswordType("text");
    } else {
      setPasswordType("password");
    }
  };

  const LoginHandler = (e) => {
    e.preventDefault();

    const formBody = {
      userName,
      password,
      loginToken,
    };
    dispatch(UserLogin(formBody));
  };

  useEffect(() => {
    if (token && user) {
      nav("/dashboard");
    }
  }, [token, user]);

  return (
    <>
      <div className="logo container d-flex justify-content-end">
        <img className="" src="../assets/Logo.svg" alt="" />
      </div>
      <div className=" card login my-3 d-flex align-items-center">
        <div className="card-body">
          <img className="image" src="../assets/LoginFrame.svg" alt="" />
          <div className="login-card">
            <div className="login-card-body">
              <div className="login-card-title">
                <h3 className="title">Statement of Account Platform</h3>
                <p className="paragraph">Enter your log in credentials</p>
              </div>

              <form className="login-form">
                <div className="form-group login-details">
                  <label className="label">Username</label>
                  <input
                    type="text"
                    name="username"
                    className="form-control input-box"
                    placeholder="Enter your username"
                    id="username"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group login-details">
                  <label className="label">Password</label>

                  <input
                    type={passwordType}
                    name="password"
                    className="form-control input-box"
                    placeholder="Enter your password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <div
                    className="passwordEye"
                    onClick={() => SetPasswordTypeHandler()}
                  >
                    {password.length > 0 ? (
                      passwordType === "password" ? (
                        <FiEyeOff />
                      ) : (
                        <FiEye />
                      )
                    ) : (
                      <></>
                    )}
                  </div>
                </div>

                <div className="form-group login-details">
                  <label className="label">Token</label>
                  <input
                    type="text"
                    name="token"
                    className="form-control input-box"
                    placeholder="Enter your token"
                    id="token"
                    value={loginToken}
                    onChange={(e) => setLoginToken(e.target.value)}
                    required
                  />
                </div>

                <button
                  disabled={buttonDisabled}
                  type="submit"
                  id={
                    buttonDisabled
                      ? "login-Button-disabled"
                      : "login-Button-active"
                  }
                  className="btn btn-disabled text-align-center w-100 mt-2"
                  onClick={(e) => LoginHandler(e)}
                >
                  LOG IN
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <ResponseModal />
    </>
  );
};

export default LoginPage;
