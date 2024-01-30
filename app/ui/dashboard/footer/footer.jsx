import styles from './footer.module.css';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>SEG</div>{' '}
      <div className={styles.text}>© Todos los derechos reservados.</div>
    </div>
  );
};

export default Footer;
