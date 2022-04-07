import React, { useState, useEffect } from 'react'
import { DataGrid , GridValueGetterParams} from '@mui/x-data-grid';
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
    headerClassName: 'super-app-theme--header',
    width: 50
  },
  {
    field: 'name',
    headerName: 'Name',
    //headerAlign: 'center',
    headerClassName: 'super-app-theme--header',
    width: 160
  },
  {
    field: 'username',
    headerName: 'Uername',
    headerClassName: 'super-app-theme--header',
    width: 150
  },
  {
    field: 'address',
    headerName: 'Address',
    headerClassName: 'super-app-theme--header',
    width: 400,
    valueGetter: (function (params) {
      return "".concat(params.row.address.suite || '', " ") + "  " +  
             "".concat(params.row.address.street || '') + "  " +  
             "".concat(params.row.address.city || '') + "  " +  
             "".concat(params.row.address.zipcode || '');
      //return params.row.address.street + "  -  " +  params.row.phone;
  })
  },
  {
    field: 'address geo',
    headerName: 'Address Lat/Long ',
    headerClassName: 'super-app-theme--header',
    width: 180,
    valueGetter: (function (params) {
      return "".concat(params.row.address.geo.lat || '', " ") + " , " +  
             "".concat(params.row.address.geo.lng || '');
  })
  },
  {
    field: 'phone',
    headerName: 'Phone number',
    headerClassName: 'super-app-theme--header',
    width: 200
  },
  {
    field: 'website',
    headerName: 'Website',
    headerClassName: 'super-app-theme--header',
    width: 150
  },
  {
    field: 'company',
    headerName: 'Company detail',
    headerClassName: 'super-app-theme--header',
    width: 700,
    valueGetter: (function (params) {
      return "".concat(params.row.company.name || '', " ") + " - " +  
             "".concat(params.row.company.catchPhrase|| '') + " - " +  
             "".concat(params.row.company.bs || '');
  })
  },
];

const DataTable = () => {

  const [tableData, setTableData] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((data) => data.json())
      .then((data) => setTableData(data))

  }, [])

  console.log(tableData);

  return (

    <div style={{ height: 600, width: '100%'}}>
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
          rows={tableData }
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
