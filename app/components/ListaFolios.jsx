import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from '@nextui-org/react';

import { folioColumns } from './tableComponents/data';

async function getFolios() {
  const res = await fetch('http://localhost:3000/api/folios');
  const data = await res.json();
  return data;
}

export default async function ListaFolios() {
  const { folios } = await getFolios();

  return (
    <table className="table">
      <thead>
        <tr>
          <th>
            <label>
              <input type="checkbox" className="checkbox" />
            </label>
          </th>
          <th># Folio</th>
          <th>Nombre Remitente</th>
          <th>Nombre del Documento</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {folios.map((rs) => (
          <tr className="hover" key={rs._id}>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <td>${rs.folioRecibido}</td>
            <td>
              <div className="flex items-center gap-3">
                <div className="font-bold">{rs.nombreRemitente}</div>
              </div>
            </td>

            <td>{rs.nombreDocumento}</td>
            {/*             <th>
              <Link href={`/editProduct/${rs._id}`}>
                <button className="btn btn-primary">Edit</button>
              </Link>
              <RemoveBtn id={rs._id} />
            </th> */}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
