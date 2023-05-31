import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import service from "../Services/api";
import { alert } from "../action";
import { useDispatch } from "react-redux";

function Login() {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const [credentials, setCredentials] = useState({ email: "", password: "" });
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      service.login(credentials.email, credentials.password).then((res) => {
        if (res.success) {
          sessionStorage.setItem("token", res.authtoken);
          
          dispatch(alert({ msg: "log in successful", status: "success" }));
          setTimeout(() => {
            dispatch(alert({ msg: "", status: "" }));
          }, 1500);
          navigate("/");
        } else {
          dispatch(alert({ msg: "Invalid credentials", status: "danger" }));
          setTimeout(() => {
            dispatch(alert({ msg: "", status: "" }));
          }, 1500);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="container p-5 my-5 bg-primary text-white">
        <h3>LogIn </h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3 mt-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              value={credentials.email}
              onChange={onChange}
              id="email"
              name="email"
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
              value={credentials.password}
              onChange={onChange}
              name="password"
              id="password"
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

export default Login;
