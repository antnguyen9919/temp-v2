import { admin, db } from 'src/configs/firebase-admin'

export default async function (req, res) {
  if (admin && db) {
    let user
    // const user = await admin.auth().getUserByEmail('ng.christian345@gmail.com')
    // admin
    //   .auth()
    //   .setCustomUserClaims('oLQ6kUIvLWVpZJCEX3ourFvi5nJ2', {
    //     is_ariadne: true,
    //     role: 'admin',
    //     username: 'thichkhach13',
    //     company: 'Ariadnemaps'
    //   })
    //   .then(st => {
    //     console.log(st)
    //     admin
    //       .auth()
    //       .getUserByEmail('ng.christian345@gmail.com')
    //       .then(user => {
    //         // console.log(user)
    //         user = user
    //       })
    //   })
    // console.log(user)
    // return res.status(200).json(user)
    throw new Error('Error')
  } else return res.status(400).send('Admin not ready')
}
