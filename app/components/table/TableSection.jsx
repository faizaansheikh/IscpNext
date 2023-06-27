import React from 'react'
// import TableRow from '../table/TableRow'
import dynamic from 'next/dynamic'
const TableRow = dynamic(() => import('./TableRow'), {
    ssr: false,
  })
function TableSection({personDetails,index}) {
  return (
    <tbody>
        <tr>
            <td className='button-td'>
                button
            </td>
            <td><b>Person : {index}</b></td>
        </tr>
        <TableRow personDetails={personDetails} />
    </tbody>
  )
}

export default TableSection