const express = require('express')
const router = express.Router()
const store = require('./store')

router.all('*', (req, res) => {
  // const headers = req.headers
  const url = req.baseUrl.replace('/dummy/api/', '') // removing /dummy/api/ from the base url
  // let [filename, ...endpoint] = url.split('/')[0]
  let key = url
  const matchFound = wildcards.find((e) => key.startsWith(e))
  key = matchFound || key
  const specialCases = spclFunc(key)
  if(specialCases){
    return res.send(specialCases)
  }
  if (store[key]) {
    return res.send(store[key])
  } else {
    return res.status(404).json({ message: 'Date not found', key })
  }
})

module.exports = router

let splKey = null
// splKey = 'getpatientallpriorsreports'
      // "studyUuid": "60359790-7a29-48a7-920b-93f8a4aa3eaa",

      
const NDF = 'No Data Found.'
const EMTY_ARR = []
function spclFunc(keyname, ){
    if(splKey === null) return null
    if(keyname.includes(splKey)){
        return 
        return EMTY_ARR
        return NDF
    }
}
const wildcards = [
  'Document/getdocumentsbypatientuid',
  'Document/GetDocumentsByStudyUid',
  'Patient/getpatientrightdrawerinfobypatientuid',
  'ModalitySchedule/getmodalityschedulesmodalityuid',
  'Schedule/getschedulebymodalityortechnologistuuid/4e1adf5b-63f6-4ab1-8db6-73b1110d9bf7/ModalitySchedule'
]
