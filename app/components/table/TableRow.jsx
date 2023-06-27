import React from 'react'

function TableRow({personDetails}) {
  return (
   <tr>
    <td>{personDetails.name}</td>
    <td>{personDetails.phone}</td>
    <td>{personDetails.email}</td>
    <td>{personDetails.address}</td>
    <td>{personDetails.country}</td>
    <td>{personDetails.numberrange}</td>
   </tr>
  )
}

export default TableRow