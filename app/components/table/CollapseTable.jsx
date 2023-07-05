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
const data1 = [
  "ABCXYZ",
  "Cat Desc",
  "Brand",
  "Matrial Grammage Code",
  "Matrial Grammage Description",
  "Plant",
  "Plant Description",
];
const data2 = [
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
  PlantDesc
) {
  return {
    AY,
    FabricCare,
    BriteMaximumPower,
    Mgc,
    Mgd,
    Plant,
    PlantDesc,
    history: [
      {
        measure: "AI forecast",
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
        // abcxyz: "",
        // catDesc: "",
        // brand: "",
        // mgc: "",
        // mgd: "",
        // plant: "",
        // plantDesc: "",
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
        sx={{ backgroundColor: open ? "#d7eaea" : 'white' }}
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
        <TableCell align="center">
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell
          sx={{ border: "1px solid white" }}
          align="center"
          component="th"
          scope="row"
        >
          {row.AY}
        </TableCell>
        <TableCell sx={{ border: "1px solid white" }} align="center">
          {row.FabricCare}
        </TableCell>
        <TableCell sx={{ border: "1px solid white" }} align="center">
          {row.BriteMaximumPower}
        </TableCell>
        <TableCell sx={{ border: "1px solid white" }} align="center">
          {row.Mgc}
        </TableCell>
        <TableCell sx={{ border: "1px solid white" }} align="center">
          {row.Mgd}
        </TableCell>
        <TableCell sx={{ border: "1px solid white" }} align="center">
          {row.Plant}
        </TableCell>
        <TableCell sx={{ border: "1px solid white" }} align="center">
          {row.PlantDesc}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell
          style={{
            paddingRight: 0,
            paddingLeft: 0,
            paddingBottom: 0,
            paddingTop: 0,
            width: "100%",
          }}
          colSpan="100%"
        >
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ overflow: "auto" }}>
              <Box sx={{ width: "100%", display: "table" }}>
                <TableContainer
                  sx={{
                    maxHeight: 740,
                    display: "flex",
                    justifyContent: "center",
                  }}
                  component={Paper}
                >
                  <Table aria-label="purchases">
                    <TableHead>
                      <TableRow>
                        {/* <TableCell /> */}

                        {data2.map((elem) => {
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
                      {/* <TableCell /> */}
                      {row.history.map((elem) => (
                        <TableRow
                          align="center"
                          style={{
                            whiteSpace: "nowrap",
                            // padding: "8px 18px 8px 18px",

                            fontSize: "15px",
                            textAlign: "center",
                          }}
                          key={elem.measure}
                        >
                          <TableCell sx={{ border: "1px solid lightGrey" }}>
                            {elem.measure}
                          </TableCell>
                          <TableCell
                            sx={{
                            p: "5px 15px 5px 15px",
                              textAlign: "center",
                              border: "1px solid lightGrey",
                            }}
                          >
                            {elem.week1}
                          </TableCell>
                          <TableCell
                            sx={{
                              textAlign: "center",
                              border: "1px solid lightGrey",
                            }}
                          >
                            {elem.week2}
                          </TableCell>
                          <TableCell
                            sx={{
                              textAlign: "center",
                              border: "1px solid lightGrey",
                            }}
                          >
                            {elem.week3}
                          </TableCell>
                          <TableCell
                            sx={{
                              textAlign: "center",
                              border: "1px solid lightGrey",
                            }}
                          >
                            {elem.week4}
                          </TableCell>
                          <TableCell
                            sx={{
                              textAlign: "center",
                              border: "1px solid lightGrey",
                            }}
                          >
                            {elem.week5}
                          </TableCell>
                          <TableCell
                            sx={{
                              textAlign: "center",
                              border: "1px solid lightGrey",
                            }}
                          >
                            {elem.week6}
                          </TableCell>
                          <TableCell
                            sx={{
                              textAlign: "center",
                              border: "1px solid lightGrey",
                            }}
                          >
                            {elem.week7}
                          </TableCell>
                          <TableCell
                            sx={{
                              textAlign: "center",
                              border: "1px solid lightGrey",
                            }}
                          >
                            {elem.week8}
                          </TableCell>
                          <TableCell
                            sx={{
                              textAlign: "center",
                              border: "1px solid lightGrey",
                            }}
                          >
                            {elem.week9}
                          </TableCell>
                          <TableCell
                            sx={{
                              textAlign: "center",
                              border: "1px solid lightGrey",
                            }}
                          >
                            {elem.week10}
                          </TableCell>
                          <TableCell
                            sx={{
                              textAlign: "center",
                              border: "1px solid lightGrey",
                            }}
                          >
                            {elem.week11}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            </Box>
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
    "DC-Karachi"
  ),
  createData(
    "AY",
    "Fabric Care",
    "Brite Maximum Power",
    "103",
    "20 GM",
    "PK 50",
    "DC-Karachi"
  ),
];

export default function CollapsibleTable() {
  return (
    <Box sx={{ overflow: "auto", p: "20px" }}>
      <Box sx={{ width: "100%", display: "table", tableLayout: "fixed" }}>
        {/* <Paper sx={{ width: '100%', overflow: 'hidden',display:'flex',justifyContent:'center' }}> */}
        <TableContainer sx={{ maxHeight: 540 }} component={Paper}>
          <Table aria-label="collapsible table">
            <TableHead sx={{ backgroundColor: "#398585" }}>
              <TableRow>
                <TableCell />

                {data1.map((elem) => {
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
