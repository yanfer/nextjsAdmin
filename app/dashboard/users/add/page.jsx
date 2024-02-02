import styles from '@/app/ui/dashboard/users/addUser/addUser.module.css';

const AddUserPage = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <input type="text" placeholder="Nombre Completo" name="name" required />
        <input
          type="email"
          placeholder="Correo Electrónico"
          name="email"
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          name="password"
          required
        />
        <input type="phone" placeholder="Teléfono" name="phone" required />
        <select name="isActive" id="isActive">
          <option value={false}>¿Esta activo?</option>
          <option value={true}>Si</option>
          <option value={false}>No</option>
        </select>
        <select name="userValues" id="userValues">
          <option value={false}>Tipo de Usuario</option>
          <option value="Manager">Manager</option>
          <option value="Admin">Administrador</option>
          <option value="User">Usuario</option>
        </select>
        <textarea
          name="address"
          id="desc"
          cols="150"
          rows="15"
          placeholder="Dirección"
        ></textarea>
        <button>Enviar</button>
      </form>
    </div>
  );
};

export default AddUserPage;
