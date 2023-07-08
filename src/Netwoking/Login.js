import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  username: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
});

function Login() {
  return (
    <div>
      <Formik
        validationSchema={LoginSchema}
        initialValues={{
          username: "lnbnguyen",
          password: "123",
        }}
        onSubmit={async (values) => {
          // console.log(values);
          // const data = values;
          // const url = "https://server.aptech.io/training/auth/login";
          // fetch(url, {
          //   method: "POST",
          //   headers: {
          //     "Content-Type": "application/json",
          //   },
          //   body: JSON.stringify(data),
          // })
          //   .then((response) => response.json())
          //   .then((json) => {
          //     // Xử lý kết quả JSON ở đây
          //     console.log(json);
          //     if (json.login) {
          //       alert("Login ok");
          //     } else {
          //       alert("Login Failed");
          //     }
          //   })
          //   .catch((error) => {
          //     // Nếu có lỗi
          //     console.error(error);
          //   });

          // --USE ASYNC /AWAIT--
          try {
            const data = values;

            const url = "https://server.aptech.io/training/auth/login";
            const response = await fetch(url, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
            });

            // Xử lý kết quả JSON ở đây
            const json = await response.json();
            console.log(json);
            if (json.login) {
              alert("Login  ASYNC /AWAIT");
            } else {
              alert("Login Failed ASYNC /AWAIT");
            }
          } catch (error) {
            // Nếu có lỗi
            console.error(error);
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

export default Login;
