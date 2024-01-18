import { MdSupervisedUserCircle } from 'react-icons/md';
import styles from './card.module.css';

const Card = () => {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={24} />
      <di className={styles.texts}>
        <span className={styles.title}>Total Users</span>
        <span className={styles.number}>10.254</span>
        <span>
          <span className={styles.positive}>12%</span> more this month
        </span>
      </di>
    </div>
  );
};

export default Card;
