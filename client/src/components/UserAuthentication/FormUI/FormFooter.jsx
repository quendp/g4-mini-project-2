import React from "react";

const FormFooter = ({ mode, step, setStep, handleClickNext, handleLogOut }) => {
  if (mode === "login") {
    return (
      <div className="modal-footer">
        <button
          type="button"
          className="btn modal-cancel-btn"
          data-bs-dismiss="modal"
        >
          Cancel
        </button>
        <button type="submit" className="btn modal-signup-btn py-2 px-3">
          Sign In
        </button>
      </div>
    );
  } else if (mode === "signup") {
    return (
      <div className="modal-footer">
        <button
          type="button"
          className="btn modal-cancel-btn"
          id="modal-cancel-btn"
          data-bs-dismiss={step === 0 ? "modal" : ""}
          onClick={() => setStep(0)}
        >
          {step === 0 ? "Cancel" : "Previous"}
        </button>
        <button
          type={step === 0 ? "button" : "submit"}
          className="btn modal-signup-btn py-2 px-3"
          onClick={step === 0 ? handleClickNext: undefined}
        >
          {step === 0 ? "Next" : "Submit"}
        </button>
      </div>
    );
  } else {
    return (
      <div className="modal-footer justify-content-end">
        <button
          type="button"
          className={`btn modal-cancel-btn ${mode === "private" ? "d-none":"" }`}
          data-bs-dismiss="modal"
        >
          Cancel
        </button>
        <button type="button" className="btn modal-signup-btn py-2 px-3" onClick={handleLogOut}>
          Log Out
        </button>
      </div>
    );
  }
};

export default FormFooter;
