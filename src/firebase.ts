import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";
import { getAnalytics } from "firebase/analytics";
import { fbconfig } from '../fb'

export const firebaseConfig = {
	apiKey: fbconfig.apiKey,
	authDomain: fbconfig.authDomain,
	databaseURL: fbconfig.databaseURL,
	projectId: fbconfig.projectId,
	storageBucket: fbconfig.storageBucket,
	messagingSenderId: fbconfig.messagingSenderId,
	appId: fbconfig.appId,
	measurementId: fbconfig.measurementId,
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const analytics = getAnalytics(app);
const storage = getStorage(app);