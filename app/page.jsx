'use client'

import CollapseTable from './components/table/CollapseTable'
import Appbar from "./components/Appbar";
import SideDrawer from "./components/SideDrawer";
import Graph from "./components/Graph";
import GuageGraph from './components/GuageGraph';
import FilterCard from './components/FilterCard';
import { Grid } from '@mui/material';

const page = () => {
  return (
    <>
      <Appbar />
      <SideDrawer />
      <Grid container spacing={1.3} sx={{ padding: '30px' }}>
        <Grid item xs={12} sm={12} md={3.5} lg={3.5} sx={{ display: 'grid', rowGap: '10px' }}>
          <FilterCard />
          <GuageGraph />
        </Grid>
        <Grid item xs={12} sm={12} md={8.5} lg={8.5}>
          <Graph />
        </Grid>
        <Grid item sx={12} sm={12} md={12} lg={12}>
          <CollapseTable />
        </Grid>
      </Grid>
    </>
  )
}

export default page