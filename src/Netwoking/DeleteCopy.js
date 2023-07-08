import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
function DeleteCopy() {
  const [allUser, setAllUser] = React.useState([]);
  const { register, hanldeSubmit } = useForm();
  const getAllUser = async () => {
    await axios
      .get("https://training.softech.cloud/api/training/users", {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoiQXBwbGUiLCJmdWxsbmFtZSI6IlRhb1RhbyIsImVtYWlsIjoiaGFsZkFwcGxlQGdtYWlsLmNvbSJ9LCJpYXQiOjE2ODQxNDQyODYsImV4cCI6MTY4NDIzMDY4NiwiYXVkIjoic29mdGVjaC5jbG91ZCIsImlzcyI6InNvZnRlY2guY2xvdWQiLCJzdWIiOiI2NDYxZTNlMDhjODYxOTg2MzgzYjJkYWYifQ.fMalr42OG-eB6p-A0hsEWuzedjiLtYr6h3bOVkURjfD3Qoxu4ML55kf-mMkDLPhD2gQAmDM1Wbf8YBcZwi6odA",
        },
      })
      .then((res) => {
        setAllUser(res.data);
      });
  };
  console.log(allUser);
  const deleteUser = async (userId) => {
    await axios
      .delete(`https://training.softech.cloud/api/training/users/${userId}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoiQXBwbGUiLCJmdWxsbmFtZSI6IlRhb1RhbyIsImVtYWlsIjoiaGFsZkFwcGxlQGdtYWlsLmNvbSJ9LCJpYXQiOjE2ODQxNDQyODYsImV4cCI6MTY4NDIzMDY4NiwiYXVkIjoic29mdGVjaC5jbG91ZCIsImlzcyI6InNvZnRlY2guY2xvdWQiLCJzdWIiOiI2NDYxZTNlMDhjODYxOTg2MzgzYjJkYWYifQ.fMalr42OG-eB6p-A0hsEWuzedjiLtYr6h3bOVkURjfD3Qoxu4ML55kf-mMkDLPhD2gQAmDM1Wbf8YBcZwi6odA",
        },
      })
      .then((res) => {
        console.log(res);
        getAllUser();
      });
  };
  const onSubmit = (formData) => {
    console.log(formData);
    if (formData) {
      const userDelete = allUser.filter(
        (x) => x.username === formData.username
      );
      deleteUser(userDelete?.[0]._id);
      console.log("user... deleted", userDelete?.[0]?._id);
    }
  };
  return (
    <form onSubmit={hanldeSubmit(onSubmit)}>
      <label htmlFor="username">Username</label>
      <input
        id="username"
        placeholder="Please enter your Username"
        type="text"
        {...register("username")}
      />
      <button type="submit">Delete </button>
    </form>
  );
}

export default DeleteCopy;
