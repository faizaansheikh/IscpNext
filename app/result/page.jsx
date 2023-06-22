'use client'

import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { Autocomplete, Card, Button, TextField } from "@mui/material";
import styled from "@emotion/styled";
import ResultsTable from '../components/ResultsTable'
// import Graph from "../graph/Graph";
// import dynamic from "next/dynamic";
// import { Suspense, lazy } from "react";

// let SummaryPlot = lazy(() => import('../plotlyOne'))
// const SummaryPlot = dynamic(() => import("../plotlyOne"), {
//   ssr: false,
//   loading: () => <>Loading...</>,
// });

function Results() {

  const top100Films = [
    { label: "The Shawshank Redemption" },
    { label: "The Godfather" },
    { label: "The Godfather: Part II" },
    { label: "The Dark Knight" },
    { label: "12 Angry Men" },
    { label: "Schindler's List" },
    { label: "Pulp Fiction" },
  ];


  const ColorButton = styled(Button)(() => ({
    color: "white",
    backgroundColor: "#398585",
    "&:hover": {
      backgroundColor: "#398585",
    },
  }));

  const CssTextField = styled(TextField)({
    "& label.Mui-focused": {
      color: "#A0AAB4",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#398585",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#398585",
      },
      "&:hover fieldset": {
        borderColor: "#398585",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#398585",
      },
    },
  });
  return (
    <>
      {/* ////profile section //// */}
      <Grid container spacing={3}>
        <Grid item sx={6} sm={12} md={12} lg={5.5}>
          <Card sx={{ boxShadow: "1px 1px 8px #80808085", padding: "0px 30px" }}>
            <p style={{ textAlign: "center", fontSize: "25px", margin: "7px 0px" }}>
              Profile Selection
            </p>
            <Autocomplete
              fullWidth
              // freeSolo
              size="small"
              // disablePortal
              // id="combo-box-demo"
              onChange={(e) => console.log(e)}
              options={top100Films}
              renderInput={(params) => <CssTextField {...params} />}
            />
            <Box
              sx={{
                margin: "20px 0px",
                display: "flex",
                gap: "10px",
                flexWrap: "wrap",
              }}
            >
              <ColorButton variant="contained">Load Results</ColorButton>
              <ColorButton variant="contained">Refresh</ColorButton>
              <ColorButton variant="contained">
                View Params
              </ColorButton>
            </Box>
          </Card>
        </Grid>


        {/* ////profile section //// */}

        {/* ////Summary Card //// */}
        <Grid item xs={12} sm={12} md={12} lg={6.5}>
          <Card sx={{ boxShadow: "1px 1px 8px #80808085", height: "300px" }}>
            <p style={{ textAlign: "center", fontSize: "25px", margin: "18px 0px 0px 0px" }}>
              Summary
            </p>
            {/* <Suspense fallback={<p>Loading...</p>}> */}
            {/* <SummaryPlot /> */}
            {/* </Suspense> */}
            {/* <Plot
              style={{ width: "100%" }}
              className="js-plotly-plot plotly main-svg"
              data={[
                {
                  x: ["Z", "Y", "X"],
                  y: ["A", "B", "C"],
                  z: [
                    [1, 20, 30],
                    [20, 1, 60],
                    [30, 60, 1],
                  ],
                  type: "heatmap",
                  showscale: false,
                  colorscale: colorscaleValue,
                },
              ]}
              layout={{
                height: 350,
              }}
              config={{ responsive: true }}
            /> */}
            {/* <Plot
        style={{ width: "100%" }}
        className="js-plotly-plot plotly main-svg"
        data={[
          {
            x: ["Z", "Y", "X"],
            y: ["A", "B", "C"],
            z: [
              [1, 20, 30],
              [20, 1, 60],
              [30, 60, 1],
            ],
            type: "heatmap",
            showscale: false,
            colorscale: colorscaleValue,
          },
        ]}
        layout={{
          height: 350,
        }}
        config={{ responsive: true }}
      /> */}


          </Card>
        </Grid>

        {/* ////Summary Card //// */}

      </Grid>


      {/* ////Results table//// */}


      <Box
        sx={{ mt: "30px", boxShadow: "1px 1px 8px #80808085", p: "20px" }}
      >
        <Typography
          sx={{
            pr: "17px",
            pb: "17px",
            pl: "20px",
            fontSize: "20px",
          }}
        >
          Results
        </Typography>
        <ResultsTable />
        {/* <ResultsTable /> */}

      </Box>

      {/* ////Results table//// */}


      {/* ////Graph//// */}

      {/* ////Graph//// */}



    </>
  );
}

export default Results;
