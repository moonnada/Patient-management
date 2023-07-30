import React, { useEffect, useState } from 'react';
import './datatable.scss';
import { DataGrid } from '@mui/x-data-grid';
import { Link, useParams } from 'react-router-dom';
import { db } from '../../firebase';
import {
  collection,
  doc,
  getDoc,
  getDocs,
  deleteDoc,
  onSnapshot,
} from 'firebase/firestore';

const Datatable = () => {
  const { id } = useParams();
  const getPatient = doc(db, `patients/${id}`);
  const [patient, setPatient] = useState({});
  const [patients, setPatients] = useState([]);
  const [patientRows, setPatientRows] = useState(patients);

  useEffect(() => {
    onSnapshot(collection(db, 'patients'), (snapshot) => {
      setPatients(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  }, []);
  
  useEffect(() => {
    const fetchPatient = async () => {
      const docSnap = await getDoc(getPatient);
      if (docSnap.exists()) {
        const newPatientObj = {
          id: docSnap.id,
          ...docSnap.data(),
        };
        setPatient(newPatientObj);
      } else {
        console.log('No such document!');
      }
    };
    fetchPatient();
  }, [id]);

  useEffect(() => {
    const fetchPatientRows = async () => {
      const patientCollection = collection(db, 'patients');
      const querySnapshot = await getDocs(patientCollection);
      const patientsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPatientRows(patientsData);
    };
    fetchPatientRows();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, 'patients', id));
      setPatientRows(patientRows.filter((item) => item.id !== id));
    } catch (err) {}
  };
  const patientColumns = [
    {
      field: 'fullname',
      headerName: 'Full Name',
      width: 200,
    },
    {
      field: 'dateofBirth',
      headerName: 'Date of Birth',
      width: 150,
    },
    { field: 'age', headerName: 'Age', width: 100 },

    {
      field: 'status',
      headerName: 'Status',
      width: 130,
      editable: true,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.status}
          </div>
        );
      },
    },
    {
      field: 'patientAddress',
      headerName: 'Patient Address',
      width: 300,
    },
    {
      field: 'familyAddress',
      headerName: 'Family Address',
      width: 300,
    },
    { field: 'memo', headerName: 'Memo', width: 400, editable: true },
  ];
  const actionColumn = [
    {
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable">
      <div className="search"></div>
      <div className="datatableTitle">
        Patient List
        <Link
          to="/patients/new"
          style={{ textDecoration: 'none' }}
          className="link"
        >
          Add New
        </Link>
      </div>

      <DataGrid
        rows={patientRows}
        columns={patientColumns.concat(actionColumn)}
        pageSize={11}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
