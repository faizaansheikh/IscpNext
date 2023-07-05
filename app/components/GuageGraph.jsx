'use client'

import React from "react";
import dynamic from 'next/dynamic';
const Plot = dynamic(() => import('react-plotly.js'));

import {
    Typography,
    Divider,
    Card,
} from "@mui/material";

const GuageGraph = () => {
    return (
        <Card
            sx={{
                boxShadow: "1px 1px 8px #80808085",
                // marginTop: "30px",
                margin: '30px',
                height: "495px",
            }}
        >
            <Typography sx={{ padding: 2, color: '#398585' }}>AI Accuracy</Typography>
            <Divider />
            <Plot
                style={{ Width: "100%" }}
                data={[
                    {
                        type: "indicator",
                        mode: 'gauge+number',
                        delta: { reference: 60 },
                        value: 75,
                        gauge: { axis: { range: [null, 100] } },
                        'fillpattern': 'red'
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

export default GuageGraph;