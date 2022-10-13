import { db } from 'src/configs/firebase-admin'
export default function (req, res) {
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
      .then(res => console.log(res))
    return res.status(200).json({ message: 'Hello' })
  } else {
    db.collection('alerts').add({ message: 'No body' })
    return res.status(200).json({ message: 'nothing happened' })
  }
}
