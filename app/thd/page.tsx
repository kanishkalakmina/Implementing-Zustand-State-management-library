"use client";
import React from "react";
import useStore from "../../lib/store"; // Import your Zustand store

const Page2: React.FC = () => {
  const { data, selectedData } = useStore();

  return (
    <div>
      <h1>Data from Page 1:</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div>
        <h1>Selected Data:</h1>
        <ul>
          <li>Name: {selectedData.name}</li>
          <li>First Name: {selectedData.firstName}</li>
          <li>Last Name: {selectedData.lastName}</li>
          <li>Email: {selectedData.email}</li>
        </ul>
      </div>
    </div>
  );
};

export default Page2;
