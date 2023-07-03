"use client";
import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
const data = [
  "ABCXYZ",
  "Cat Desc",
  "Brand",
  "Matrial Grammage Code",
  "Matrial Grammage Description",
  "Plant",
  "Plant Description",
  "Measure",
  "Week 1",
  "Week 2",
  "Week 3",
  "Week 4",
  "Week 5",
  "Week 6",
  "Week 7",
  "Week 8",
  "Week 9",
  "Week 10",
  "Week 11",
];

function createData(
  AY,
  FabricCare,
  BriteMaximumPower,
  Mgc,
  Mgd,
  Plant,
  PlantDesc,
  Measure,
  Week1,
  Week2,
  Week3,
  Week4,
  Week5,
  Week6,
  Week7,
  Week8,
  Week9,
  Week10,
  Week11
) {
  return {
    AY,
    FabricCare,
    BriteMaximumPower,
    Mgc,
    Mgd,
    Plant,
    PlantDesc,
    Measure,
    Week1,
    Week2,
    Week3,
    Week4,
    Week5,
    Week6,
    Week7,
    Week8,
    Week9,
    Week10,
    Week11,
    history: [
      {
        abcxyz: "fewf",
        catDesc: "ewfew",
        brand: "ewfwe",
        mgc: "fewew",
        mgd: "wfefew",
        plant: "tger",
        plantDesc: "wfefwe",
        measure: "Compnay forecast",
        week1: 1,
        week2: 1,
        week3: 2,
        week4: 2,
        week5: 0,
        week6: 0,
        week7: 1,
        week8: 1,
        week9: 2,
        week10: 1,
        week11: 2,
      },
      {
        abcxyz: "",
        catDesc: "",
        brand: "",
        mgc: "",
        mgd: "",
        plant: "",
        plantDesc: "",
        measure: "Manual Adj",
        week1: 1,
        week2: 1,
        week3: 2,
        week4: 2,
        week5: 0,
        week6: 0,
        week7: 1,
        week8: 1,
        week9: 2,
        week10: 1,
        week11: 2,
      },
      {
        abcxyz: "",
        catDesc: "",
        brand: "",
        mgc: "",
        mgd: "",
        plant: "",
        plantDesc: "",
        measure: "Rsf",
        week1: 1,
        week2: 1,
        week3: 2,
        week4: 2,
        week5: 0,
        week6: 0,
        week7: 1,
        week8: 1,
        week9: 2,
        week10: 1,
        week11: 2,
      },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow
        align="center"
        style={{
          border: "1px solid white",
          whiteSpace: "nowrap",
          padding: "8px 18px 8px 18px",
          position: "sticky",
          fontSize: "15px",
          textAlign: "center",
        }}
      >
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell align="center" component="th" scope="row">
          {row.AY}
        </TableCell>
        <TableCell align="center">{row.FabricCare}</TableCell>
        <TableCell align="center">{row.BriteMaximumPower}</TableCell>
        <TableCell align="center">{row.Mgc}</TableCell>
        <TableCell align="center">{row.Mgd}</TableCell>
        <TableCell align="center">{row.Plant}</TableCell>
        <TableCell align="center">{row.PlantDesc}</TableCell>
        <TableCell align="center">{row.Measure}</TableCell>
        <TableCell align="center">{row.Week1}</TableCell>
        <TableCell align="center">{row.Week2}</TableCell>
        <TableCell align="center">{row.Week3}</TableCell>
        <TableCell align="center">{row.Week4}</TableCell>
        <TableCell align="center">{row.Week5}</TableCell>
        <TableCell align="center">{row.Week6}</TableCell>
        <TableCell align="center">{row.Week7}</TableCell>
        <TableCell align="center">{row.Week8}</TableCell>
        <TableCell align="center">{row.Week9}</TableCell>
        <TableCell align="center">{row.Week10}</TableCell>
        <TableCell align="center">{row.Week11}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            

            
              <Table aria-label="purchases">
                <TableHead></TableHead>
                <TableBody>
                  {/* <TableCell /> */}
                  {row.history.map((elem) => (
                    <TableRow
                      align="center"
                      style={{
                        whiteSpace: "nowrap",
                        padding: "8px 18px 8px 18px",

                        fontSize: "15px",
                        textAlign: "center",
                      }}
                      key={elem.measure}
                    >
                      <TableCell>{elem.abcxyz}</TableCell>
                      <TableCell>{elem.catDesc}</TableCell>
                      <TableCell>{elem.brand}</TableCell>
                      <TableCell>{elem.mgc}</TableCell>
                      <TableCell>{elem.mgd}</TableCell>
                      <TableCell>{elem.plant}</TableCell>
                      <TableCell>{elem.plantDesc}</TableCell>
                      <TableCell>{elem.measure}</TableCell>
                      <TableCell>{elem.week1}</TableCell>
                      <TableCell>{elem.week2}</TableCell>
                      <TableCell>{elem.week3}</TableCell>
                      <TableCell>{elem.week4}</TableCell>
                      <TableCell>{elem.week5}</TableCell>
                      <TableCell>{elem.week6}</TableCell>
                      <TableCell>{elem.week7}</TableCell>
                      <TableCell>{elem.week8}</TableCell>
                      <TableCell>{elem.week9}</TableCell>
                      <TableCell>{elem.week10}</TableCell>
                      <TableCell>{elem.week11}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
         
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}
const rows = [
  createData(
    "AY",
    "Fabric Care",
    "Brite Maximum Power",
    "103",
    "20 GM",
    "PK 50",
    "DC-Karachi",
    "AI forecast",
    "1",
    "1",
    "0",
    "0",
    "2",
    "2",
    "1",
    "1",
    "0",
    "1",
    "1"
  ),
  createData(
    "AY",
    "Fabric Care",
    "Brite Maximum Power",
    "103",
    "20 GM",
    "PK 50",
    "DC-Karachi",
    "AI forecast",
    "1",
    "1",
    "0",
    "0",
    "2",
    "2",
    "1",
    "1",
    "0",
    "1",
    "1"
  ),
];

export default function CollapsibleTable() {
  return (
    <Box sx={{ overflow: "auto", p: "20px" }}>
      <Box sx={{ width: "100%", display: "table", tableLayout: "fixed" }}>
        {/* <Paper sx={{ width: '100%', overflow: 'hidden',display:'flex',justifyContent:'center' }}> */}
        <TableContainer sx={{ maxHeight: 740 }} component={Paper}>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell />

                {data.map((elem) => {
                  return (
                    <TableCell
                      align="center"
                      style={{
                        backgroundColor: "#398585",
                        color: "white",
                        border: "1px solid white",
                        whiteSpace: "nowrap",
                        padding: "8px 18px 8px 18px",
                        position: "sticky",
                        fontSize: "15px",
                        textAlign: "center",
                      }}
                    >
                      {elem}
                    </TableCell>
                  );
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <Row key={row.name} row={row} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}
