import React from "react";
import './FormModal.css'

const FormModal = (props) => {
  return (
    <div className="modal-content p-3 p-md-4">
      <div className="modal-header pt-4 flex-column justify-content-center">
        <h1 className="modal-title mb-2" id="signUpModalLabel">
          {props.headerTitle}
        </h1>
        <p className="signUpCreateLink">
          {props.headerText}
          {props.headerLink}
        </p>
      </div>
      <form action="#" onSubmit={props.submitHandler} noValidate>
        <div className="modal-body py-3">
          {props.children}
        </div>
        <div className={`modal-footer ${props.footerWrapperClass}`}>
          <button
            type="button"
            className={`btn ${props.btnLeftClass}`}
            id="modal-cancel-btn"
            data-bs-dismiss={props.dataDismiss}
            onClick={props.onClickBtnLeft}
          >
            {props.btnLeftText}
          </button>
          <button
            type={props.btnRightType}
            className="btn modal-signup-btn py-2 px-3"
            onClick={props.onClickBtnRight}
          >
            {props.btnRightText}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormModal;
