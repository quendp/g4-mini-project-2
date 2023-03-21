import React from "react";
import FormModal from "../../FormUI/FormModal";

const LogOutForm = ({ submitHandler }) => {
  const headerTitle = "Confirm log out";
  const headerText = "Are you sure you want to log out?";
  const footerWrapperClass = "justify-content-center";
  const btnLeftClass = "modal-cancel-btn";
  const dataDismiss = "modal";
  const btnLeftText = "cancel";
  const btnRightType = "button";
  const btnRightText = "log out";

  const onClickLogOut = () => {
    submitHandler(false, "login", 0);
  };

  return (
    <FormModal
      onClickBtnRight={onClickLogOut}
      headerTitle={headerTitle}
      headerText={headerText}
      footerWrapperClass={footerWrapperClass}
      btnLeftClass={btnLeftClass}
      dataDismiss={dataDismiss}
      btnLeftText={btnLeftText}
      btnRightType={btnRightType}
      btnRightText={btnRightText}
    />
  );
};

export default LogOutForm;
