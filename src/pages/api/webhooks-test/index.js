import { db } from 'src/configs/firebase-admin'
export default function (req, res) {
  const data = req.body
  if (data) db.collection('alerts').add(data)
  return res.status(200).json({ message: 'Hello' })
}
