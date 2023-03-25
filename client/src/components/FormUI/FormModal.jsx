import React from "react";
import useTheme from "../../hooks/useTheme";
import "./FormModal.css";

const FormModal = (props) => {
  const { currentTheme } = useTheme();
  return (
    <div
      className="formUI-modal__wrapper modal-content p-3 p-md-4"
      style={{ boxShadow: `0 0 2px ${currentTheme}` }}
    >
      <div className="modal-header pt-4 pb-0 flex-column justify-content-center">
        <h1
          className="modal-title mb-2 text-center"
          id="signUpModalLabel"
          style={{
            color: currentTheme,
          }}
        >
          {props.headerTitle}
        </h1>
        <p className="signUpCreateLink">
          {props.headerText}
          {props.headerLink}
        </p>
        <p
          className={`p-light modal-header__errorMsg px-4 text-center py-1 rounded-pill ${
            props.errMsg == "" || !props.errMsg ? "d-none" : "d-block"
          }`}
          style={{
            backgroundColor: `${
              props.errMsg == "Submitting..."
                ? "var(--clr-accent-loading-100)"
                : "var(--clr-accent-invalid-100)"
            }`,
            color: `${
              props.errMsg == "Submitting..."
                ? "var(--clr-primary-dark)"
                : "var(--clr-secondary-100)"
            }`,
          }}
        >
          {props.errMsg}
        </p>
      </div>
      <form action="#" onSubmit={props.submitHandler} noValidate>
        <div className="modal-body py-3">{props.children}</div>
        <div className={`modal-footer ${props.footerWrapperClass}`}>
          <button
            type="button"
            className={`btn ${props.btnLeftClass}`}
            data-bs-dismiss={props.dataDismiss}
            onClick={props.onClickBtnLeft}
          >
            {props.btnLeftText}
          </button>
          <button
            type={props.btnRightType}
            className="btn modal-signup-btn py-2 px-3"
            onClick={props.onClickBtnRight}
            style={{
              backgroundColor: currentTheme,
              boxShadow: `0 0 10px ${currentTheme}`,
            }}
          >
            {props.btnRightText}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormModal;
