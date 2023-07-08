import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

function Search() {
  const { register, handleSubmit } = useForm();
  const [allUser, setAllUser] = React.useState([]);
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
  console.log("List Users", allUser);
  React.useEffect(() => {
    getAllUser();
  }, []);
  const onSubmit = (formData) => {
    if (formData) {
      const userUpdate = allUser.filter(
        (x) => x.username === formData.username
      );
      console.log("Detais of User", userUpdate);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="username">User name</label>
        <input
          id="username"
          placeholder="Pls enter your username"
          type="text"
          {...register("username")}
        />
        <button type="submit"> Sreach / Show </button>
      </form>
    </div>
  );
}

export default Search;
