import Form from "./Form";

const CustomerDetails = () => {
  return (
    <div className="customer-details">
      <div className="main">
        <p className="statement-generator pt-4">
          Statement of Account Generator
        </p>

        <div className="card details">
          <div className="card-body details">
            <Form />
            <hr />
            <div className="buttons px-4 pt-3 pb-4">
              <button className="buttonn generate">Generate Statement</button>
              <button className="buttonn clear">Clear All</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDetails;
