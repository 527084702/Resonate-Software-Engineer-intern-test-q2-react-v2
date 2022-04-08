import React, { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import Box from "@mui/material/Box";
//import { makeStyles } from '@mui/material/styles';
//import { createTheme } from '@mui/material/styles';
//import Avatar from '@mui/material/Avatar';


//Format table elements
const columns = [

  /*{
    field: 'first',
    headerClassName: 'app-theme-header',
    headerAlign: 'center',
    width: 140,
  } */
  {
    field: 'id',
    headerName: 'ID',
    headerClassName: 'app-theme-header',
    width: 50,
  },
  {
    field: 'name',
    headerName: 'Name',
    //headerAlign: 'center',
    headerClassName: 'app-theme-header',
    width: 160,
  },
  {
    field: 'username',
    headerName: 'Uername',
    headerClassName: 'app-theme-header',
    width: 150,
    /*renderCell: (params)=>{
      return (
        <>
            <Avatar src={params.value.avatar} />
        </>
      )
    }*/ //test for Avatar Function
  },
  {
    field: 'address',
    headerName: 'Address',
    headerClassName: 'app-theme-header',
    width: 420,
    valueGetter: (function (params) {
      return "".concat(params.row.address.suite || '', " ") + " , " +
        "".concat(params.row.address.street || '') + " , " +
        "".concat(params.row.address.city || '') + "  " +
        "".concat(params.row.address.zipcode || '');
    })
  },
  {
    field: 'address geo',
    headerName: 'Address Lat/Long ',
    headerClassName: 'app-theme-header',
    width: 180,
    valueGetter: (function (params) {
      return "".concat(params.row.address.geo.lat || '', " ") + " , " +
        "".concat(params.row.address.geo.lng || '');
    })
  },
  {
    field: 'phone',
    headerName: 'Phone number',
    headerClassName: 'app-theme-header',
    width: 200
  },
  {
    field: 'website',
    headerName: 'Website',
    headerClassName: 'app-theme-header',
    width: 150
  },
  {
    field: 'company',
    headerName: 'Company detail',
    headerClassName: 'app-theme-header',
    width: 800,
    valueGetter: (function (params) {
      return " Name: " + "".concat(params.row.company.name || '', " ") + " , " +
        " Catchphrase: " + "".concat(params.row.company.catchPhrase || '') + " , " +
        " BS: " + "".concat(params.row.company.bs || '');
    })
  },
];

//start loading the data into tableData
const DataTable = () => {

  const [tableData, setTableData] = useState([])

  useEffect(() => {
    document.title = "Question 2: Real world problem"
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((data) => data.json())
      .then((data) => setTableData(data))
  }, [])

  console.log(tableData);

  return (
    <div style={{ height: 600, width: '100%' }}>
      <Box
        sx={{
          height: 390,
          width: 1, //100%
          "& .app-theme-header": {
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
        />
      </Box>
    </div>
  )
}

export default DataTable
