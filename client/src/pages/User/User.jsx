import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { username } = useParams();

  return (
    <div>
      <h1 className="h2-light">User Account Page: Welcome {username}</h1>
    </div>
  );
};

export default User;
