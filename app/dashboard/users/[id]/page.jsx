import styles from '@/app/ui/dashboard/users/SingleUser/SingleUser.module.css';
import Image from 'next/image';

const SingleUserPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        Yanfer Araque
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label>Nombre</label>
          <input
            type="text"
            name="username"
            placeholder="Yanfer Araque"
          ></input>
          <label>Correo Electrónico</label>
          <input
            type="email"
            name="username"
            placeholder="yanfer.araque@gmail.com"
          ></input>
          <label>Contraseña</label>
          <input
            type="password"
            name="password"
            placeholder="***********"
          ></input>
          <label>Teléfono</label>
          <input type="text" name="phone" placeholder="+527472181822"></input>
          <label>Dirección</label>
          <textarea
            type="text"
            name="address"
            placeholder="Chilpancingo, Gro."
          ></textarea>
          <label>Tipo de Usuario</label>
          <select name="userValues" id="userValues">
            <option value="Manager">Manager</option>
            <option value="Admin">Administrador</option>
            <option value="User">Usuario</option>
          </select>
          <label>¿Es activo?</label>
          <select name="isActive" id="isActive">
            <option value={true}>Si</option>
            <option value={false}>No</option>
          </select>
          <button>Actualizar</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
