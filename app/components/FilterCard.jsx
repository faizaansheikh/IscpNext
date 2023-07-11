'use client'

import styled from '@emotion/styled';
import { Button, Card, Typography } from '@mui/material'
import React from 'react'

const FilterButton = styled(Button)(() => ({
    color: "white",
    backgroundColor: "#0A5F59",
    borderRadius: '9px',
    "&:hover": {
      backgroundColor: "#096861",
    },
  }));

  const FilterButton2 = styled(Button)(() => ({
    color: "#0A5F59",
    border: "2px solid #0A5F59",
    borderRadius: '9px',
    "&:hover": {
    border: "2px solid #0A5F59",
    },
  }));

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
                <Typography variant='h6' sx={{ marginLeft: '0px' }}>September (9) 2022</Typography>
            </Card>
            <Card sx={{
                borderRadius:'9px',
                bgcolor:'#FDCF6F',
                boxShadow: "1px 1px 8px #80808085",
                padding: '20px',
                color: 'black'
            }}>
                <Typography>Target Month / Year:</Typography>
                <Typography variant='h6' sx={{ marginLeft: '0px' }}>October (10) 2022</Typography>
            </Card>
            <div style={{display: 'flex', justifyContent: 'space-between', gap: '3px'}}>
            <FilterButton sx={{width: '100%'}}>Reset</FilterButton>
            <FilterButton2 variant='outlined' sx={{width: '100%'}}>Save</FilterButton2>
            </div>
        </div>
    )
    }

export default FilterCard