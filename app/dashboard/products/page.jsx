import Image from 'next/image';
import Link from 'next/link';

import styles from '@/app/ui/dashboard/products/products.module.css';
import Search from '@/app/ui/dashboard/search/search';
import Pagination from '@/app/ui/dashboard/pagination/pagination';

const ProductsPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Buscar un folio..." />
        <Link href="/dashboard/products/add">
          <button className={styles.addButton}>Agregar Folio</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td># de Folio</td>
            <td>Descripción</td>
            <td>Fecha de Creación</td>
            <td>Última modificación</td>
            <td>Estado</td>
            <td>Acciones</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.product}>
                <Image
                  src="/noproduct.jpg"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.productImage}
                />
                2024012301
              </div>
            </td>
            <td>Problema de Capacitación</td>
            <td>13.01.2024</td>
            <td>20.01.2024</td>
            <td>activo</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/">
                  <button className={`${styles.button} ${styles.view}`}>
                    View
                  </button>
                </Link>
                <button className={`${styles.button} ${styles.delete}`}>
                  Delete
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default ProductsPage;
