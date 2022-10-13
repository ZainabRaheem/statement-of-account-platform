import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  GenerateStatement,
} from "../../redux/features/Users/auth";
import { dispatch } from "../../redux/store";
import GetCustomerDetails from "./GetCustomerDetails";

const Form = () => {
  const { acctDetails } = useSelector((state) => state.auth);
  const [accountNo, setAccountNo] = useState("");
  const [statementType, setStatementType] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [chargeCustomer, setChargeCustomer] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const [dateError, setDateError] = useState(false);

  useEffect(() => {
    if (endDate !== "" && endDate < startDate) {
      setDateError(true);
    } else {
      setDateError(false);
    }
  }, [startDate, endDate]);

  useEffect(() => {
    if (
      accountNo !== "" &&
      statementType !== "" &&
      startDate !== "" &&
      endDate !== "" &&
      !dateError &&
      chargeCustomer !== ""
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [accountNo, startDate, endDate, statementType, dateError, chargeCustomer]);

  const GenerateStatementHandler = (e) => {
    e.preventDefault();

    const formBody = {
      accountNo,
      statementType,
      startDate,
      endDate,
      chargeCustomer,
    };

    dispatch(GenerateStatement(formBody));
  };

  const ClearData = (e) => {
    e.preventDefault();
    //the only solution i can think of now...
    window.location.reload();
  };

  return (
    <div className="form pt-4 pb-2">
      <form>
        <GetCustomerDetails
          acctDetails={acctDetails}
          accountNo={accountNo}
          setAccountNo={setAccountNo}
        />

        <div className="mb-2  px-2 equal-padding">
          <p className="details-paragraph">Statement type</p>

          <div className="details statement-type">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="radioGroup"
                id="Print on A4"
                value="Print on A4"
                onChange={(e) => setStatementType(e.target.value)}
              />
              <label className="form-check-label" htmlFor="Print on A4">
                Print on A4
              </label>
            </div>

            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="radioGroup"
                id="Print on Letterhead"
                value="Print on Letterhead"
                onChange={(e) => setStatementType(e.target.value)}
              />
              <label className="form-check-label" htmlFor="Print on Letterhead">
                Print on Letterhead
              </label>
            </div>

            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="radioGroup"
                id="Send via Email"
                value="Send via Email"
                onChange={(e) => setStatementType(e.target.value)}
              />
              <label className="form-check-label" htmlFor="Send via Email">
                Send via Email
              </label>
            </div>
          </div>
        </div>

        <div className="mb-2  px-2 equal-padding">
          <p className="details-paragraph">Date range</p>

          <div className="details date-range">
            <div className="form-group">
              <div id="emailHelp" className="form-label">
                Start Date
              </div>
              <input
                type="date"
                name="start"
                className="form-control form-date"
                id="start"
                onChange={(e) => setStartDate(e.target.value)}
              />
              {dateError && (
                <small className=" text-white" style={{ fontSize: "12px" }}>
                  hidden text
                </small>
              )}
            </div>

            <div className="form-group">
              <div id="emailHelp" className="form-label">
                End Date
              </div>
              <input
                type="date"
                name="end"
                className="form-control form-date"
                id={dateError ? "endDate" : ""}
                onChange={(e) => setEndDate(e.target.value)}
              />
              {dateError && (
                <small className="text-danger" style={{ fontSize: "12px" }}>
                  End date can't be earlier than start date
                </small>
              )}
            </div>
          </div>
        </div>

        <div className="mb-3 px-2  equal-padding">
          <p className="details-paragraph">Charge type</p>

          <div className="details charge-type">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="chargeButtons"
                id="Charge customer"
                value={"Yes"}
                onChange={(e) => setChargeCustomer(e.target.value)}
              />
              <label
                className="form-check-label form-label charge"
                htmlFor="Charge customer"
              >
                Charge customer
              </label>
            </div>

            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="chargeButtons"
                id="Do not charge customer"
                value={"No"}
                onChange={(e) => setChargeCustomer(e.target.value)}
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
        <hr />
        <div className="buttons equal-padding">
          <button
            className="button generate"
            id={
              buttonDisabled ? "login-Button-disabled" : "login-Button-active"
            }
            disabled={buttonDisabled}
            onClick={(e) => GenerateStatementHandler(e)}
          >
            Generate Statement
          </button>
          <button className="button clear" onClick={(e) => ClearData(e)}>
            Clear All
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
