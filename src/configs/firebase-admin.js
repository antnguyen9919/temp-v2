// const { initializeApp, applicationDefault, cert, getApps, getApp } = require('firebase-admin/app')
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore')
// const serviceAccount = require('../../ariadne-analytics-next-auth-firebase-adminsdk-w7wxq-bac698e8ce.json')
var admin = require('firebase-admin')
var { getApps, getApp } = require('firebase-admin/app')

if (!getApps().length)
  admin.initializeApp({
    // credential: admin.credential.cert(serviceAccount)
    credential: admin.credential.cert({
      // clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL ? process.env.FIREBASE_ADMIN_CLIENT_EMAIL : '',
      // privateKey: process.env.FIREBASE_ADMIN_PRIVATE_KEY
      //   ? JSON.parse(JSON.stringify(process.env.FIREBASE_ADMIN_PRIVATE_KEY)).replace(/\\n/g, '\n')
      //   : {},
      clientEmail: 'firebase-adminsdk-w7wxq@ariadne-analytics-next-auth.iam.gserviceaccount.com',
      projectId: 'ariadne-analytics-next-auth',
      privateKey:
        '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCer6IfVHzm+sLK\nlUWrWnC44kDsAODb0Vt2nQuf9TQWpj6w1X7HRTn34iE0iT+Nm3/F+EINdGwggdIu\n3jjKNsS/e4jad30mZlo20jT7PoMAmkpnPUMv37ulS3AWbtemm0JPjEJvzEXlIcw4\nzRDMYMmuPy0ep+PRZdG+Gi4wzbFfdbjYvBtcD1K5G5gwCbzjz9/Obys6rz9k3cPa\nSPYinswUc8JTuwnS61LK3d2AHV/wwAGfcrEzfuuru8Facg4hv3fWrxLMiKBVACpi\nX4CasvZ+LZccjfv2JmeYDrM9ChG6Vd5rp1VVBtKw80CJmBI+3KVFlQaxfyMAiCnb\nGi0IzqqjAgMBAAECggEAJpebS5hOGhShPAiKnY5MvMIVvO/Hv94OKu4trhTBusJq\nm7IId6kP3IfLwI2ifat0Ky7hzYjjZRJ9jfVwhUlFlzYRheQqdSTOSufbh8Dftk1P\nzATbqrB0X9JVa7dATh4TRepcG/lnhD6wfp3suG/PjMeDjyGQp9Pl6yBN3IOh4A+M\nMJgEFL8VXbCB+Tyyvr3wFUw1dYsuri+e9zdt/jdr+zIphs64iGLE738htjdeOR9J\nP2KQu301V5W7KlTuWULQik7nN6LwQen5JSri366I+VwkV38khCkReBCULJU1qMOh\nYQGTvBlzVsHhUnIyKquF2zEPeXP6MIEkT/ZeWF9BUQKBgQDgS8C1LiVifvx3IFBO\nIxZsNEAZdB8hRC/2Z7/Dc/DkwSnIPyuUouswD7HJstQgqYwJI0BXNWacslHEkX5Y\nq72siorjglY/j1oALugo2oBG/WL/ZnM9QrH7czALwVeCNZwyhUCdp3ldV2LKLq32\nK+zvie+tduIjT+tnGUrX8hO5kQKBgQC1HcJccRTUVugArVHBIFxw3CcbUf4c5qrH\nzeehLT04JWgES8rv23iFcTsbmCL0/BcT4jtcO3fCEWaqqxd3pv4gkTUteWZU1y9O\nmkr81Qwu3cdovp4Qw3mZqzvCognqoQul9ocmehykSXV6MlmsNMRyeqMpVzZEADFk\nGHXGdOom8wKBgQCILbYMyr2r9Yl3Eklvh2IfxAF+8r/LxMiSBB+rnYMOgDDMAX6G\nOfwtK/o3ibm9MvNwwNRZnnR0gteeTu+1CmCYl20IAKQ45uIv5krSMwdbEpC+nAcv\nlITXM/Jh0Ls+tSnminzWu022XE4AjyLTqYurS8YXPWzDH8y+xd5pCfLr4QKBgCRq\nZF7j2bVL9//S2WJEWHHUwgQrOzWiZ2ofC1iL2QhF9SEQADCz5wqllqXYtAaf/R/h\nV+AWkOCzUPo1xlUnfWcc6x1GkH20em2KdlNZnsZ5jxOPaAak1vk/xZc/r1C+qrHm\n3Iuu971Mi9NS9la6kVkXMWEpiN6pT0T56gxKC55jAoGBAIYGFzSIqLq0ctkPvZUo\nAPp7IqsSveSwZ/H1bxaucRehN6K1Qbfwxro07tdynNF5bTGrxAjAqoN+jI+TrDUI\nR6Q+Sn1M/1cfTZXyKBgWbRGuwSEswFSym8CZfL88ADIk8DM6EQGAXZVWTbdAI9hH\nkT43E5RIQ0lDq35eQjtzYCHd\n-----END PRIVATE KEY-----\n'
      // projectId: process.env.FIREBASE_ADMIN_PROJECT_ID ? process.env.FIREBASE_ADMIN_PROJECT_ID : ''
    })
  })

const db = getFirestore()

export { db, admin }
