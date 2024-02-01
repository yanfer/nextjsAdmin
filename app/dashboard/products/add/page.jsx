import styles from '@/app/ui/dashboard/products/addProduct/addProduct.module.css';

const AddProductPage = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <input type="text" placeholder="Titulo" name="title" required />
        <select name="cat" id="cat">
          <option value="urgent">Urgente</option>
          <option value="normal">Normal</option>
          <option value="waiting">En espera</option>
        </select>
        <input type="text" placeholder="Dependencia" name="dependency" />
        <input type="text" placeholder="Remitente" name="sender" />
        <input type="text" placeholder="Destinatario" name="addressee" />
        <textarea
          name="desc"
          id="desc"
          cols="150"
          rows="15"
          placeholder="Descripción"
        ></textarea>
        <button>Enviar</button>
      </form>
    </div>
  );
};

export default AddProductPage;
