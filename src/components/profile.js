import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { locationCurrent } from "../function";

const Profile = () => {
  const { Name, Age, location } = useSelector((state) => {
    return state;
  });

  let dispatch = useDispatch();

  function handleButton() {
    dispatch({ type: "UPDATE_NAME", payload: "Asim" });
  }

  function handleAge() {
    dispatch({ type: "UPDATE_AGE", payload: 19 });
  }

  function UpdateLocation(status) {
    let dipatchState = locationCurrent(status);
    dispatch(dipatchState);
  }
  return (
    <div style={{ marginTop: "20px", paddingRight: "20px" }}>
      <center>
        <p>My name is : {Name}</p>
        <p>My age is : {Age}</p>

        <p>I am : {location}</p>
        <p></p>
        <button
          onClick={(e) => {
            e.preventDefault();
            handleButton();
          }}
        >
          UpdateName
        </button>
        <br></br>
        <button
          onClick={(e) => {
            e.preventDefault();
            handleAge();
          }}
        >
          UpdateAge
        </button>
        <br></br>
        <br></br>
        <button
          onClick={(e) => {
            e.preventDefault();
            UpdateLocation("bangladesh");
          }}
        >
          UpdateLocation
        </button>
      </center>
    </div>
  );
};

export default Profile;
