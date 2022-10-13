import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { reset } from "../../redux/features/Users/auth";
import { dispatch } from "../../redux/store";

const NavBar = () => {
  const { user } = useSelector((state) => state.auth);
  const nav = useNavigate();

  const LogoutHandler = () => {
    dispatch(reset());
    nav("/");
  };

  return (
    <nav className="py-1 px-4">
      <div className="container-fluid py-2">
        <div className="row justify-content-between align-items-center">
          <div className="col-9 p-0">
            <a className="navbar-brand" href="#">
              <img src="/assets/Logo.svg" alt="Logo" />
            </a>
          </div>

          <div className="col-3 p-0 profile-info justify-content-around">
            <div className="profile-details d-flex">
              <div className="details d-flex flex-column align-items-end">
                <span className="name">
                  {user ? user.firstName + user.lastName : ""}
                </span>
                <span className="serial-number">
                  {user ? user.userName : ""}
                </span>
              </div>
              {/* left padding not working */}
              <img
                className="px-3"
                src="/assets/ProfilePicture.svg"
                alt="profile picture"
              />
            </div>
            <button
              className="log-out px-5 py-2"
              onClick={() => LogoutHandler()}
            >
              Log out
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
