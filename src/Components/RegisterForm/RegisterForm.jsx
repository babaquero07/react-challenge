import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import style from "./RegisterForm.module.css";
import Swal from "sweetalert2";

const RegisterForm = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      gitHubUserName: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      lastName: Yup.string().required("Required"),
      gitHubUserName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .required("Password is required")
        .min(8, "Password is too short - should be 8 chars minimum."),
    }),
    onSubmit: (values) => {
      localStorage.setItem("user", JSON.stringify(values));
      Swal.fire({
        icon: "success",
        title: "Successful registration. You'll be redirected to login page",
      });
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={style.formContainer}>
      <h2>Register</h2>
      <input
        id="firstName"
        name="firstName"
        type="text"
        placeholder="First name"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.firstName}
      />
      {formik.touched.firstName && formik.errors.firstName ? (
        <div className={style.inputError}>{formik.errors.firstName}</div>
      ) : null}

      <input
        id="lastName"
        name="lastName"
        type="text"
        placeholder="Last name"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.lastName}
      />
      {formik.touched.lastName && formik.errors.lastName ? (
        <div className={style.inputError}>{formik.errors.lastName}</div>
      ) : null}

      <input
        id="gitHubUserName"
        name="gitHubUserName"
        type="text"
        placeholder="Your GitHub user name"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.gitHubUserName}
      />
      {formik.touched.gitHubUserName && formik.errors.gitHubUserName ? (
        <div className={style.inputError}>{formik.errors.gitHubUserName}</div>
      ) : null}

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
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
