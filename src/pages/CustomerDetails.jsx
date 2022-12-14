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
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDetails;
