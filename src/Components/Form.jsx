import React, { useContext } from "react";
import { useForm } from "hooks/useForm";
import Button from "Components/Button";
import "styles/Form.scss";
import { UserContext } from "./UserContext";

const Form = (props) => {
  const { formValues, handleChange, getInputProps } = useForm();

  const context = useContext(UserContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);
  };

  return (
    <>
      <pre>{JSON.stringify(context, null, 2)}</pre>
      <form autoComplete="off" className="Form" onSubmit={handleSubmit}>
        <h1 className="Form__title">Subscribe</h1>
        <div className="Form__group">
          <label className="Form__label" htmlFor="firstName">
            First name
          </label>
          <input
            className="Form__input"
            id="firstName"
            type="text"
            {...getInputProps("firstName")}
          />
        </div>
        <div className="Form__group">
          <label className="Form__label" htmlFor="lastName">
            Last name
          </label>
          <input
            className="Form__input"
            id="lastName"
            type="text"
            {...getInputProps("lastName")}
          />
        </div>
        <div className="Form__group">
          <label className="Form__label" htmlFor="email">
            Email
          </label>
          <input
            className="Form__input"
            id="email"
            type="email"
            {...getInputProps("email")}
          />
        </div>
        <div className="Form__group">
          <label className="Form__label" htmlFor="password">
            Password
          </label>
          <input
            className="Form__input"
            id="password"
            type="password"
            {...getInputProps("password")}
          />
        </div>
        <div className="Form__group">
          <label className="Form__label" htmlFor="isAdmin">
            Admin
          </label>
          <input
            className="Form__input"
            id="isAdmin"
            type="checkbox"
            {...getInputProps("isAdmin")}
          />
        </div>
        <Button type="success">Submit</Button>
      </form>
    </>
  );
};

export default Form;
