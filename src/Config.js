import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAMrgDhQbEdzZmno--rVoJOra2XcUaXpRM',
  authDomain: 'kraben-ecommerce.firebaseapp.com',
  databaseURL: 'https://kraben-ecommerce-default-rtdb.firebaseio.com',
  projectId: 'kraben-ecommerce',
  storageBucket: 'kraben-ecommerce.appspot.com',
  messagingSenderId: '96867404703',
  appId: '1:96867404703:web:4af9f294cf0767ffc90baa',
  measurementId: 'G-7RSN01BFS2',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;
