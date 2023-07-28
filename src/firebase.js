import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCahmKFGDluWa_6MRE7W6FEFGts_8qeDxQ',
  authDomain: 'patient-management-8b0bc.firebaseapp.com',
  projectId: 'patient-management-8b0bc',
  storageBucket: 'patient-management-8b0bc.appspot.com',
  messagingSenderId: '77726231758',
  appId: '1:77726231758:web:5f5360f4d93fdc5d32749f',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
