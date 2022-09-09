import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MusicContext from "../data/AppContext";
import { setDataStorage, verifyUserConnect } from "../data/utilsFunc";
import GoogleAuthButton from "./GoogleAuthButton";

const FormLogin = () => {
  const navigate = useNavigate();

  const { userIsConnect, setUserIsConnect } = MusicContext();
  const [stateForm, setStateForm] = useState({
    email: "",
    password: "",
    username: "",
    valid: false,
    connected: false,
    messageAlert: "",
  });
  const validDataLength = (value, el, dataLength) => {
    if (value.length < dataLength) {
      el.style.borderColor = "red";
      setStateForm((data) => ({ ...data, valid: false }));
    } else {
      el.style.borderColor = "transparent";
      setStateForm((data) => ({ ...data, valid: true }));
    }
  };
  const validEmail = (target) => {
    if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(target.value)) {
      return true;
    }
    target.style.borderColor = "red";
    return false;
  };
  const handleChange = useCallback(({ target }) => {
    const name = target.name;
    const type = target.type;
    const value = target.value.trim();
    setStateForm((data) => ({ ...data, [name]: value }));
    validDataLength(value, target, 3);
    if (type === "password") {
      validDataLength(value, target, 8);
    }

    if (type === "email") {
      setStateForm((data) => ({ ...data, valid: validEmail(target) }));
    }
  });
  const handleSubmit = (evt) => {
    evt.preventDefault();
    // "Les données entrer sont invalides"
    const formData = {};
    if (stateForm.valid) {
      formData.email = stateForm.email;
      formData.password = stateForm.password;
      formData.username = stateForm.username;
      setDataStorage("userData", formData);
      console.log(formData, verifyUserConnect());
      verifyUserConnect();
      setUserIsConnect(true);
      setStateForm((data) => ({
        ...data,
        connected: true,
      }));
    } else {
      setStateForm((data) => ({
        ...data,
        messageAlert: "Les données entrer sont invalides",
      }));
    }
  };
  useEffect(() => {
    if (verifyUserConnect()) {
      navigate("/dashboard");
    }
  }, [userIsConnect]);
  return (
    <div className="py-6 flex items-center min-h-screen bg-app-linear">
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
          <p
            className={
              stateForm.messageAlert.length < 1
                ? "text-xl text-gray-600 text-center"
                : "text-xl text-red-600 text-center"
            }
          >
            {stateForm.messageAlert.length < 2
              ? "Welcome back!"
              : stateForm.messageAlert}
          </p>
          <GoogleAuthButton />
          <div className="mt-4 flex items-center justify-between">
            <span className="border-b w-1/5 lg:w-1/4" />
            <a href="#" className="text-xs text-center text-gray-500 uppercase">
              or login with email
            </a>
            <span className="border-b w-1/5 lg:w-1/4" />
          </div>
          <div className="mt-4">
            <label
              htmlFor="username"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Username
            </label>
            <input
              name="username"
              onChange={handleChange}
              onInput={handleChange}
              id="username"
              className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
              placeholder=""
              type="text"
              value={stateForm.username}
            />
          </div>
          <div className="mt-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email Adress
            </label>
            <input
              name="email"
              onChange={handleChange}
              onInput={handleChange}
              id="email"
              className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
              placeholder=""
              type="email"
              value={stateForm.email}
            />
          </div>
          <div className="mt-4">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              onChange={handleChange}
              onInput={handleChange}
              id="password"
              autoComplete="true"
              className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
              placeholder=""
              name="password"
              value={stateForm.password}
              type="password"
            />
          </div>
          <div className="mt-8">
            <button
              disabled={!stateForm.valid}
              type="submit"
              className="bg-gray-700 text-white cursor-pointer font-bold py-2 px-4 w-full rounded hover:bg-gray-600"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormLogin;
