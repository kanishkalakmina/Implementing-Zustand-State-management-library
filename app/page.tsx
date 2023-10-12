"use client";
import React, { useEffect } from "react";
import useStore from "../lib/store";
import Link from "next/link";
import axios from "axios";

const Page1: React.FC = () => {
  const { addData, setSelectedData, data, selectedData } = useStore();

  useEffect(() => {
    fetchDataAndSetToStore();
  }, []);

  const fetchDataAndSetToStore = async () => {
    try {
      const response = await axios.get("your api");

      const responseData = response.data;

      const dataToStore = {
        name: responseData.data[0].name || "",
        firstName: responseData.data[0].firstName || "",
        lastName: responseData.data[0].lastName || "",
        email: responseData.data[0].email || "",
      };

      // Set the selected data in the store
      setSelectedData(dataToStore);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleAddData = () => {
    addData("Some data to share");
  };

  return (
    <div>
      <button onClick={handleAddData}>Add Data</button>
      <div>
        <h1>Data from Page 1:</h1>
        <ul>
          {data.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div>
        <h1>Selected Data:</h1>
        <ul>
          <li>Name: {selectedData.name}</li>
          <li>First Name: {selectedData.firstName}</li>
          <li>Last Name: {selectedData.lastName}</li>
          <li>Email: {selectedData.email}</li>
        </ul>
      </div>
      <Link href="/sec">Go to Page 2</Link>
    </div>
  );
};

export default Page1;
