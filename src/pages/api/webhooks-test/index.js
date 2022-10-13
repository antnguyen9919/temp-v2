import { db } from 'src/configs/firebase-admin'
export default function (req, res) {
  return res.status(200).json({ message: 'Hello' })
}
