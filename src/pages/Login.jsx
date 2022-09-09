import React from "react";
import ButtonForm from "../components/ButtonForm";
import GoogleAuthButton from "../components/GoogleAuthButton";
import NavbarHome from "../components/NavbarHome";
import FieldInput from "./FieldInput";

const Login = () => {
  return (
    <>
      <NavbarHome />
      <div className="py-6 flex items-center min-h-screen">
        <div className="flex w-full bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
          <div
            className="hidden lg:block lg:w-1/2 bg-cover"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")',
            }}
          ></div>
          <form className="w-full p-8 lg:w-1/2" onSubmit={handleSubmit}>
            <h2 className="text-2xl font-semibold text-gray-700 text-center">
              Brand
            </h2>
            <p className="text-xl text-gray-600 text-center">Welcome back!</p>
            <GoogleAuthButton />
            <div className="mt-4 flex items-center justify-between">
              <span className="border-b w-1/5 lg:w-1/4" />
              <a
                href="#"
                className="text-xs text-center text-gray-500 uppercase"
              >
                or login with email
              </a>
              <span className="border-b w-1/5 lg:w-1/4" />
            </div>
            <FieldInput id="email" type="email" label="Email Adress" />
            <FieldInput id="password" type="password" label="Password" />
            <ButtonForm text="Login" type="submit" />
            <div className="mt-4 flex items-center justify-between">
              <span className="border-b w-1/5 md:w-1/4" />
              <a href="#" className="text-xs text-gray-500 uppercase">
                or sign up
              </a>
              <span className="border-b w-1/5 md:w-1/4" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
