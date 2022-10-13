import { setResponse } from "../../redux/features/Users/auth";
import { dispatch } from "../../redux/store";
import { useSelector } from "react-redux";

const ResponseModal = () => {
  const { response } = useSelector((state) => state.auth);

  window.addEventListener(
    "click",
    () => {
      if (response.message) {
        dispatch(
          setResponse({
            type: null,
            message: null,
            title: null,
          })
        );
      }
    },
    { capture: true }
  );

  return (
    <>
      {response.message && (
        <div
          className="modal-backdrop fade show"
          id="exampleModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
          style={{ display: "block", paddingRight: "17px", opacity: 0.7 }}
          aria-modal={response.message ? "true" : "false"}
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="">
              <div className="modal-body" id="modalBody">
                <div>
                  <img
                    src={
                      response.type === "error"
                        ? "assets/error.gif"
                        : "assets/success.gif"
                    }
                    id="modalGif"
                  />

                  <h3>{response.title}</h3>

                  <p>{response.message}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ResponseModal;
