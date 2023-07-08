import React from "react";
import axios from "axios";
function GetAll() {
  const [users, setUsers] = React.useState([]);
  React.useEffect(() => {
    const data = JSON.stringify({
      password: "duatrai",
      email: "traidua@gmail.com",
      fullName: "Traidua",
    });

    const config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "https://training.softech.cloud/api/training/users",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoiTEVuZSIsImZ1bGxuYW1lIjoiQ29jb051dCIsImVtYWlsIjoiZm5AZ21haWwuY29tIn0sImlhdCI6MTY4NDEyNTQzOSwiZXhwIjoxNjg0MjExODM5LCJhdWQiOiJzb2Z0ZWNoLmNsb3VkIiwiaXNzIjoic29mdGVjaC5jbG91ZCIsInN1YiI6IjY0NjFhZTcxOGM4NjE5ODYzODNiMmRhYSJ9.GLBdHIUM3XOLAlDJqDy7DSb_XH0c43Pt3VcJ3Af73IC6z9uoCnqifCn7bCAdJ933DscLez4RlMgvGSODB5_-vQ",
      },
      data: data,
    };
    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      {" "}
      LIST
      <ul>
        {" "}
        {users.map((user, index) => {
          return <li> {user.fullName} </li>;
        })}{" "}
      </ul>
    </div>
  );
}

export default GetAll;
