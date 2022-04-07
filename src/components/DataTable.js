import React, { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { makeStyles } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import Box from "@mui/material/Box";
const columns = [
  /*{
    field: 'first',
    headerClassName: 'super-app-theme--header',
    headerAlign: 'center',
    width: 140,
  } */
  {
    field: 'id',
    headerName: 'ID',
    headerClassName: 'super-app-theme--header'
  },
  {
    field: 'name',
    headerName: 'Name',
    //headerAlign: 'center',
    headerClassName: 'super-app-theme--header',
    width: 300
  },
  {
    field: 'username',
    headerName: 'Uername',
    headerClassName: 'super-app-theme--header',
    width: 600
  }
]


const DataTable = () => {


  const [tableData, setTableData] = useState([])
  //const [rows, setRows] = useState(tableData);
  //const [deletedRows, setDeletedRows] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((data) => data.json())
      .then((data) => setTableData(data))

  }, [])

  console.log(tableData);

  return (

    <div style={{ height: 600, width: '100%', left: '70%' }}>
      <Box
        sx={{
          height: 400,
          width: 1, //100%
          "& .super-app-theme--header": {
            backgroundColor: "#1565c0",
            color: "white"
          }
        }}
      >
        <DataGrid
          rows={tableData}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
        //checkboxSelection
        />
      </Box>
    </div>
  )
}

export default DataTable
