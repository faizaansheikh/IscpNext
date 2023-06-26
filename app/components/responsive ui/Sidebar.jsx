'use client'

import React from 'react'
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
// import { SettingsIcon } from '@mui/icons-material';
// import Setup from "../Setups/Setup";
import { Button } from "@mui/material";
// import Results from "../Results/Results";
// import Graph from "../Graph/Graph";
// import GridOnIcon from '@mui/icons-material/GridOn';
import Link from "next/link";
import Setup from "../../setup/page";
// import BasicTable from "../setup/BasicTable";
import Results from '../../result/page';
// import logo from './components/logo'
const drawerWidth = 255;

export default function ClippedDrawer() {
  const [menuData, setMenuData] = React.useState("result");
  return (
    <Box sx={{ display: "flex", bgcolor: "#398585 !imporant" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, bgcolor: "#398585", display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', p: '0px 20px' }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>

          {/* <img src={logo}  style={{paddingRight:'5px',width:'60px'}}  alt="" /> */}
          <Typography variant="h6" noWrap component="div" sx={{ pt: '17px', pb: '17px' }}>
            ISCP - Integrated Supply Chain Planning
          </Typography>

        </Box>

        {
          menuData === 'result' ? <p style={{ fontSize: '18px', margin: '0px' }}>ABC/XYZ Analysis</p> : <p style={{ fontSize: '18px', margin: '0px' }}>Segmentation Setup</p>
        }
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,

          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            bgcolor: "#398585",
            color: "white",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto", bgcolor: "#398585" }}>
          <List>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  p: "10px",
                }}
              >
                {/* <InboxIcon /> */}
                {/* <SettingsIcon sx={{ fontSize: '20px' }} /> */}
                <Link href='/setup'>
                  <Button
                    sx={{ color: "white" }}
                    onClick={() => setMenuData("setup")}
                  >
                    Segmentation Setups
                  </Button>
                </Link>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  p: "10px",
                }}
              >
                {/* <InboxIcon /> */}
                {/* <GridOnIcon sx={{ fontSize: '18px' }} /> */}
                <Link href='/result'>
                  <Button
                    sx={{ color: "white" }}
                    onClick={() => setMenuData("result")}
                  >
                    Segmentation Results
                  </Button>
                </Link>
              </Box>
            </Box>
          </List>
          <Divider />
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {menuData === "setup" && <Setup />}
        {menuData === "result" && <Results />}
        {/* {menuData === "graph" && <Graph />} */}
        {/* <Setup/> */}
        {/* <Results /> */}
        {/* <BasicTable/> */}
      </Box>
    </Box>
  );
}
