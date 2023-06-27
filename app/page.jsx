import Appbar from "./components/Appbar";
// import Table from "./components/table/Table";
import CollapseTable from './components/table/CollapseTable'

const page = () => {
  return (
    <div>
      <Appbar />
      <CollapseTable/>
    </div>
  )
}

export default page