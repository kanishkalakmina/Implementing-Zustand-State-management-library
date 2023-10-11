"use client";
import React from "react";
import useSelectedDataStore from "../../lib/store";

interface SelectedData {
  name: string;
  firstName: string;
  lastName: string;
  email: string;
}

function AnotherPage() {
  const selectedData = useSelectedDataStore((state: any) => state.selectedData);

  return (
    <>
      <>kkk</>
      {selectedData.name && <p>Name: {selectedData.name}</p>}
      {selectedData.email && <p>Name: {selectedData.email}</p>}
    </>
  );
}

export default AnotherPage;
