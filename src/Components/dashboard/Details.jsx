const Details = ({showDropdown, acctDetails}) => {

  return (
    <div>
      <div className={showDropdown ? "collapse collapse-content show" : "collapse collapse-content"} id="collapseExample">
        <div className="card my-3">
          <p className="card-title">Customer details</p>
          <div className="card-body">
            <div className="inner-card-title">
              <small>Account name</small>
              <div>{acctDetails ? acctDetails.acctName : ""}</div>
            </div>

            <div className="inner-card-title">
              <small>Account number</small>
              <div>{acctDetails ? acctDetails.acctNo : ""}</div>
            </div>

            <div className="inner-card-title">
              <small>Currency</small>
              <div>{ acctDetails ?acctDetails.currency: ""}</div>
            </div>

            <div className="inner-card-title">
              <small>Email</small>
              <div>{ acctDetails ? acctDetails.email : ""}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
