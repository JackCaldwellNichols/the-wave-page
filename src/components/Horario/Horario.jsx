import React, { useMemo } from 'react'
import './horario.css'
import {useTable} from 'react-table'
import fakeData from "../../MOCK_DATA.json";

const Horario = () => {
const data = useMemo(() => fakeData, []);
const columns = useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "Lunes",
        accessor: "class",
      },
      {
        Header: "Martes",
        accessor: "className",
      },
      {
        Header: "Miercoles",
        accessor: "classname",
      },
      {
        Header: "Jueves",
        accessor: "clase",
      },
      {
        Header: "Viernes",
        accessor: "tipo",
      },
      {
        Header: "Sábado",
        accessor: "type",
      },
    ],
    []
  );

const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = useTable({columns, data})

  return (
    <div className='horarioWrapper'>
    <div className="horario">
    <h3 className='horarioTitle'>HORARIO</h3>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}> {cell.render("Cell")} </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  </div>
  )
}

export default Horario
