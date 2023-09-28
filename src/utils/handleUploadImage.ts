import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { NumStrNullType } from '../redux/slices/auth/singupSlice';
import { ref as refDB, update } from 'firebase/database';
import { db, storage } from '../initializeFirebase';

export const uploadImage = async (uid: NumStrNullType, file: File, fileName: string): Promise<void> => {
	const storageRef = ref(storage, `images/${uid}/${fileName}`);
	await uploadBytes(storageRef, file);
	const downloadURL = await getDownloadURL(storageRef);
	const userRef = refDB(db, `users/${uid}`);

	update(userRef, { posterURL: downloadURL });
}
