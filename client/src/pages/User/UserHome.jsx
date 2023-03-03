import React from "react";

const UserHome = () => {
  return (
    <div className="user-page-home__container container-fluid p-0 pe-5 m-0">
      <div className="row m-0 px-5">
        <div className="col-4 px-4">
          <div className="user-page-home__card w-100 d-flex flex-column justify-content-center align-items-center p-3 py-4">
            <h2 className="h2-dark">12</h2>
            <p>Destinations travelled</p>
          </div>
        </div>
        <div className="col-4 px-4">
          <div className="user-page-home__card w-100 d-flex flex-column justify-content-center align-items-center p-3 py-4">
            <h2 className="h2-dark">4</h2>
            <p>Countries Visited</p>
          </div>
        </div>
        <div className="col-4 px-4">
          <div className="user-page-home__card w-100 d-flex flex-column justify-content-center align-items-center p-3 py-4">
            <h2 className="h2-dark">25</h2>
            <p>Stories Shared</p>
          </div>
        </div>
      </div>
      <div className="row m-5 mt-4 p-4 min-vh-100">
        <div className="user-page-home__content col-12 pt-5">
          <h2 className="text-center mt-5">
            There are no booking updates today.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
