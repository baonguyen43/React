import axios from "axios";
import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  username: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
});
function LoginAxois() {
  return (
    <div>
      <Formik
        validationSchema={LoginSchema}
        initialValues={{
          username: "lnbnguyen",
          password: "123",
        }}
        onSubmit={async (values) => {
          const data = values;
          const url = "https://training.softech.cloud/api/training/users/login";
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
            placeholder="Please enter your email"
            type="username"
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
          <div style={{ color: "red" }}>
            <ErrorMessage name="email" />
          </div>

          <button type="submit">Login</button>
        </Form>
      </Formik>
    </div>
  );
}

export default LoginAxois;
