import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { fbconfig } from '../fb'

const firebaseConfig = {
	apiKey: fbconfig.apiKey,
	authDomain: fbconfig.authDomain,
	databaseURL: fbconfig.databaseURL,
	projectId: fbconfig.projectId,
	storageBucket: fbconfig.storageBucket,
	messagingSenderId: fbconfig.messagingSenderId,
	appId: fbconfig.appId,
	measurementId: fbconfig.measurementId
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);