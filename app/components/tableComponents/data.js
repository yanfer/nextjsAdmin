const columns = [
  { name: 'ID', uid: 'id', sortable: true },
  { name: 'NOMBRE', uid: 'name', sortable: true },
  { name: 'EDAD', uid: 'age', sortable: true },
  { name: 'ROL', uid: 'role', sortable: true },
  { name: 'EQUIPO', uid: 'team' },
  { name: 'CORREO', uid: 'email' },
  { name: 'ESTADO', uid: 'status', sortable: true },
  { name: 'ACCIONES', uid: 'actions' },
];

const testColums = [
  {
    key: 'name',
    label: 'NAME',
  },
  { key: 'email', label: 'EMAIL' },
  { key: 'lastSeen', label: 'LAST SEEN' },
];

const folioColumns = [
  {
    key: 'nombreRemitente',
    label: 'REMITENTE',
  },
  {
    key: 'puestoRemitente',
    label: 'PUESTO',
  },
  {
    key: 'dependencia',
    label: 'DEPENDENCIA',
  },
  {
    key: 'delegacion',
    label: 'DELEGACIÓN',
  },
  {
    key: 'nombreDocumento',
    label: 'NOMBRE DEL DOCUMENTO',
  },
  {
    key: 'turno',
    label: 'TURNO',
  },
  {
    key: 'referenciaInteresados',
    label: 'INTERESADOS',
  },
  {
    key: 'folioRecibido',
    label: 'FOLIO RECIBIDO',
  },
  {
    key: 'fechaRecepcion',
    label: 'FECHA RECEPCIÓN',
  },
  {
    key: 'fechaRecibido',
    label: 'FECHA RECIBIDO',
  },
  {
    key: 'archivo',
    label: 'ARCHIVOS',
  },
  {
    key: 'descripcion',
    label: 'DESCRIPCIÓN',
  },
  {
    key: 'acciones',
    label: 'ACCIONES',
  },
];
const statusOptions = [
  { name: 'activo', uid: 'activo' },
  { name: 'inactivo', uid: 'inactivo' },
  { name: 'vacaciones', uid: 'vacaciones' },
];

const departamento = [
  { label: 'Unidad de Control', value: 'udc', description: 'Area de Control' },
  { label: 'Finanzas', value: 'fin', description: 'Area de Finanzas' },
];

const puesto = [
  {
    label: 'Contaduría',
    value: 'contaduria',
    description: 'Area de Contabilidad',
  },
  {
    label: 'Recibimiento',
    value: 'recibimiento',
    description: 'Area de Recibimiento',
  },
];

const users = [
  {
    id: 1,
    name: 'Tony Reichert',
    role: 'CEO',
    team: 'Management',
    status: 'activo',
    age: '29',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
    email: 'tony.reichert@example.com',
  },
  {
    id: 2,
    name: 'Zoey Lang',
    role: 'Tech Lead',
    team: 'Development',
    status: 'inactivo',
    age: '25',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
    email: 'zoey.lang@example.com',
  },
  {
    id: 3,
    name: 'Jane Fisher',
    role: 'Sr. Dev',
    team: 'Development',
    status: 'activo',
    age: '22',
    avatar: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
    email: 'jane.fisher@example.com',
  },
  {
    id: 4,
    name: 'William Howard',
    role: 'C.M.',
    team: 'Marketing',
    status: 'vacaciones',
    age: '28',
    avatar: 'https://i.pravatar.cc/150?u=a048581f4e29026701d',
    email: 'william.howard@example.com',
  },
  {
    id: 5,
    name: 'Kristen Copper',
    role: 'S. Manager',
    team: 'Sales',
    status: 'activo',
    age: '24',
    avatar: 'https://i.pravatar.cc/150?u=a092581d4ef9026700d',
    email: 'kristen.cooper@example.com',
  },
  {
    id: 6,
    name: 'Brian Kim',
    role: 'P. Manager',
    team: 'Management',
    age: '29',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
    email: 'brian.kim@example.com',
    status: 'activo',
  },
  {
    id: 7,
    name: 'Michael Hunt',
    role: 'Designer',
    team: 'Design',
    status: 'inactivo',
    age: '27',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29027007d',
    email: 'michael.hunt@example.com',
  },
  {
    id: 8,
    name: 'Samantha Brooks',
    role: 'HR Manager',
    team: 'HR',
    status: 'activo',
    age: '31',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e27027008d',
    email: 'samantha.brooks@example.com',
  },
  {
    id: 9,
    name: 'Frank Harrison',
    role: 'F. Manager',
    team: 'Finance',
    status: 'vacaciones',
    age: '33',
    avatar: 'https://i.pravatar.cc/150?img=4',
    email: 'frank.harrison@example.com',
  },
  {
    id: 10,
    name: 'Emma Adams',
    role: 'Ops Manager',
    team: 'Operations',
    status: 'activo',
    age: '35',
    avatar: 'https://i.pravatar.cc/150?img=5',
    email: 'emma.adams@example.com',
  },
  {
    id: 11,
    name: 'Brandon Stevens',
    role: 'Jr. Dev',
    team: 'Development',
    status: 'activo',
    age: '22',
    avatar: 'https://i.pravatar.cc/150?img=8',
    email: 'brandon.stevens@example.com',
  },
  {
    id: 12,
    name: 'Megan Richards',
    role: 'P. Manager',
    team: 'Product',
    status: 'inactivo',
    age: '28',
    avatar: 'https://i.pravatar.cc/150?img=10',
    email: 'megan.richards@example.com',
  },
  {
    id: 13,
    name: 'Oliver Scott',
    role: 'S. Manager',
    team: 'Security',
    status: 'activo',
    age: '37',
    avatar: 'https://i.pravatar.cc/150?img=12',
    email: 'oliver.scott@example.com',
  },
  {
    id: 14,
    name: 'Grace Allen',
    role: 'M. Specialist',
    team: 'Marketing',
    status: 'activo',
    age: '30',
    avatar: 'https://i.pravatar.cc/150?img=16',
    email: 'grace.allen@example.com',
  },
  {
    id: 15,
    name: 'Noah Carter',
    role: 'IT Specialist',
    team: 'I. Technology',
    status: 'inactivo',
    age: '31',
    avatar: 'https://i.pravatar.cc/150?img=15',
    email: 'noah.carter@example.com',
  },
  {
    id: 16,
    name: 'Ava Perez',
    role: 'Manager',
    team: 'Sales',
    status: 'activo',
    age: '29',
    avatar: 'https://i.pravatar.cc/150?img=20',
    email: 'ava.perez@example.com',
  },
  {
    id: 17,
    name: 'Liam Johnson',
    role: 'Data Analyst',
    team: 'Analysis',
    status: 'activo',
    age: '28',
    avatar: 'https://i.pravatar.cc/150?img=33',
    email: 'liam.johnson@example.com',
  },
  {
    id: 18,
    name: 'Sophia Taylor',
    role: 'QA Analyst',
    team: 'Testing',
    status: 'activo',
    age: '27',
    avatar: 'https://i.pravatar.cc/150?img=29',
    email: 'sophia.taylor@example.com',
  },
  {
    id: 19,
    name: 'Lucas Harris',
    role: 'Administrator',
    team: 'Information Technology',
    status: 'inactivo',
    age: '32',
    avatar: 'https://i.pravatar.cc/150?img=50',
    email: 'lucas.harris@example.com',
  },
  {
    id: 20,
    name: 'Mia Robinson',
    role: 'Coordinator',
    team: 'Operations',
    status: 'activo',
    age: '26',
    avatar: 'https://i.pravatar.cc/150?img=45',
    email: 'mia.robinson@example.com',
  },
];

export {
  testColums,
  columns,
  folioColumns,
  users,
  statusOptions,
  departamento,
  puesto,
};
