import axios from "axios";
import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  email: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
});
function LoginAxois31() {
  return (
    <div>
      <Formik
        validationSchema={LoginSchema}
        initialValues={{
          email: "nv03@gmail.com",
          password: "123456",
        }}
        onSubmit={async (values) => {
          const data = values;
          const url =
            "https://batch-293-0-nodejs.onrender.com/admin/employees/login";
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
          <label htmlFor="email">email</label>
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
          <div style={{ color: "red" }}>
            <ErrorMessage name="email" />
          </div>

          <button type="submit">Login</button>
        </Form>
      </Formik>
    </div>
  );
}

export default LoginAxois31;
