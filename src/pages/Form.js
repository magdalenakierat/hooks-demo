import React, { useState } from "react";
import { nanoid } from "nanoid";

export const Form = ({ onCreateUser }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <>
      <h2>Form</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          onCreateUser({ firstName, lastName, id: nanoid() });
        }}
      >
        <input
          type="text"
          value={firstName}
          onChange={(event) => {
            setFirstName(event.target.value);
          }}
        />
        <input
          type="text"
          value={lastName}
          onChange={(event) => {
            setLastName(event.target.value);
          }}
        />
        <button>Submit</button>
      </form>
    </>
  );
};
