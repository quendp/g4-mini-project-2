import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "../../Utils/axios";
import regEx from "../../Utils/regEx";
import DashboardUIAccountForm from "./DashboardUIAccountForm";
import DashboardUIPersonalForm from "./DashboardUIPersonalForm";

const DashboardUIAccount = ({ userInfo, setUpdateUserInfo }) => {
  const { accessData } = useAuth();

  const [isEditing, setIsEditing] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    resetData();
  }, [userInfo]);

  const resetData = () => {
    setErrMsg("");
    setUsername(userInfo.username);
    setEmail(userInfo.email);
    setPhoneNumber(userInfo.phone_number);
    setPassword(userInfo.password);
    setFirstname(userInfo.firstname);
    setLastname(userInfo.lastname);
    setAge(userInfo.age);
    setAddress(userInfo.address);
  };

  const updatedUser = {
    ...(username !== userInfo.username && { username: username }),
    ...(firstname !== userInfo.firstname && { firstname: firstname }),
    ...(lastname !== userInfo.lastname && { lastname: lastname }),
    ...(email !== userInfo.email && { email: email }),
    ...(phoneNumber !== userInfo.phone_number && { phone_number: phoneNumber }),
    ...(age !== userInfo.age && { age: age }),
    ...(address !== userInfo.address && { address: address }),
    ...(password !== userInfo.password && { password: password }),
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (Object.keys(updatedUser).length === 0) {
      setIsEditing(false);
      resetData();
    } else if (
      regEx.USERNAME_REGEX.test(username) &&
      regEx.EMAIL_REGEX.test(email) &&
      (regEx.PWD_REGEX.test(password) || password == "********") &&
      regEx.NAME_REGEX.test(firstname) &&
      regEx.NAME_REGEX.test(lastname) &&
      regEx.NUMBER_REGEX.test(phoneNumber) &&
      regEx.AGE_REGEX.test(age) &&
      age >= 16 &&
      regEx.ADDRESS_REGEX.test(address)
    ) {
      submitToServer();
    } else {
      setErrMsg(
        "Validation error. Kindly remove invalid characters in your submission."
      );
    }
  };

  const UPDATE_URL = `/api/users/update/${accessData.role}/${accessData.username}`;
  const submitToServer = async () => {
    try {
      const response = await axios.put(
        UPDATE_URL,
        JSON.stringify(updatedUser),
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessData.token}`,
          },
          withCredentials: true,
        }
      );
      if (response.data.message) {
        setErrMsg(response.data.message);
      } else {
        setIsEditing(false);
        resetData();
        setUpdateUserInfo((prev) => {
          return !prev;
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const startEditing = () => {
    setIsEditing(true);
  };

  const cancelEditing = () => {
    setIsEditing(false);
    resetData();
  };

  return (
    <div className="container-fluid p-0 py-3 m-0">
      {!isEditing && (
        <div className="mb-4 justify-content-start ps-3">
          <button
            className="dashboardUI-main__btn text-uppercase py-3 px-4"
            onClick={startEditing}
          >
            Edit Information
          </button>
        </div>
      )}
      {isEditing && (
        <div>
          <p
            className="p-dark text-center"
            style={{ color: "var(--clr-accent-invalid)" }}
          >
            {errMsg}
          </p>
        </div>
      )}
      <form onSubmit={submitHandler} noValidate>
        <DashboardUIAccountForm
          isEditing={isEditing}
          userInfo={userInfo}
          username={username}
          setUsername={setUsername}
          email={email}
          setEmail={setEmail}
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
          password={password}
          setPassword={setPassword}
        />
        <DashboardUIPersonalForm
          isEditing={isEditing}
          userInfo={userInfo}
          firstname={firstname}
          setFirstname={setFirstname}
          lastname={lastname}
          setLastname={setLastname}
          age={age}
          setAge={setAge}
          address={address}
          setAddress={setAddress}
        />
        {isEditing && (
          <div className=" mb-4 d-flex justify-content-end px-3 ps-3 mt-4">
            <button
              className="anchor-dark text-uppercase py-3 col-3 col-md-2 col-lg-1"
              onClick={cancelEditing}
              type="button"
            >
              cancel
            </button>
            <button
              className="dashboardUI-main__btn text-uppercase py-3 px-4"
              onClick={submitHandler}
              type="submit"
            >
              Update
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default DashboardUIAccount;
