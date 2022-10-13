import { db } from 'src/configs/firebase-admin'
export default function (req, res) {
  console.log('Started')
  if (req.method === 'POST') {
    const {
      receiver,
      status,
      orgId,
      alerts,
      groupLabels,
      commonLabels,
      commonAnnotations,
      externalURL,
      version,
      groupKey,
      truncatedAlerts,
      title,
      state,
      message
    } = req.body
    db.collection('alerts')
      .add({
        id: 'worked',
        receiver: receiver ? receiver : '',
        status: status ? status : '',
        orgId: orgId ? orgId : '',
        alerts: alerts ? alerts : [],
        groupLabels: groupLabels ? groupLabels : '',
        commonLabels: commonLabels ? commonLabels : '',
        commonAnnotations: commonAnnotations ? commonAnnotations : '',
        externalURL: externalURL ? externalURL : '',
        version: version ? version : '',
        groupKey: groupKey ? groupKey : '',
        truncatedAlerts: truncatedAlerts ? truncatedAlerts : '',
        title: title ? title : '',
        state: state ? state : '',
        message: message ? message : ''
      })
      .then(res => {
        if (res) {
          console.log(res)
        }
      })
      .catch(error => {
        if (error) {
          console.log(error.message)
          return res.json({ error: error.message })
        }
      })
  } else {
    db.collection('alerts')
      .add({ message: 'No body' })
      .then(res => {
        if (res) console.log('Ok boys')
      })
      .catch(e => {
        if (e) {
          console.log(e.message)
          return res.json({ error: e.message })
        }
      })
  }
  return res.status(200).json({ message: 'OK' })
}
