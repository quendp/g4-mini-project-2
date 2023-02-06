import React from "react";
import PrivatePage from "../../components/UserAuthentication/PrivatePage";

const User = ({logInToken}) => {
  return (
    <PrivatePage logInToken={logInToken}>
      <div>
        <h1 className="h2-light">User Account Page</h1>
      </div>
    </PrivatePage>
  );
};

export default User;
