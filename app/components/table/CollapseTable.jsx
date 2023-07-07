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
import { Button, Card, Divider, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Confirmation from "./Confirmation";
import EditIcon from '@mui/icons-material/Edit';
// import DoneIcon from '@mui/icons-material/Done';
import DoneSharpIcon from '@mui/icons-material/DoneSharp';
// import ActionMenu from "../ActionMenu";
const noPointer = { cursor: 'pointer' };
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
  'Actions'
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
        id: "0",
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
        id: "1",
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
        id: "2",
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
        id: "3",
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
  const [openModal, setOpenModal] = React.useState(false);
  const [indexVal, setIndexVal] = React.useState(0);
  const [inputVal, setInputVal] = React.useState("");
  const useStyles = makeStyles({
    input: {
      '& input[type=number]': {
        '-moz-appearance': 'textfield'
      },
      '& input[type=number]::-webkit-outer-spin-button': {
        '-webkit-appearance': 'none',
        margin: 0
      },
      '& input[type=number]::-webkit-inner-spin-button': {
        '-webkit-appearance': 'none',
        margin: 0
      }
    },
  });
  const classes = useStyles();
  return (
    <React.Fragment>
      <TableRow
        sx={{
          backgroundColor: 'white',
          border: "1px solid white",
          whiteSpace: "nowrap",
          // padding: "8px 18px 8px 18px",
          position: "sticky",
          fontSize: "15px",
          textAlign: "center",
        }}
        align="center"

      >
        <TableCell align="center" sx={{ padding: '0px' }}>
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
                      {row.history.map((elem) =>
                        indexVal === elem.id ? (
                          <TableRow
                            // onClick={() => setIndexVal(elem.id)}
                            align="center"
                            style={{
                              whiteSpace: "nowrap",
                              padding: "8px 18px 8px 18px",
                              padding: '0px',
                              fontSize: "15px",
                              textAlign: "center",
                            }}
                            key={elem.id}
                          >
                            <TableCell sx={{ border: "1px solid lightGrey" }}>
                              {elem.measure}
                            </TableCell>
                            <TableCell
                              sx={{
                                p: "0px 5px",
                                textAlign: "center",
                                border: "1px solid lightGrey",
                              }}
                            >
                              <TextField
                                type="number"
                                className={classes.input}
                                variant="standard"
                                inputProps={{
                                  min: 0,
                                  style: { textAlign: "center" },
                                }}
                                defaultValue={elem.week1}
                                onChange={(e) => setInputVal(e.target.value)}
                              />
                            </TableCell>
                            <TableCell
                              sx={{
                                textAlign: "center",
                                border: "1px solid lightGrey",
                              }}
                            >
                              <TextField
                                type="number"
                                className={classes.input}
                                variant="standard"
                                inputProps={{
                                  min: 0,
                                  style: { textAlign: "center" },
                                }}
                                defaultValue={elem.week2}
                                onChange={(e) => setInputVal(e.target.value)}
                              />
                            </TableCell>
                            <TableCell
                              sx={{
                                textAlign: "center",
                                border: "1px solid lightGrey",
                              }}
                            >
                              <TextField
                                type="number"
                                className={classes.input}
                                variant="standard"
                                inputProps={{
                                  min: 0,
                                  style: { textAlign: "center" },
                                }}
                                defaultValue={elem.week3}
                                onChange={(e) => setInputVal(e.target.value)}
                              />
                            </TableCell>
                            <TableCell
                              sx={{
                                textAlign: "center",
                                border: "1px solid lightGrey",
                              }}
                            >
                              <TextField
                                type="number"
                                className={classes.input}
                                variant="standard"
                                inputProps={{
                                  min: 0,
                                  style: { textAlign: "center" },
                                }}
                                defaultValue={elem.week4}
                                onChange={(e) => setInputVal(e.target.value)}
                              />
                            </TableCell>
                            <TableCell
                              sx={{
                                textAlign: "center",
                                border: "1px solid lightGrey",
                              }}
                            >
                              <TextField
                                type="number"
                                className={classes.input}
                                variant="standard"
                                inputProps={{
                                  min: 0,
                                  style: { textAlign: "center" },
                                }}
                                defaultValue={elem.week5}
                                onChange={(e) => setInputVal(e.target.value)}
                              />
                            </TableCell>
                            <TableCell
                              sx={{
                                textAlign: "center",
                                border: "1px solid lightGrey",
                              }}
                            >
                              <TextField
                                type="number"
                                className={classes.input}
                                variant="standard"
                                inputProps={{
                                  min: 0,
                                  style: { textAlign: "center" },
                                }}
                                defaultValue={elem.week6}
                                onChange={(e) => setInputVal(e.target.value)}
                              />
                            </TableCell>
                            <TableCell
                              sx={{
                                textAlign: "center",
                                border: "1px solid lightGrey",
                              }}
                            >
                              <TextField
                                type="number"
                                className={classes.input}
                                variant="standard"
                                inputProps={{
                                  min: 0,
                                  style: { textAlign: "center" },
                                }}
                                defaultValue={elem.week7}
                                onChange={(e) => setInputVal(e.target.value)}
                              />
                            </TableCell>
                            <TableCell
                              sx={{
                                textAlign: "center",
                                border: "1px solid lightGrey",
                              }}
                            >
                              <TextField
                                type="number"
                                className={classes.input}
                                variant="standard"
                                inputProps={{
                                  min: 0,
                                  style: { textAlign: "center" },
                                }}
                                defaultValue={elem.week8}
                                onChange={(e) => setInputVal(e.target.value)}
                              />
                            </TableCell>
                            <TableCell
                              sx={{
                                textAlign: "center",
                                border: "1px solid lightGrey",
                              }}
                            >
                              <TextField
                                type="number"
                                className={classes.input}
                                variant="standard"
                                inputProps={{
                                  min: 0,
                                  style: { textAlign: "center" },
                                }}
                                defaultValue={elem.week9}
                                onChange={(e) => setInputVal(e.target.value)}
                              />
                            </TableCell>
                            <TableCell
                              sx={{
                                textAlign: "center",
                                border: "1px solid lightGrey",
                              }}
                            >
                              <TextField
                                type="number"
                                className={classes.input}
                                variant="standard"
                                inputProps={{
                                  min: 0,
                                  style: { textAlign: "center" },
                                }}
                                defaultValue={elem.week10}
                                onChange={(e) => setInputVal(e.target.value)}
                              />
                            </TableCell>
                            <TableCell
                              sx={{
                                textAlign: "center",
                                border: "1px solid lightGrey",
                              }}
                            >
                              <TextField
                                type="number"
                                className={classes.input}
                                variant="standard"
                                inputProps={{
                                  min: 0,
                                  style: { textAlign: "center" },
                                }}
                                defaultValue={elem.week11}
                                onChange={(e) => setInputVal(e.target.value)}
                              />
                            </TableCell>
                            <TableCell
                              sx={{
                                // bgcolor: '#398585',
                                padding: '0px',
                                textAlign: "center",
                                border: "1px solid lightGrey",
                              }}
                            >
                              <IconButton
                                style={noPointer}
                                onClick={() => setIndexVal(null)}
                              >
                                <DoneSharpIcon />

                              </IconButton>

                            </TableCell>
                            {/* <TableCell
                              sx={{
                                bgcolor: '#398585',
                                p: '0px',
                                textAlign: "center",
                                // border: "1px solid lightGrey",
                              }}
                            >
                              <IconButton
                                style={noPointer}
                              >

                                <CloseIcon onClick={() => setIndexVal(9)} sx={{ color: 'whitesmoke' }} style={noPointer} />
                              </IconButton>

                            </TableCell> */}
                          </TableRow>
                        ) : (
                          <TableRow
                            // onClick={() => setIndexVal(elem.id)}
                            align="center"
                            style={{
                              whiteSpace: "nowrap",
                              padding: "8px 18px 8px 18px",

                              fontSize: "15px",
                              textAlign: "center",
                            }}
                            key={elem.id}
                          >
                            <TableCell sx={{ border: "1px solid lightGrey" }}>
                              {elem.measure}
                            </TableCell>
                            <TableCell
                              sx={{
                                // p: "5px 15px 5px 15px",
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
                            <TableCell
                              sx={{
                                textAlign: "center",
                                border: "1px solid lightGrey",
                                padding: '0px'
                              }}>
                              <IconButton
                                style={noPointer}
                                onClick={() => setIndexVal(elem.id)}
                              >
                                <EditIcon />
                              </IconButton>
                            </TableCell>
                          </TableRow>
                        )
                      )}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            </Box>

          </Collapse>
          {openModal && <Confirmation openModal={openModal} setOpenModal={setOpenModal} />}

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
    <Card sx={{ boxShadow: "1px 1px 8px #80808085" }}>
      <Typography sx={{ padding: 2, color: '#398585' }}>Results</Typography>
      <Divider />
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
    </Card>
  );
}
