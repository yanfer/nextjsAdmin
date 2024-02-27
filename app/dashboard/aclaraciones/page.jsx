import UserTable from '@/app/components/UserTable';
import styles from '@/app/ui/dashboard/transactions/transactions.module.css';

const TransactionsPage = () => {
  return (
    <div className={styles.container}>
      <UserTable />
    </div>
  );
};

export default TransactionsPage;
