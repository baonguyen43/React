import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
function Delete() {
  const { register, handleSubmit } = useForm();
  const [allUser, setAllUser] = React.useState([]);

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
    console.log("formData", formData);
    // Lay id tu username nguoi dung nhap
    if (formData) {
      const userDelete = allUser.filter(
        (x) => x.username === formData.username
      );
      //ket thuc Lay id tu username nguoi dung nhap

      // xoa user = id
      deleteUser(userDelete?.[0]?._id);
      console.log(userDelete?.[0]?._id);
    }
  };

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

  React.useEffect(() => {
    getAllUser();
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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

export default Delete;
