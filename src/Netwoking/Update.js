import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
function Update() {
  const { register, handleSubmit } = useForm();
  const onsubmit = async () => {
    let data = JSON.stringify({
      password: "strawberry",
      email: "traidau@gmail.com",
      fullName: "DauTay",
    });

    let config = {
      method: "patch",
      maxBodyLength: Infinity,
      url: "https://training.softech.cloud/api/training/users/6461e40e8c861986383b2db0",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoiU3RyYXdiZXJyeSIsImZ1bGxuYW1lIjoiRGF1VGF5IiwiZW1haWwiOiJzdHJhd2JlcnJpZXNAZ21haWwuY29tIn0sImlhdCI6MTY4NDIyMDUzMiwiZXhwIjoxNjg0MzA2OTMyLCJhdWQiOiJzb2Z0ZWNoLmNsb3VkIiwiaXNzIjoic29mdGVjaC5jbG91ZCIsInN1YiI6IjY0NjFlNDBlOGM4NjE5ODYzODNiMmRiMCJ9.coeYiT7V2q5DnMZZTfK1ZmpwiPzNb4wGtz3WX2-W9yzwmG6wSZHKGbD_EADjwjkrLSJDsfGc1oQjePJ8RI-xIw",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Form onSubmit={handleSubmit(onsubmit)}>
      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        placeholder="Please enter your password"
        type="password"
      />

      <label htmlFor="email">email</label>
      <input
        id="email"
        name="email"
        placeholder="Please enter your email"
        type="email"
      />
      <label htmlFor="fullName">fullName</label>
      <input
        id="fullName"
        name="fullName"
        placeholder="Please enter your fullName"
        type="fullName"
      />

      <button type="submit">Login</button>
    </Form>
  );
}

export default Update;
