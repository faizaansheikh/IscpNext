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
        <Grid item xs={6} md={3} sx={{ display: 'grid', rowGap: '10px' }}>
          <FilterCard />
          <GuageGraph />
        </Grid>
        <Grid item xs={6} md={9}>
          <Graph />
        </Grid>
        <Grid item sx={6} md={12}>
          <CollapseTable />
        </Grid>
      </Grid>
    </>
  )
}

export default page