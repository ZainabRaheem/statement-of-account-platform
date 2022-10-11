const Form = () => {
  return (
    <div className="form px-4 pt-4 pb-2">
      <form>
        <div className="mb-4">
          <p className="details-paragraph">
            Enter a valid account number to generate an account statement
          </p>

          <div className="detailss">
            <div>
              <label for="username" class="form-label">
                Account Number
              </label>
              <input
                type="text"
                name="username"
                class="form-control input-box"
                placeholder="Enter your account number"
                id="username"
                required
              />
            </div>
            <div class="button">
              <button
                type="submit"
                value="login"
                class="btn mt-4 py-2 px-4 fetch-button"
              >
                Fetch details
              </button>
            </div>
          </div>
        </div>

        <div class="mb-4">
          <p className="details-paragraph">Statement type</p>
          <div className="detailss">
            <div>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Print on Letterhead"
              />
            </div>
            {/* <div class="input-search">
              <div class="search-icon">
                <img src="../assets/checkbox.svg" alt="" />
              </div>
              <input
                class="input-boxx mx-3"
                type="text"
                placeholder="Print on A4"
              />
            </div> */}
            <div>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Print on Letterhead"
              />
            </div>
            <div>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Send via Email"
              />
            </div>
          </div>
        </div>
        <div class="mb-4">
          <p className="details-paragraph">Date Range</p>
          <div className="detailss">
            <div>
              <label for="exampleInputEmail1" class="form-label">
                Start date
              </label>
              <input
                type="date"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div>
              <label for="exampleInputEmail1" class="form-label">
                End date
              </label>
              <input
                type="date"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
          </div>
        </div>
        <div class="mb-4">
          <p className="details-paragraph">Charge type</p>
          <div className="detailss">
            <div>
              {/* <label for="exampleInputEmail1" class="form-label">
              Email address
            </label> */}
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Charge customer"
              />
            </div>
            <div>
              {/* <label for="exampleInputEmail1" class="form-label">
              Email address
            </label> */}
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Do not charge customer"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
