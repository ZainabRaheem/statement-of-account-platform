import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FetchDetails, setAcctDetails } from "../../redux/features/Users/auth";
import { dispatch } from "../../redux/store";
import Details from "./Details";

const Form = () => {
  const { acctDetails } = useSelector((state) => state.auth);
  const [accountNo, setAccountNo] = useState("");
  const [fetchButtonState, setFetchButtonState] = useState(true);
  const [showDropDown, setShowDropDown] = useState( false);

  const AccountNoRegex = /^\d{10}$/;
  useEffect(() => {
    if (AccountNoRegex.test(accountNo) && accountNo.length === 10) {
      setFetchButtonState(false);
    } else {
      setFetchButtonState(true);
    }
  }, [accountNo]);

  const FetchDetailsHandler = (e) => {
    e.preventDefault();

    dispatch(FetchDetails(accountNo));
  };

  useEffect(() => {
    if (acctDetails !== null) {
      setShowDropDown(true);
    }
  }, [acctDetails]);

  const ClearFieldHandler = (e) => {
    e.preventDefault()
    dispatch(setAcctDetails(null))
    setShowDropDown(false)
    setAccountNo("")
  }

  return (
    <div className="form pt-4 pb-2">
      <form>
        <div className="mb-2  px-2 equal-padding ">
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
                className="form-control form-input"
                placeholder="Enter your account number"
                id="username"
                value={accountNo}
                onChange={(e) => setAccountNo(e.target.value)}
              />
            </div>

            <div className="mt-2">
              <button
                className="btn  py-2 px-4 fetch-button"
                disabled={fetchButtonState}
                onClick={(e) => acctDetails ? ClearFieldHandler(e) : FetchDetailsHandler(e)}
                id={
                  fetchButtonState
                    ? "login-Button-disabled"
                    : "login-Button-active"
                }
                style={acctDetails ? {backgroundColor: "white", border: "1px solid black"} : {}}
              >
                {acctDetails ?"Clear Field" : "Fetch details"}
              </button>
            </div>
          </div>
        </div>

        <Details
          className="px-2 "
          showDropdown={showDropDown}
          acctDetails={acctDetails}
        />

        <div className="mb-2  px-2 equal-padding">
          <p className="details-paragraph">Statement type</p>

          <div className="details statement-type">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="Print on A4"
                id="Print on A4"
              />
              <label
                className="form-check-label form-label"
                htmlFor="Print on A4"
              >
                Print on A4
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="Print on Letterhead"
                id="Print on Letterhead"
              />
              <label
                className="form-check-label form-label"
                htmlFor="Print on Letterhead"
              >
                Print on Letterhead
              </label>
            </div>

            <div className="form-check email">
              <input
                className="form-check-input"
                type="radio"
                name="Send via Email"
                id="Send via Email"
              />
              <label
                className="form-check-label form-label"
                htmlFor="Send via Email"
              >
                Send via Email
              </label>
            </div>
          </div>
        </div>

        <div className="mb-2  px-2 equal-padding">
          <p className="details-paragraph">Date range</p>

          <div className="details date-range">
            <div>
              <div id="emailHelp" className="form-text form-label">
                Start Date
              </div>
              <input
                type="date"
                name="start"
                className="form-control form-date"
                id="start"
              />
            </div>

            <div>
              <div id="emailHelp" className="form-text form-label">
                End Date
              </div>
              <input
                type="date"
                name="end"
                className="form-control form-date"
                id="end"
              />
            </div>
          </div>
        </div>

        <div className="mb-2 px-2 equal-padding">
          <p className="details-paragraph">Charge type</p>

          <div className="details charge-type">
            <div className="form-check charge">
              <input
                className="form-check-input"
                type="radio"
                name="Charge customer"
                id="Charge customer"
              />
              <label
                className="form-check-label form-label charge"
                htmlFor="Charge customer"
              >
                Charge customer
              </label>
            </div>

            <div className="form-check charge">
              <input
                className="form-check-input"
                type="radio"
                name="Do not charge customer"
                id="Do not charge customer"
              />
              <label
                className="form-check-label form-label charge"
                htmlFor="Do not charge customer"
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
