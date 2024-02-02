import Link from 'next/link';
import styles from './sidebar.module.css';

import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from 'react-icons/md';
import MenuLink from './menuLink/menuLink';
import Image from 'next/image';

const menuItems = [
  {
    title: 'Páginas',
    list: [
      {
        title: 'Panel de Control',
        path: '/dashboard',
        icon: <MdDashboard />,
      },
      {
        title: 'Usuarios',
        path: '/dashboard/users',
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: 'Folios',
        path: '/dashboard/products',
        icon: <MdShoppingBag />,
      },
      {
        title: 'Transacciones',
        path: '/dashboard/transactions',
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: 'Analítica',
    list: [
      {
        title: 'Resumen',
        path: '/dashboard/revenue',
        icon: <MdWork />,
      },
      {
        title: 'Reportes',
        path: '/dashboard/reports',
        icon: <MdAnalytics />,
      },
      {
        title: 'Delegaciones',
        path: '/dashboard/teams',
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: 'Usuario',
    list: [
      {
        title: 'Configuración',
        path: '/dashboard/settings',
        icon: <MdOutlineSettings />,
      },
      {
        title: 'Ayuda',
        path: '/dashboard/help',
        icon: <MdHelpCenter />,
      },
    ],
  },
];

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image
          className={styles.userImage}
          src="/noavatar.png"
          alt=""
          height="50"
          width="50"
        />
        <div className={styles.userDetail}>
          <span className={styles.username}>Yanfer Araque</span>
          <span className={styles.userTitle}>Manager</span>
        </div>
      </div>

      <ul>
        {menuItems.map((cat) => {
          return (
            <li className={styles.unitList} key={cat.title}>
              <span className={styles.cat}>{cat.title}</span>
              {cat.list.map((item) => {
                return <MenuLink item={item} key={item.title} />;
              })}
            </li>
          );
        })}
      </ul>

      <button className={styles.logout}>
        <MdLogout /> Cerrar Sesion
      </button>
    </div>
  );
};

export default Sidebar;
