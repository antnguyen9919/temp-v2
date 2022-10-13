// const { initializeApp, applicationDefault, cert, getApps, getApp } = require('firebase-admin/app')
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore')
// const serviceAccount = require('../../ariadne-analytics-next-auth-firebase-adminsdk-w7wxq-bac698e8ce.json')
var admin = require('firebase-admin')
var { getApps, getApp } = require('firebase-admin/app')

if (!getApps().length)
  admin.initializeApp({
    // credential: admin.credential.cert(serviceAccount)
    credential: admin.credential.cert({
      clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL ? process.env.FIREBASE_ADMIN_CLIENT_EMAIL : '',
      privateKey: process.env.FIREBASE_ADMIN_PRIVATE_KEY
        ? JSON.parse(JSON.stringify(process.env.FIREBASE_ADMIN_PRIVATE_KEY)).replace(/\\n/g, '\n')
        : {},
      projectId: process.env.FIREBASE_ADMIN_PROJECT_ID ? process.env.FIREBASE_ADMIN_PROJECT_ID : ''
    })
  })

const db = getFirestore()

export { db, admin }
