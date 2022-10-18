import React from "react";
import BlueTitle from "../../UI/atoms/BlueTitle/BlueTitle";
import DropDownList from "../../UI/atoms/DropDownList/DropDownList";
import Input from "../../UI/atoms/Input/Input";
import constants from "../../../utils/constants";
import "./RegisterPage.css";
import Button from "../../UI/atoms/Button/Button";
import { Link } from "react-router-dom";
import { useState } from "react";

const RegisterPage = () => {
  const [registerForm, setRegisterForm] = useState<any>({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    gender: "",
  });
  const [errors, setErrors] = useState<any>({});
  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const registerFormCopy = { ...registerForm };
    registerFormCopy[e.target.name] = e.target.value;
    setRegisterForm({ ...registerFormCopy });
  };
  return (
    <div className="register">
      <BlueTitle title="Sign up" style={styles.title} />
      <form className="register__form">
        <div className="register__popcorn">
          <img className="popcorn" src="/images/popcorn.png" alt="" />
        </div>
        <div className="register__row">
          <div className="input__width">
            <Input
              icon="/images/email.png"
              placeholder="Email"
              value={registerForm.email}
              name="email"
              onChange={handleChange}
            />
          </div>
          <div className="input__width">
            <Input
              icon="/images/padlock.png"
              placeholder="Password"
              value={registerForm.password}
              name="password"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="register__row">
          <div className="input__width">
            <Input
              icon="/images/name.png"
              placeholder="FirstName"
              value={registerForm.firstName}
              name="firstName"
              onChange={handleChange}
            />
          </div>
          <div className="input__width">
            <Input
              icon="/images/name.png"
              placeholder="LastName"
              value={registerForm.lastName}
              name="lastName"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="register__row">
          <div className="input__width">
            <DropDownList
              icon="/images/gender.png"
              value={registerForm.gender}
              options={constants.optionsGender}
              name="gender"
              onChange={handleChange}
            />
          </div>
          <div className="input__width">
            <div style={{ visibility: "hidden" }}></div>
          </div>
        </div>
        <Button text="Sign up" style={styles.submit} />
        <Link to="/signIn" className="signIn__btn">
          Sign In
        </Link>
      </form>
    </div>
  );
};
const styles = {
  title: {
    width: "100%",
    borderRadius: "20px 20px 0 0",
    height: "30%",
    fontSize: "5rem",
  },
  submit: {
    fontSize: "2rem",
    color: "white",
    width: "40%",
    background: "#2596BE",
    padding: "3rem",
  },
};

export default RegisterPage;
