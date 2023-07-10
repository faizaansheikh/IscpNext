'use client'

import { Card, Typography } from '@mui/material'
import React from 'react'

const FilterCard = () => {
    return (
        <div style={{ display: 'grid', rowGap: '10px' }}>
            <Card sx={{
                borderRadius:'9px',
                boxShadow: "1px 1px 8px #80808085",
                padding: '20px',
                backgroundColor: '#0A5F59',
                color: 'white'
            }}>
                <Typography >Current Month / Year:</Typography>
                <Typography variant='h6' sx={{ marginLeft: '50px' }}>September (9) 2022</Typography>
            </Card>
            <Card sx={{
                borderRadius:'9px',
                bgcolor:'#FDCF6F',
                boxShadow: "1px 1px 8px #80808085",
                padding: '20px',
                color: 'black'
            }}>
                <Typography>Target Month / Year:</Typography>
                <Typography variant='h6' sx={{ marginLeft: '50px' }}>October (10) 2022</Typography>
            </Card>
        </div>
    )
}

export default FilterCard