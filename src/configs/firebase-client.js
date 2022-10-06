import { initializeApp, getApp, getApps } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCCnvF0MGf0EH0UBPK9T2Saxdgf-lyOrjA',
  authDomain: 'ariadne-analytics-next-auth.firebaseapp.com',
  projectId: 'ariadne-analytics-next-auth',
  storageBucket: 'ariadne-analytics-next-auth.appspot.com',
  messagingSenderId: '352806373659',
  appId: '1:352806373659:web:50b874124cdb59280aebbe',
  measurementId: 'G-17B4B09VRX'
}

const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
const auth = getAuth(app)
// const analytics = getAnalytics(app);
export { auth }
