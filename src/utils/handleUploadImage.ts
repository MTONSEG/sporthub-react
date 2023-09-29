import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { NumStrNullType } from '../redux/slices/auth/singupSlice';
import { ref as refDB, update } from 'firebase/database';
import { auth, db, storage } from '../initializeFirebase';
import { updateProfile } from 'firebase/auth';
import { setLSPhotoURL } from '../redux/slices/auth/setLocalStorage';

export const uploadImage = async (
	uid: NumStrNullType,
	file: File,
	fileName: string,
	photo?: boolean,
): Promise<string> => {
	const storageRef = ref(storage, `images/${uid}/${fileName}`);
	await uploadBytes(storageRef, file);
	const downloadURL = await getDownloadURL(storageRef);
	const userRef = refDB(db, `users/${uid}`);

	if (photo) {
		update(userRef, { photoURL: downloadURL, photoName: fileName });
		updateProfile(auth.currentUser, { photoURL: downloadURL });

		return downloadURL;
	} else {
		update(userRef, { posterURL: downloadURL, posterName: fileName });
		return downloadURL;
	}
}
