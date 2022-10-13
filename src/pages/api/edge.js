import { admin, db } from 'src/configs/firebase-admin'
const bcrypt = require('bcrypt')
const usersRef = db.collection('users')

export default async function (req, res) {
  if (!admin) return res.json({ message: 'Admin not initialized' })

  const snapshot = await usersRef.get()
  let data_array = []
  snapshot.forEach(doc => {
    let data = doc.data()
    data_array.push(data)
  })
  if (data_array.length > 0) {
    return res.status(200).json({ list: data_array })
  }
}
