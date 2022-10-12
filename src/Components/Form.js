const Form = () => {
  return (
    <div className="form px-4 pt-4 pb-2">
      <form>
        <div class="mb-4">
          <p className="details-paragraph">
            Enter a valid account number to generate an account statement
          </p>

          <div className="details account-number">
            <div>
              <div id="emailHelp" className="form-text form-label">
                Account number
              </div>
              <input
                type="text"
                name="username"
                class="form-control form-input"
                placeholder="Enter your account number"
                id="username"
                required
              />
            </div>

            <div class="button mt-4">
              <button
                type="submit"
                value="login"
                class="btn  py-2 px-4 fetch-button"
              >
                Fetch details
              </button>
            </div>
          </div>
        </div>

        <div class="mb-4">
          <p className="details-paragraph">Statement type</p>

          <div className="details statement-type">
            <div class="form-check pl-5">
              <input
                class="form-check-input"
                type="radio"
                name="Print on A4"
                id="Print on A4"
              />
              <label class="form-check-label form-label" for="Print on A4">
                Print on A4
              </label>
            </div>

            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="Print on Letterhead"
                id="Print on Letterhead"
              />
              <label
                class="form-check-label form-label"
                for="Print on Letterhead"
              >
                Print on Letterhead
              </label>
            </div>

            <div class="form-check email">
              <input
                class="form-check-input"
                type="radio"
                name="Send via Email"
                id="Send via Email"
              />
              <label class="form-check-label form-label" for="Send via Email">
                Send via Email
              </label>
            </div>
          </div>
        </div>

        <div class="mb-4">
          <p className="details-paragraph">Date range</p>

          <div className="details date-range">
            <div>
              <div id="emailHelp" className="form-text form-label">
                Start Date
              </div>
              <input
                type="date"
                name="start"
                class="form-control form-date"
                id="start"
                required
              />
            </div>

            <div>
              <div id="emailHelp" className="form-text form-label">
                End Date
              </div>
              <input
                type="date"
                name="end"
                class="form-control form-date"
                id="end"
                required
              />
            </div>
          </div>
        </div>

        <div class="mb-4">
          <p className="details-paragraph">Charge type</p>

          <div className="details charge-type">
            <div class="form-check charge">
              <input
                class="form-check-input"
                type="radio"
                name="Charge customer"
                id="Charge customer"
              />
              <label
                class="form-check-label form-label charge"
                for="Charge customer"
              >
                Charge customer
              </label>
            </div>

            <div class="form-check charge">
              <input
                class="form-check-input"
                type="radio"
                name="Do not charge customer"
                id="Do not charge customer"
              />
              <label
                class="form-check-label form-label charge"
                for="Do not charge customer"
              >
                Do not charge customer
              </label>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
