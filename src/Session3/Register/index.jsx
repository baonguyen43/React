import React, { useCallback, useMemo, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./sign-in.css";

const REGISTER_STEP = {
  EMAIL_STEP: 1,
  INFO_STEP: 2,
  SUCCESS_STEP: 3,
};

function RegiterForm(props) {
  const [currentStep, setCurrentStep] = useState(REGISTER_STEP.EMAIL_STEP);

  // -------------XÉT ĐIỀU KIỆN EMAIL STEP 1
  const validationEmail = useFormik({
    initialValues: {
      email: "",
    },

    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email format").required("Required!"),
    }),

    onSubmit: (values) => {
      setCurrentStep((step) => step + 1);
    },
  });
  // -------------XÉT ĐIỀU KIỆN STEP 2
  const validationInfo = useFormik({
    initialValues: {
      name: "",
      password: "",
      confirmPassword: "",
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "Mininum 2 characters")
        .max(50, "Maximum 50 characters")
        .required("Name Required!"),
      password: Yup.string()
        .min(6, "Minimum 6 characters")
        .required("Password Required!"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Password's not match")
        .required("Re-Password Required!"),
    }),

    onSubmit: (values) => {
      const { name, password, confirmPassword } = values;

      const data = {
        name,
        password,
        confirmPassword,
        email: validationEmail.values.email,
      };
      setCurrentStep(REGISTER_STEP.SUCCESS_STEP);
    },
  });

  const buttonContent = useMemo(() => {
    switch (currentStep) {
      case REGISTER_STEP.EMAIL_STEP:
        return "Continue";
      case REGISTER_STEP.INFO_STEP:
        return "Agree and continue";

      default:
        return "Next step";
    }
  }, [currentStep]);

  const onclickButton = useCallback(
    (e) => {
      e.preventDefault();
      if (currentStep === REGISTER_STEP.EMAIL_STEP) {
        validationEmail.handleSubmit();
      }
    },
    [currentStep, validationEmail, validationInfo]
  );

  const getTitle = useMemo(() => {
    switch (currentStep) {
      case REGISTER_STEP.EMAIL_STEP:
        return <h1 className="h3 mb-3 fw-normal">Hi! </h1>;
      case REGISTER_STEP.INFO_STEP:
        return <h1 className="h3 mb-3 fw-normal">Sign up</h1>;
      case REGISTER_STEP.SUCESS_STEP:
        return <h1 className="h3 mb-3 fw-normal">Registed success!!!</h1>;
      default:
        return;
    }
  }, [currentStep]);
  const isErrorEmail = useMemo(() => {
    if (validationEmail.errors?.email && validationEmail.touched?.email) {
      return true;
    }
    return false;
  }, [validationEmail.errors?.email, validationEmail.touched?.email]);

  const isErrorInfo = (fieldName) => {
    if (validationInfo.errors[fieldName] && validationInfo.touched[fieldName]) {
      return true;
    }
    return false;
  };

  return (
    <div className="container-fluid h-full d-flex ">
      <main className="form-signin w-100 m-auto">
        <p className="text-success"> {getTitle} </p>

        {currentStep === REGISTER_STEP.EMAIL_STEP && (
          <>
            <div className="input-group has-validation mb-4">
              <div className={`form-floating ${isErrorEmail && "is-invalid"}`}>
                <input
                  type="text"
                  className={`form-control ${isErrorEmail && "is-invalid"}`}
                  id="floatingEmail"
                  placeholder="name@example.com"
                  name="email"
                  value={validationEmail.values.email}
                  onChange={validationEmail.handleChange}
                  onBlur={validationEmail.handleBlur}
                />

                <label htmlFor="floatingEmail">Email</label>
              </div>
              {isErrorEmail && (
                <div className="invalid-feedback">
                  {validationEmail.errors?.email}
                </div>
              )}
            </div>
            <button
              className="btn btn-success w-100 py-2"
              type="submit"
              onClick={onclickButton}
            >
              {buttonContent}
            </button>
            <p className="mt-3 mb-0 text-start fw-normal  text-white ">
              Do you already have an account?{" "}
              <span className="fw-bolder text-success">Sign up </span>{" "}
            </p>
            <p className="fw-bolder text-success"> Forgot your password </p>
          </>
        )}

        {/* --------------page 2  */}
        {currentStep === REGISTER_STEP.INFO_STEP && (
          <>
            <div className="input-group has-validation mb-4">
              <div
                className={`form-floating ${
                  isErrorInfo("name") && "is-invalid"
                }`}
              >
                <input
                  type="text"
                  className={`form-control ${
                    isErrorInfo("name") && "is-invalid"
                  }`}
                  id="floatingName"
                  placeholder="Name"
                  name="name"
                  value={validationInfo.values.name}
                  onChange={validationInfo.handleChange}
                  onBlur={validationInfo.handleBlur}
                />

                <label htmlFor="floatingName">Name</label>
              </div>
              {isErrorInfo("name") && (
                <div className="invalid-feedback">
                  {validationInfo.errors?.name}
                </div>
              )}
            </div>

            <div className="input-group has-validation mb-4">
              <div
                className={`form-floating ${
                  isErrorInfo("password") && "is-invalid"
                }`}
              >
                <input
                  type="password"
                  className={`form-control ${
                    isErrorInfo("password") && "is-invalid"
                  }`}
                  id="floatingPass"
                  placeholder="***"
                  name="password"
                  value={validationInfo.values.password}
                  onChange={validationInfo.handleChange}
                  onBlur={validationInfo.handleBlur}
                />

                <label htmlFor="floatingPass">Password</label>
              </div>
              {isErrorInfo("password") && (
                <div className="invalid-feedback">
                  {validationInfo.errors?.password}
                </div>
              )}
            </div>

            <div className="input-group has-validation mb-4">
              <div
                className={`form-floating ${
                  isErrorInfo("confirmPassword") && "is-invalid"
                }`}
              >
                <input
                  type="password"
                  className={`form-control ${
                    isErrorInfo("confirmPassword") && "is-invalid"
                  }`}
                  id="floatingRePass"
                  placeholder="***"
                  name="confirmPassword"
                  value={validationInfo.values.confirmPassword}
                  onChange={validationInfo.handleChange}
                  onBlur={validationInfo.handleBlur}
                />

                <label htmlFor="floatingRePass">Re-Password</label>
              </div>
              {isErrorInfo("confirmPassword") && (
                <div className="invalid-feedback">
                  {validationInfo.errors?.confirmPassword}
                </div>
              )}
            </div>
            <p className="mt-3 mb-0 text-start fw-normal  text-white ">
             By selecting Agree and cotinue below,
              <div> I agree to
              <span className="fw-bolder text-success">Term of Service and Privacy Policy </span>{" "} </div> 
            </p>
            <button
              className="btn btn-success w-100 py-2"
              type="submit"
              onClick={onclickButton}
            >
              {buttonContent}
            </button>
         
          </>
        )}

        {/* --------------page 3  */}
        {currentStep === REGISTER_STEP.SUCCESS_STEP && (
          <>
            <div class="p-3 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3">
              Registed success!!!
            </div>
          </>
        )}

        {/* {currentStep !== REGISTER_STEP.SUCCESS_STEP && (
          <button
            className="btn btn-primary w-100 py-2"
            type="submit"
            onClick={onclickButton}
          >
            
            {buttonContent}
          </button>
        )} */}
      </main>
    </div>
  );
}

export default RegiterForm;
