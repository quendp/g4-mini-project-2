import React, { useState } from "react";
import AdminNavigations from "./AdminNavigations/AdminNavigations";

const Admin = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = (modalId) => {
    setShowModal((prev) => ({ ...prev, [modalId]: true }));
  };

  const closeModal = (modalId) => {
    setShowModal((prev) => ({ ...prev, [modalId]: false }));
  };

  const handleSubmit = (searchValue) => {
    console.log(searchValue);
  };

  return (
    <div className="admin">
      <AdminNavigations
        searchValueHandler={handleSubmit}
        showModal={showModal}
        openModal={openModal}
        closeModal={closeModal}
      />
    </div>
  );
};

export default Admin;
