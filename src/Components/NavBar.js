const NavBar = () => {
  return (
    <nav class="py-1 px-4">
      <div class="container-fluid py-2">
        <div class="row justify-content-between align-items-center">
          <div class="col-9 p-0">
            <a class="navbar-brand" href="#">
              <img src="/assets/Logo.svg" alt="Logo" />
            </a>
          </div>

          <div class="col-3 p-0 profile-info justify-content-around">
            <div class="profile-details d-flex">
              <div class="details d-flex flex-column align-items-end">
                <span class="name">Jennifer Nwankwo</span>
                <span class="serial-number">SN029706</span>
              </div>
              {/* left padding not working */}
              <img
                class="px-3"
                src="/assets/ProfilePicture.svg"
                alt="profile picture"
              />
            </div>
            <button class="log-out px-5 py-2">Log out</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
