export const userColumns = [
  { field: 'id', headerName: 'ID', width: 70 },
  {
    field: 'name',
    headerName: 'Name',
    width: 230,
    renderCell: (params) => {
      return <div className="">{params.row.username}</div>;
    },
  },
  { field: 'birthdate', headerName: 'Date of Birth', width: 200 },
  {
    field: 'status',
    headerName: 'Status',
    width: 180,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
  { field: 'patient-address', headerName: 'Patient Address', width: 400 },
  { field: 'family-address', headerName: 'Family Address', width: 400 },
];

export const userRows = [
  {
    id: 1,
    username: 'Snow',
    img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    status: 'Inquiry',
    email: '1snow@gmail.com',
    age: 35,
  },
  {
    id: 2,
    username: 'Jamie Lannister',
    img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    email: '2snow@gmail.com',
    status: 'Onboarding',
    age: 42,
  },
  {
    id: 3,
    username: 'Lannister',
    img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    email: '3snow@gmail.com',
    status: 'Inquiry',
    age: 45,
  },
  {
    id: 4,
    username: 'Stark',
    img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    email: '4snow@gmail.com',
    status: 'Onboarding',
    age: 16,
  },
  {
    id: 5,
    username: 'Targaryen',
    img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    email: '5snow@gmail.com',
    status: 'Onboarding',
    age: 22,
  },
  {
    id: 6,
    username: 'Melisandre',
    img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    email: '6snow@gmail.com',
    status: 'Active',
    age: 15,
  },
  {
    id: 7,
    username: 'Clifford',
    img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    email: '7snow@gmail.com',
    status: 'Active',
    age: 44,
  },
  {
    id: 8,
    username: 'Frances',
    img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    email: '8snow@gmail.com',
    status: 'Churned',
    age: 36,
  },
  {
    id: 9,
    username: 'Roxie',
    img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    email: 'snow@gmail.com',
    status: 'Churned',
    age: 65,
  },
  {
    id: 10,
    username: 'Roxie',
    img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    email: 'snow@gmail.com',
    status: 'Churned',
    age: 65,
  },
  {
    id: 11,
    username: 'Tine',
    img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    email: 'snow@gmail.com',
    status: 'Churned',
    age: 65,
  },
  {
    id: 12,
    username: 'Gak',
    img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    email: 'snow@gmail.com',
    status: 'Active',
    age: 32,
  },
  {
    id: 13,
    username: 'Tooe',
    img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    email: 'snow@gmail.com',
    status: 'Churned',
    age: 65,
  },
];
