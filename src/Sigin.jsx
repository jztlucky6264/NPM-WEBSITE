import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Sigin = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const InputEvent = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();
    const { username, password } = data;

    if (username && password) {
      const res = await fetch(
        "https://npm-login-details-default-rtdb.firebaseio.com/loginDetails.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            password,
          }),
        }
      );
      if (res) {
        setData({
          username: "",
          password: "",
        });
        toast("You are login successfully");
      }
    } else {
      toast("please fill all the data");
    }
  };

  /* const formSubmit = (e) => {
    e.preventDefault();
  }; */
  return (
    <>
      <div className="my-5">
        <h3 className="text-center">Sign in to npm</h3>
      </div>
      <div className="container contact_div mb-5 ">
        <div className="row  ">
          <div className="col-md-6 col-1o mx-auto">
            <form
              method="POST"
              // onSubmit={formSubmit}
              className="row mt-3 g-3 needs-validation d-flex justify-content-center align-items-center flex-column"
              noValidate
            >
              <div className="col-md-4">
                <label htmlFor="validationCustom01" className="form-label">
                  Username or Email
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="validationCustom01"
                  placeholder="Username/Email"
                  name="username"
                  value={data.username}
                  onChange={InputEvent}
                  required
                />
                <div className="valid-feedback">Looks good!</div>
              </div>
              <div className="col-md-4">
                <label htmlFor="validationCustom02" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control mb-5 "
                  placeholder="Password"
                  name="password"
                  value={data.password}
                  onChange={InputEvent}
                  id="validationCustom02"
                  required
                />
                <div className="valid-feedback">Looks good!</div>
              </div>

              <div className="col-md-4">
                <button
                  className="btn btn-primary"
                  onClick={postData}
                  type="submit"
                >
                  Submit form
                </button>
                <ToastContainer />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Sigin;
