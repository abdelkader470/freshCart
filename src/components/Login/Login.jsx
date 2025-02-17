import { useContext, useState } from "react";
import { ClipLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import { tokenContext } from "../../context/tokenContext";
const Login = () => {
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState(null);
  let { setToken } = useContext(tokenContext);
  let navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
  };
  const loginForm = useFormik({
    initialValues,
    validate: (values) => {
      const errors = {};

      if (!values.email) {
        errors.email = "Email is required";
      } else if (!/^\S+@\S+\.\S+$/i.test(values.email)) {
        errors.email = "Invalid email address";
      }
      if (!values.password) {
        errors.password = "Password is required";
      } else if (values.password.length < 8) {
        errors.password = "Password must be at least 8 characters long";
      }

      return errors;
    },

    onSubmit: callLogin,
  });

  async function callLogin(values) {
    try {
      setLoading(true);
      setApiError(null);
      let { data } = await axios.post(
        `https://ecommerce.routemisr.com/api/v1/auth/signin`,
        values
      );
      console.log(data);
      localStorage.setItem("userToken", data.token);
      setToken(data.token);
      setLoading(false);
      navigate("/");
    } catch (error) {
      setApiError(error.response.data.message);
      setLoading(false);
    }
  }
  return (
    <>
      <form onSubmit={loginForm.handleSubmit} className="w-[50%] mx-auto">
        <h1 className="text-4xl text-gray-600 mb-5">Login Now: </h1>
        {apiError ? (
          <div
            className="p-2 mb-4 text-sm text-red-800 rounded-lg  bg-red-50 dark:bg-gray-800 dark:text-red-400"
            role="alert"
          >
            {apiError}
          </div>
        ) : (
          ""
        )}

        <div className="relative z-0 w-full mb-5 group">
          <input
            type="email"
            name="email"
            id="floating_email"
            value={loginForm.values.email}
            onChange={loginForm.handleChange}
            onBlur={loginForm.handleBlur}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-main focus:outline-none focus:ring-0 focus:border-main peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-main peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            User Email
          </label>
          {loginForm.errors.email && loginForm.touched.email ? (
            <div
              className="p-2 mb-4 text-sm text-red-800 rounded-lg  bg-red-50 dark:bg-gray-800 dark:text-red-400"
              role="alert"
            >
              {loginForm.errors.email}
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="password"
            name="password"
            id="floating_password"
            value={loginForm.values.password}
            onChange={loginForm.handleChange}
            onBlur={loginForm.handleBlur}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-main focus:outline-none focus:ring-0 focus:border-main peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_password"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-main peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            User Password
          </label>
          {loginForm.errors.password && loginForm.touched.password ? (
            <div
              className="p-2 mb-4 text-sm text-red-800 rounded-lg  bg-red-50 dark:bg-gray-800 dark:text-red-400"
              role="alert"
            >
              {loginForm.errors.password}
            </div>
          ) : (
            ""
          )}
        </div>

        {loading ? (
          <div className="w-auto flex justify-end">
            <div className="bg-main p-2 rounded-md">
              <ClipLoader size={20} />
            </div>
          </div>
        ) : (
          <button
            type="submit"
            className="text-white bg-main hover:bg-main focus:ring-4 focus:outline-none block ml-auto focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-main dark:hover:bg-main dark:focus:ring-blue-800"
          >
            Submit
          </button>
        )}
      </form>
    </>
  );
};

export default Login;
