import { db } from 'src/configs/firebase-admin'
export default function (req, res) {
  console.log('Started')

  const { dashboardId, evalMatches, orgId, panelId, ruleId, ruleName, ruleUrl, state, tags, title } = req.body

  db.collection('alerts')
    .add({
      id: 'worked',
      dashboardId,
      evalMatches,
      orgId,
      panelId,
      ruleId,
      ruleName,
      ruleUrl,
      state,
      tags,
      title
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

  return res.status(200).json({ message: 'OK' })
}
