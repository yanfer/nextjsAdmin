import ListaFolios from '@/app/components/ListaFolios';
import AddFolios from '@/app/components/addFolios';
import UserTable from '@/app/components/UserTable';

async function getFolios() {
  const res = await fetch('http://localhost:3000/api/folios', {
    cache: 'no-store',
  });
  const data = await res.json();
  return data;
}

export default async function Folios() {
  const { folios } = await getFolios();
  return (
    <div>
      <AddFolios />
      <ListaFolios folios={folios} />
    </div>
  );
}
