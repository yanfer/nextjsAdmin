export const User = {
  id: String,
  name: String,
  email: String,
  image: String,
  lastSeen: String,
};

export const columns = [
  {
    key: 'name',
    label: 'Nombre',
  },
  {
    key: 'email',
    label: 'Correo',
  },
  {
    key: 'lastSeen',
    label: 'Ultima Entrada',
  },
];
