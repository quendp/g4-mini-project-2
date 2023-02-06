import React from "react";

const PrivatePage = ({ children, logInToken }) => {

  const showSignUpModal = () => {
    try {
        const signUpModalInst = document.getElementById("signUpModal");
      let myModal = bootstrap.Modal.getOrCreateInstance(
        signUpModalInst,
        {
          backdrop: "static",
          keyboard: false,
        }
      );
     myModal.show();

    } catch (err) {
      console.log(err.message);
    }
  };

  if (!logInToken) {
    showSignUpModal();
  }

  return <>{logInToken && children}</>;
};

export default PrivatePage;
