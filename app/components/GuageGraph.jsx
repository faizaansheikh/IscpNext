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
                borderRadius:'9px',
            }}
        >
            <Typography sx={{ padding: 2, color: '#0A5F59' }}>AI Accuracy</Typography>
            <Divider />
            <Plot
            //  style={{ width: '100%', height: '100%' }}
                style={{ Width: "50%" }}
                data={[
                    {
                        type: "indicator",
                        mode: 'gauge+number',
                        delta: { reference: 40 },
                        value: 75,
                        gauge: { axis: { range: [null, 100] } },
                        'fillpattern': 'red'
                    },
                ]}
                layout={
                    {
                        
                        height: 280,
                    }
                }
                config={{ responsive: true }}
            />
        </Card>
    );
};

export default GuageGraph;