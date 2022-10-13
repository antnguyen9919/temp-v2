import { initializeApp, getApp, getApps } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase-admin/firestore'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY ? process.env.NEXT_PUBLIC_FIREBASE_API_KEY : '',
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN ? process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN : '',
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ? process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID : '',
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET ? process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET : '',
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_ID ? process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_ID : '',
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID ? process.env.NEXT_PUBLIC_FIREBASE_APP_ID : '',
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID ? process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID : ''
}
let analytics
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig)
const auth = getAuth(app)
const firestore = getFirestore(app)
// const analytics = getAnalytics(app);
if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') analytics = getAnalytics(app)
export { auth, analytics, firestore }
