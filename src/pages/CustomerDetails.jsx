import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Form from "../Components/dashboard/Form";

const CustomerDetails = () => {
  const { token } = useSelector((state) => state.auth);
  const nav = useNavigate();

  useEffect(() => {
    if(!token){
      nav("/")
    }
  }, [])
  return (
    <div className="customer-details">
      <div className="main">
        <p className="statement-generator pt-4">
          Statement of Account PlatForm
        </p>

        <div className="form-card details">
          <div className="card-body details">
            <Form />
            <hr />
            <div className="buttons px-4 pt-3 pb-4">
              <button className="button generate">Generate Statement</button>
              <button className="button clear">Clear All</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDetails;
