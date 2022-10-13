import { useEffect, useState } from "react";
import { FetchDetails, setAcctDetails } from "../../redux/features/Users/auth";
import { dispatch } from "../../redux/store";
import Details from "./Details";

const GetCustomerDetails = ({ acctDetails, accountNo, setAccountNo }) => {
  const [fetchButtonState, setFetchButtonState] = useState(true);
  const [showDropDown, setShowDropDown] = useState(false);

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
    e.preventDefault();
    dispatch(setAcctDetails(null));
    setShowDropDown(false);
    setAccountNo("");
  };

  return (
    <>
      <div className="px-2 equal-padding ">
        <p className="details-paragraph">
          Enter a valid account number to generate an account statement
        </p>

        <div className="account-number">
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

          <div className="mt-4">
            <button
              className="btn py-2 px-4 fetch-button"
              disabled={fetchButtonState}
              onClick={(e) =>
                acctDetails ? ClearFieldHandler(e) : FetchDetailsHandler(e)
              }
              id={
                fetchButtonState
                  ? "login-Button-disabled"
                  : "login-Button-active"
              }
              style={
                acctDetails
                  ? { backgroundColor: "white", border: "1px solid black" }
                  : {}
              }
            >
              {acctDetails ? "Clear Field" : "Fetch details"}
            </button>
          </div>
        </div>
      </div>

      <Details
        className="px-2"
        showDropdown={showDropDown}
        acctDetails={acctDetails}
      />
    </>
  );
};

export default GetCustomerDetails;
