'use client'

import CollapseTable from './components/table/CollapseTable'
import Appbar from "./components/Appbar";
import SideDrawer from "./components/SideDrawer";
import Graph from "./components/Graph";
import GuageGraph from './components/GuageGraph';

const page = () => {
  return (
    <>
      <Appbar />
      <SideDrawer />
      <Graph />
      <GuageGraph />
      <CollapseTable />
    </>
  )
}

export default page