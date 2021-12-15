import React from "react";
// import MUIDataTable from "mui-datatables";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";

const Table = ({ title, columns, data }) => {
  const tableData = {
    columns,
    data,
  };

//   const paginationComponentOptions = {
//     rowsPerPageText: "Rows Per Page",
//     rangeSeparatorText: "to",
//     selectAllRowsItem: true,
//     selectAllRowsItemText: "all",
//   };

  return (
    <div>
      {/* <MUIDataTable
        title={"Employee List"}
        data={data}
        columns={columns}
        options={options}
      /> */}
      <DataTableExtensions {...tableData}>
        <DataTable
          columns={columns}
          data={data}
          noHeader
          defaultSortField="id"
          defaultSortAsc={false}
          pagination
          highlightOnHover
          export={true}
        />
      </DataTableExtensions>
    </div>
  );
};

export default Table;
