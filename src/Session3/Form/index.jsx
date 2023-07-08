import React, { useCallback, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from './LoginForm.module.css';
function LoginForm() {
  const validation = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      prePassword: "",
     
    },

    validationSchema: Yup.object({
      username: Yup.string()
        .min(6, "Mininum 6 characters")
        .max(15, "Maximum 15 characters")
        .required("Required!"),
      email: Yup.string()
        .email("Invalid email format")
        .required("Required!"),
      password: Yup.string()
        .min(8, "Minimum 8 characters")
        .required("Required!"),
        prePassword: Yup.string()
        .oneOf([Yup.ref("password")], "Password's not match")
        .required("Required!")})  , 

    onSubmit : values  => {
      console.log ('notice', values) ;
     } 
  });
// set tên sẵn trong form 
  // const [name, setName] = useState("Nguyen");

    // const onSubmit = useCallback((e) => {
    //   e.preventDefault(); 
    
    // },[])
  return (
    <div className={styles.container}> 
         
    <form onSubmit={validation.handleSubmit}>
      <div>
        <label>User Name</label>
        <input type="text" name="username" 
        // set tên sẵn trong form 
        //  value ={name}
        //   onChange={(e) => setName(e.target.value)} 

        value={validation.values.username}
        onChange={validation.handleChange}
        style={{
          borderColor: validation.errors?.username ?' red' :' black'
        }}
         />
         <div> {validation.errors?.username} </div> 
      </div>

      <div>
        <label>Email</label>
        <input type="text" name="email" value={validation.values.email} 
        onChange={validation.handleChange}
        style={{ 
          borderColor: validation.errors?.email ?' red' :' black'
        }}/>
          <div> {validation.errors?.email} </div>
      </div>

      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={validation.values.password}
          onChange={validation.handleChange}
          style={{ 
            borderColor: validation.errors?.password ?' red' :' black'
          }}
        />
          <div> {validation.errors?.password} </div>
      </div>

      <div>
        <label>Confirm Password</label>
        <input
          type="password"
          name="prePassword"
          value={validation.values.prePassword}
          onChange={validation.handleChange}
          style={{ 
            borderColor: validation.errors?.prePassword ?' red' :' black'
          }}
        />
         <div> {validation.errors?.prePassword} </div>
      </div>
      
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
    </div>
  );
}

export default LoginForm;
