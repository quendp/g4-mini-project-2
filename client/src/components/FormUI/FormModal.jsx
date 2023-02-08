import React from "react";
import FormHeader from "./FormHeader";
import FormFooter from "./FormFooter";

const FormModal = ({
  children,
  mode,
  handleChangeMode,
  step,
  setStep,
  handleSubmit,
  handleClickNext,
  handleLogOut
}) => {
  return (
    <>
      <FormHeader mode={mode} handleChangeMode={handleChangeMode} />
      <form action="#" onSubmit={handleSubmit} noValidate>
        <div className="modal-body py-3">{children}</div>
        <FormFooter
          mode={mode}
          step={step}
          setStep={setStep}
          handleClickNext={handleClickNext}
          handleLogOut={handleLogOut}
        />
      </form>
    </>
  );
};

export default FormModal;
