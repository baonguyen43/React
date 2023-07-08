import axios from "axios";
import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const RegisterSchema = Yup.object().shape({
  username: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
  email: Yup.string().required("Required"),
  fullName: Yup.string().required("Required"),
});
function Register() {
  return (
    <div>
      <Formik
        validationSchema={RegisterSchema}
        initialValues={{
          username: "lnbnguyen",
          email: "baonguyen@softech.edu.vn",
          password: "123",
          fullName: "LNB Nguyên",
        }}
        onSubmit={async (values) => {
          const data = values;
          const url =
            "https://training.softech.cloud/api/training/users/register";
          try {
            // Promise
            const response = await axios.post(url, data);
            console.log(response.data);
          } catch (err) {
            console.error(err);
            console.log("Login thất bại");
          }
        }}
      >
        <Form>
          <label htmlFor="username">Username</label>
          <Field
            id="username"
            name="username"
            placeholder="Please enter your Username"
            type="username"
          />
          <label htmlFor="email">Email</label>
          <Field
            id="email"
            name="email"
            placeholder="Please enter your email"
            type="email"
          />
          <div style={{ color: "red" }}>
            <ErrorMessage name="email" />
          </div>
          <label htmlFor="password">Password</label>
          <Field
            id="password"
            name="password"
            placeholder="Please enter your password"
            type="password"
          />

          <label htmlFor="fullName">Fullname</label>
          <Field
            id="fullName"
            name="fullName"
            placeholder="Please enter your fullname"
            type="fullName"
          />

          <button type="submit">Register </button>
        </Form>
      </Formik>
    </div>
  );
}

export default Register;
