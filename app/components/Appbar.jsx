'use client'

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import Image from 'next/image';

export default function PrimarySearchAppBar() {
  return (
    <Box sx={{ m: '0px' }}>
      <AppBar position="fixed" sx={{ bgcolor: "#0A5F59" }}>
        <Toolbar>
          <Image
            src="/logo.png"
            // alt="Picture of the author"
            style={{ paddingRight: '10px' }}
            width={68}
            height={45}
            quality={100}
          >
          </Image>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            ISCP-Integrated Supply Chain Planning
          </Typography>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Typography sx={{ fontSize: "18px", mr: "20px" }}> Demand Management</Typography>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Box>
  );
}