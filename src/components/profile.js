import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Profile = () => {
  const { Name, Age, IsMale } = useSelector((state) => {
    return state;
  });

  let dispatch = useDispatch();

  function handleButton() {
    dispatch({ type: "UPDATE_NAME", payload: "Asim" });
  }
  return (
    <div style={{ marginTop: "20px", paddingRight: "20px" }}>
      <center>
        <p>My name is : {Name}</p>
        <p>My age is : {Age}</p>

        <p>I am : {IsMale.toString()}</p>
        <p></p>
        <button
          onClick={(e) => {
            e.preventDefault();
            handleButton();
          }}
        >
          UpdateName
        </button>
      </center>
    </div>
  );
};

export default Profile;
