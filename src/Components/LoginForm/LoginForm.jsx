import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useFormik } from "formik";
import * as Yup from "yup";
import style from "../RegisterForm/RegisterForm.module.css";

const LoginForm = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: ({ email, password }) => {
      const user = JSON.parse(localStorage.getItem("user"));
      if (user.email === email && user.password === password) {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });
        Toast.fire({
          icon: "success",
          title: "Signed in successfully",
        });
        setTimeout(() => {
          navigate("/userView");
        }, 3020);
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Invalid credentials",
        });
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={style.formContainer}>
      <h2>Login</h2>

      <input
        id="email"
        name="email"
        type="email"
        placeholder="Email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <div className={style.inputError}>{formik.errors.email}</div>
      ) : null}

      <input
        id="password"
        name="password"
        type="password"
        placeholder="Password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
      />
      {formik.touched.password && formik.errors.password ? (
        <div className={style.inputError}>{formik.errors.password}</div>
      ) : null}

      <button className={style.registerButton} type="submit">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
