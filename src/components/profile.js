import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const { Name, Age, IsMale } = useSelector((state) => {
    return state;
  });
  return <div style={{ marginTop: "20px" }}>{(Name, Age, IsMale)}</div>;
};

export default Profile;
