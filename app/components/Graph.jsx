'use client'

import React from "react";
import dynamic from 'next/dynamic';
const Plot = dynamic(() => import('react-plotly.js'));

import {
    Typography,
    Divider,
    Card,
} from "@mui/material";

const Graph = () => {
    return (
        <Card
            sx={{
                boxShadow: "1px 1px 8px #80808085",
                // marginTop: "30px",
                height: "495px",
            }}
        >
            <Typography sx={{ padding: 2 }}>Graph</Typography>
            <Divider />
            <Plot
                style={{ Width: "100%" }}
                data={[
                    {
                        x: [1, 2, 3, 4, 5, 6, 7, 8],
                        y: [1, 5, 6, 54, 12, 14, 45, 90],
                        marker: { color: "red" },
                        name: "Seasonality",
                        type: "scatter",
                    },
                    {
                        x: [1, 2, 3, 4, 5, 6, 7, 8],
                        y: [1, 2, 36, 45, 5, 64, 7, 45],
                        marker: { color: "blue" },
                        name: "Demand",
                        type: "scatter",
                    },
                    {
                        x: [1, 2, 3, 4, 5, 6, 7, 8],
                        y: [1, 29, 36, 43, 5, 46, 67, 18],
                        marker: { color: "Purple" },
                        name: "Residual",
                        type: "scatter",
                    },
                    {
                        x: [1, 2, 3, 4, 5, 6, 7, 8],
                        y: [1, 25, 37, 44, 65, 46, 37, 81],
                        marker: { color: "green" },
                        name: "Trend",
                        type: "scatter",
                    },
                ]}
                layout={
                    {
                        // width: '100%',
                        // height: 600,
                        // title: "hello",
                    }
                }
                config={{ responsive: true }}
            />
        </Card>
    );
};

export default Graph;