import React, { useState } from "react";
import axios from "../../../Utils/axios";
import FormModal from "../../FormUI/FormModal";

const LogOutForm = ({ submitHandler }) => {
  const LOGOUT_URL = "/api/users/logout";

  const headerTitle = "Confirm log out";
  const headerText = "Are you sure you want to log out?";
  const footerWrapperClass = "justify-content-center";
  const btnLeftClass = "modal-cancel-btn";
  const dataDismiss = "modal";
  const btnLeftText = "cancel";
  const btnRightType = "button";
  const btnRightText = "log out";

  const [errMsg, setErrMsg] = useState("");

  const onClickLogOut = async () => {
    try {
      setErrMsg("Submitting...");
      const response = await axios.post(LOGOUT_URL, {
        withCredentials: true,
      });
      submitHandler(
        response.data.token,
        response.data.username,
        response.data.role
      );
      setErrMsg("");
    } catch (err) {
      setErrMsg("Failed to log out. Try again later.");
      console.log(err);
    }
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
      errMsg={errMsg}
    />
  );
};

export default LogOutForm;
