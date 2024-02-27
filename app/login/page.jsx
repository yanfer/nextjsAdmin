import styles from '@/app/ui/login/login.module.css';

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <h1>Inicio de Sesión</h1>
        <input type="text" placeholder="Nombre de Usuario" />
        <input type="password" placeholder="Contraseña" />
        <button>Iniciar Sesión</button>
      </form>{' '}
    </div>
  );
};

export default LoginPage;
