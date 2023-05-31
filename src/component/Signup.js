import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import service from "../Services/api";
import { alert } from "../action";
import { useDispatch } from "react-redux";

function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const handleSubmit = async (e) => {
    const { name, email, password } = credentials;

    e.preventDefault();
    try {
      service.signup(name, email, password).then((res) => {
        if (res.success) {
          sessionStorage.setItem("token", res.authtoken);
          dispatch(alert({ msg: "Signup successful", status: "success" }));
          setTimeout(() => {
            dispatch(alert({ msg: "", status: "" }));
          }, 1500);
          navigate("/login");
        } else {
          dispatch(alert({ msg: "Invalid credentials", status: "danger" }));
          setTimeout(() => {
            dispatch(alert({ msg: "", status: "" }));
          }, 1500);
        }
      });
    } catch (error) {
      console.log(error, "error");
    }
  };
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="  container p-5 my-5 bg-primary text-white">
        <h3>SignUp</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              onChange={onChange}
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              onChange={onChange}
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              onChange={onChange}
              required
              minLength={5}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="cpassword" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="cpassword"
              name="cpassword"
              onChange={onChange}
              required
              minLength={5}
            />
          </div>
          <button type="submit" className="btn btn-dark">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Signup;
