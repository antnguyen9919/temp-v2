import { db } from 'src/configs/firebase-admin'
export default function (req, res) {
  console.log('Started')
  let response
  let received = 0

  if (req.method !== 'POST') {
    db.collection('alerts').add({ name: 'Get requests' })
    response = res.status(200).json({ message: 'Wrong method but still recorded in Firestore' })
  } else {
    const { dashboardId, evalMatches, orgId, panelId, ruleId, ruleName, ruleUrl, state, tags, title } = req.body
    if (dashboardId || evalMatches || orgId || panelId || ruleId || ruleName || ruleUrl || state || tags || title)
      received = 1
    db.collection('alerts')
      .add({
        id: 'worked',
        dashboardId: dashboardId ? dashboardId : '',
        evalMatches: evalMatches ? evalMatches : '',
        orgId: orgId ? orgId : '',
        panelId: panelId ? panelId : '',
        ruleId: ruleId ? ruleId : '',
        ruleName: ruleName ? ruleName : '',
        ruleUrl: ruleUrl ? ruleUrl : '',
        state: state ? state : '',
        tags: tags ? tags : '',
        title: title ? title : ''
      })
      .then(res => {
        if (res) {
          console.log(res)
          response = res.status(200).json({ message: 'Wrong method but still recorded in Firestore', received })
        }
      })
      .catch(error => {
        if (error) {
          console.log(error.message)
          response = res.json({ error: error.message })
        }
      })
  }

  return response
}
