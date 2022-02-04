import React, { useState } from "react";
import {
  LoginWrapper,
  Form,
  Input,
  Button,
  LoginContainer,
  LoginH,
} from "./LoginElements";

const Login = () => {
  const [formFields, setFormFields] = useState({
    username: "",
    password: "",
  });

  function handleInputChange(e) {
    setFormFields((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  }

  function handleClick(e) {
    e.preventDefault();
    console.log(formFields);
  }
  return (
    <>
      <LoginContainer>
        <LoginWrapper>
          <LoginH> Welcome to the Client Portal!</LoginH>

          <Form>
            <Input
              value={formFields.username}
              onChange={handleInputChange}
              type="text"
              name="username"
              placeholder="username"
            />
            <Input
              value={formFields.password}
              onChange={handleInputChange}
              type="password"
              name="password"
              placeholder="password"
            />
            <Button onClick={handleClick}>Submit</Button>
          </Form>
        </LoginWrapper>
      </LoginContainer>
    </>
  );
};

export default Login;
