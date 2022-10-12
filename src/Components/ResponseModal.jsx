import { setResponseModal } from "../redux/features/Users/auth";
import { dispatch } from "../redux/store";

const ResponseModal = (props) => {
  window.onclick = function () {
    if (props.modalState) {
      dispatch(setResponseModal(false));
    }
  };

  return (
    <>
      <div
        className={props.modalState ? "modal-backdrop show fade" : "modal"}
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        style={
          props.modalState
            ? { display: "block", "padding-right": "17px" }
            : { display: "none" }
        }
        aria-modal={props.modalState ? "true" : "false"}
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="">
            <div className="modal-body" id="modalBody">
              

                <p>Login Failed</p>

                <p>Combination of Username and Password is Incorrect, <br /> Pleases try again</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResponseModal;
