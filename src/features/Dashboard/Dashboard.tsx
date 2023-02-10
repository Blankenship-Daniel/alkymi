import React, { useState } from "react";
import Table from "../../common/components/Table/Table";
import { useGetTableDataQuery, useUpdateTableDataMutation } from "../../services/table";
import "./Dashboard.css";

const Dashboard = () => {
  const queryData = useGetTableDataQuery();
  const [updateTableData, mutationResult] = useUpdateTableDataMutation();
  const { data, error, isLoading } = queryData;
  const [selectedRecords, setSelectedRecords] = useState<string[]>([]);

  const onSelect = (uuid: string) => {
    setSelectedRecords([...selectedRecords, uuid]);
  };

  const removeRecords = async () => {    
    const result = await updateTableData({ selectedRecords });
    console.log("result", result);
  };

  return (
    <>
      <header>
        <h3>Data Inbox</h3>
      </header>
      <div className="Dashboard">
        <button onClick={removeRecords} className="RemoveBtn">
          Remove
        </button>
        {error && <div>We encountered fetching your request</div>}
        {isLoading && <div>Loading...</div>}
        {data && <Table onChange={onSelect} tableData={data} />}
      </div>
    </>
  );
};

export default Dashboard;
