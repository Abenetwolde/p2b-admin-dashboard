import React from 'react';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { useStateContext } from '../contexts/ContextProvider';

import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const DropDown = ({ currentMode }) => (
  <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
    <DropDownListComponent id="time" fields={{ text: 'Time', value: 'Id' }} style={{ border: 'none', color: (currentMode === 'Dark') && 'white' }} value="1" dataSource={dropdownData} popupHeight="220px" popupWidth="120px" />
  </div>
);

const Latest = () => {
  const { currentColor, currentMode } = useStateContext();
  const rows = [
    {
      id: 1,
      product: "Dashin Beer",
      img: "https://th.bing.com/th/id/R.51ab75c57cab862450f4ab0f6d82cb43?rik=0UMaCNFJALvNBw&riu=http%3a%2f%2fethiopialist.com%2farticles%2fwp-content%2fuploads%2f2015%2f01%2fDashen-Beer-150x150.jpg&ehk=ysSp4Ew7PhXPX%2blqXxZbihPvsUObKntqBVnhIA0R1TE%3d&risl=&pid=ImgRaw&r=0",
      date: "1 Augest",
      status: "Approved",
    },
    {
      id: 2,
      product: "Proud of ethiopian women",
      img: "https://th.bing.com/th/id/OIP.oabU9v_gE-TyqIt4pyoAdAAAAA?pid=ImgDet&rs=1",

      date: "1 Augest",
      status: "Pending",
    },
    {
      id: 3,
      product: "Ethiopian New Year ",
      img: "https://th.bing.com/th/id/R.587272433e2285e43e524c6dcfcdc4a6?rik=yNWrtfyv47o1Pg&pid=ImgRaw&r=0",
      date: "1 Augest",
      status: "Pending",
    },
    {
      id: 4,
      product: "Ethiopian New Year ",
      img: "https://th.bing.com/th/id/R.587272433e2285e43e524c6dcfcdc4a6?rik=yNWrtfyv47o1Pg&pid=ImgRaw&r=0",

      date: "1 Augest",

      status: "Pending",
    },
  ];

  return (
    <div className="mt-14 ml-14 mr-14">
      <p className="text">Latest events</p>
       <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell"> ID</TableCell>
            <TableCell className="tableCell">Events</TableCell>

            <TableCell className="tableCell">Date</TableCell>

            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div>
              </TableCell>

              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
};

export default Latest;
