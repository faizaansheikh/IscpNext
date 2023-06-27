'use client'
import { AppBar, Box, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const Appbar = () => {
  return (
    <>
    <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          bgcolor: "#398585",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          p: "0px 20px",
        }}
      >
        <Box
          sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
        >
          {/* <img src={logo1}  style={{paddingRight:'5px',width:'60px'}}  alt="" /> */}
          <Image
            src="/logo.png"
            // alt="Picture of the author"
            style={{paddingRight:'10px'}}
            width={68}
            height={45}
            quality={100}
          >
            </Image>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ pt: "17px", pb: "17px" }}
          >
            ISCP - Integrated Supply Chain Planning
          </Typography>
        </Box>
        <Typography style={{ fontSize: "20px", pr: "20px",mr:'30px' }}>Demand Management</Typography>

      </AppBar>
    </>
  )
}

export default Appbar