import React from "react";
import "./form.css";
import { Input, Progress } from "../index";
import { useNavigate } from "react-router-dom";

const Form = ({
  title,
  subtitle,
  inputs,
  setUser,
  user,
  navigateHandler,
  navigateURL,
  current,
  total,
}) => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigateHandler(navigate, navigateURL);
  };
  return (
    <div>
      <Progress current={current} total={total} />
      <div className="mg-2">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
      <div className="flex-column form-container">
        {inputs.map(
          ({ label, type, placeholder, prefix, onChangeHandler, value }) => (
            <Input
              label={label}
              type={type}
              placeholder={placeholder}
              prefix={prefix}
              onChangeHandler={onChangeHandler}
              setterFunction={setUser}
              variableToSet={user}
              value={value}
            />
          )
        )}
        <button onClick={clickHandler}>Next</button>
      </div>
    </div>
  );
};

export default Form;
