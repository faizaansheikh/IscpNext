// 'use client'
import React from "react";
import { info } from "../table/info";
import dynamic from "next/dynamic";
// import TableSection from './TableSection'
// import TableSection from '../table/TableSection'
const TableSection = dynamic(() => import("./TableSection"), {
  ssr: false,
});

function Table() {
  return (
    <table>
      <thead>
        <td></td>
        <th>name</th>
        <th>email</th>
        <th>phone</th>
        <th>age</th>
        <th>profession</th>
        <th>adress</th>
      </thead>
      <tbody>
        <tr>
          <td className="button-td">button</td>
          <td>
            {info.map((personDetails, index) => {
              return <b> Person : {index} </b>;
            })}
          </td>
        </tr>
        <TableRow personDetails={personDetails} />
      </tbody>
    </table>
  );
}

export default Table;
