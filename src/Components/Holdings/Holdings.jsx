import React from "react";
import DataTable from "../ReUsableComponents/DataTable";
import { useAuth } from "../AuthProvider/AuthProvider";
import { useSelector } from 'react-redux';

export default function Holdings() {
   const countValue = useSelector((globalState) => globalState.Counter.count);
  const { name, obj, arr } = useAuth();

  return (
    <div>
      Holdings
      <DataTable />
    </div>
  );
}

// reUsable components
