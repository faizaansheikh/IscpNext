'use client'

import CollapseTable from './components/table/CollapseTable'
import Appbar from "./components/Appbar";
import TemporaryDrawer from "./components/SideDrawer";
import Graph from "./components/Graph";
import GuageGraph from './components/GuageGraph';

const page = () => {
  return (
    <>
      <Appbar />
      <TemporaryDrawer />
      <Graph />
      <GuageGraph />
      <CollapseTable />
    </>
  )
}

export default page