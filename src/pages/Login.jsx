import React from "react";
import ButtonForm from "../components/ButtonForm";
import FormLogin from "../components/FormLogin";
import GoogleAuthButton from "../components/GoogleAuthButton";
import NavbarHome from "../components/NavbarHome";

const Login = () => {
  return (
    <>
      <NavbarHome />
      <FormLogin />
    </>
  );
};

export default Login;
