'use client'

import './mainfile.css';
import { Box } from '@mui/material';
import ResponsiveSideBar from './ResponsiveSideBar'
import Sidebar from './Sidebar'
const MainFile = () => {

  return (
    <>
      <Box sx={{ display: { xs: 'inline', sm: 'inline', md: 'none', lg: 'none' } }}><ResponsiveSideBar /></Box>
      <Box sx={{ display: { xs: 'none', sm: 'none', md: 'inline', lg: 'inline' } }}><Sidebar /></Box>
    </>

  )
}

export default MainFile