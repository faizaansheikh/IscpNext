import Appbar from "./components/Appbar";
// import Table from "./components/table/Table";
import CollapseTable from './components/table/CollapseTable'
'use client'

import { Grid } from "@mui/material";
import Appbar from "./components/Appbar";
import TemporaryDrawer from "./components/SideDrawer";
import Graph from "./components/Graph";

const page = () => {
  return (
    <div>
      <Appbar />
      {/* <Grid container > */}
      {/* <Grid item xs={12} sm={12} md={1}> */}
      <TemporaryDrawer />
      {/* </Grid> */}
      {/* <Grid item xs={12} sm={12} md={11}> */}
      <Graph />
      {/* </Grid> */}
      {/* </Grid> */}
      <Appbar />
      <CollapseTable />
    </div>
  )
}

export default page