import { admin, db } from 'src/configs/firebase-admin'
const bcrypt = require('bcrypt')
const saltRounds = 10

function hash_password(password) {
  const hs_password = bcrypt.hash(password, saltRounds).then(hashed_password => {
    return hashed_password
  })
  return hs_password
}
async function add_to_db(user, password, company) {
  let hs = await hash_password(password)

  const data = {
    uid: user.uid ? user.uid : '',
    email: user.email ? user.email : '',
    emailVerified: user.emailVerified === true || user.emailVerified === false ? user.emailVerified : false,
    displayName: user.displayName ? user.displayName : '',
    photoURL: user.photoURL ? user.photoURL : '',
    // phoneNumber: user.phoneNumber ? user.phoneNumber : tel,
    phoneNumber: '',
    disabled: user.disabled === true || user.disabled === false ? user.disabled : false,
    creationTime: user.metadata.creationTime ? user.metadata.creationTime : '',
    lastSignInTime: user.metadata.lastSignInTime ? user.metadata.lastSignInTime : '',
    lastRefreshTime: user.metadata.lastRefreshTime ? user.metadata.lastRefreshTime : '',
    role: 'guest',
    is_ariadne: false,
    password: hs ? hs : '',
    company: company ? company : ''
  }
  const result = await db.collection('users').doc(user.uid).set(data)
  //   if (result) console.log(result)
}
async function create_user(name, email, password, company, tel, response) {
  admin
    .auth()
    .createUser({
      email: email,
      emailVerified: false,
      // phoneNumber: tel,
      password: password,
      displayName: name,
      disabled: false
    })
    .then(userRecord => {
      add_to_db(userRecord, password, company)
      admin
        .auth()
        .setCustomUserClaims(userRecord.uid, {
          role: 'guest',
          company: company,
          is_ariadne: false
        })
        .then(() => {
          console.log(userRecord.customClaims)
        })
        .catch(error => console.log(error.message))
    })
    .catch(error => {
      if (error) return response.json({ error: error.message })
      if (error) console.log(error.message)
    })
}

export default async function (req, res) {
  const { token } = req.query
  if (req.method !== 'POST') return res.status(403).json({ message: 'Wrong method' })
  if (token !== process.env.API_SECRET_CODE || !token) return res.status(401).json({ message: 'secret token invalid' })
  const { name, email, password, company } = req.body
  if (!(name && email && password && company))
    return res.status(400).json({
      message: 'Details missing',
      object: {
        name: name ? name : 'missing',
        email: email ? email : 'missing',
        password: password ? password : 'missing',
        company: company ? company : 'missing'
        // tel: tel ? tel : 'missing'
      }
    })
  create_user('james', 'james@test.com', '123456', 'test comp', res)
  // create_user(name, email, password, company, tel, res)
  //   admin
  //     .auth()
  //     .getUserByEmail('james@test.com')
  //     .then(res => console.log(res.customClaims))
  //   let hs = await hash_password('14121502')

  return res.status(200).json({ message: 'User created' })
}
