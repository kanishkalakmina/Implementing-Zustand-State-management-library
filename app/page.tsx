"use client";
import React from "react";
import useSelectedDataStore from "../lib/store";

export type DoctorData = {
  name: string | null;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
};

export interface SelectedData {
  name: string;
  firstName: string;
  lastName: string;
  email: string;
}

function ApiComponent() {
  const updateSelectedData = useSelectedDataStore(
    (state: any) => state.updateSelectedData
  );
  const SelectedData = useSelectedDataStore((state: any) => state.selectedData);
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl =
          "https://api.dev.bisteccare.com/api/doctors/c37bb17d-8fda-43df-2410-08dbbb41d26f/getById/0931a5b4-772d-4151-5774-08dbbb422a46";
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error(`Request failed with status: ${response.status}`);
        }

        const data = await response.json();

        if (data.data.length > 0) {
          // Extract the desired data from the API response
          const selectedDataa: SelectedData = {
            name: data.data[0].name || "",
            firstName: data.data[0].firstName || "",
            lastName: data.data[0].lastName || "",
            email: data.data[0].email || "",
          };

          updateSelectedData(selectedDataa);
        } else {
          console.error("Data not found in the response.");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [updateSelectedData]);

  return (
    <div>
      Fetching data...
      {/* You can add more content or loading indicators here */}
      {SelectedData.name && <p>Name: {SelectedData.name}</p>}
      {SelectedData.email && <p>Email: {SelectedData.email}</p>}
    </div>
  );
}

export default ApiComponent;
