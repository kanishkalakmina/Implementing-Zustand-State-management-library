"use client";
import React from "react";
import useStore from "../lib/store"; // Import your Zustand store
import Link from "next/link";

const Page1: React.FC = () => {
  const { addData, data } = useStore();

  const handleAddData = () => {
    addData("Some data to share");
  };

  return (
    <div>
      <button onClick={handleAddData}>Add Data</button>
      {data}
      <Link href="/sec">Go to Page 2</Link>
    </div>
  );
};

export default Page1;
