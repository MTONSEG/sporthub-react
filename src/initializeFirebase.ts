import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebase';
import { getStorage } from 'firebase/storage';
import { getDatabase } from 'firebase/database';
import { getAuth } from 'firebase/auth';

const app = initializeApp(firebaseConfig);
export const storage = getStorage();
export const db = getDatabase();
export const auth = getAuth();