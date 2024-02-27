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
    label: 'Name',
  },
  {
    key: 'email',
    label: 'Email',
  },
  {
    key: 'lastSeen',
    label: 'Last Seen',
  },
];
