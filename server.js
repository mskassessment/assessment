const express = require('express')
const app = express()
const port = 3000

app.use('/static', express.static('dist'))

app.get('/', (req, res) => res.sendFile('index.html', { root: __dirname }))

app.get('/interventions', (req, res) => {
    data = {
        "terms": [
            {
                "name": "Antineoplastic Hormonal/Endocrine Agent",
                "codes": [
                    "C129818"
                ],
                "synonyms": [
                    "Antineoplastic Endocrinal Agent",
                    "Antineoplastic Hormonal Agent",
                    "Antineoplastic Hormonal Therapeutic"
                ],
                "category": "agent category",
                "count": 229
            },
            {
                "name": "Apoptotic Pathway-targeting Antineoplastic Agent",
                "codes": [
                    "C129839"
                ],
                "synonyms": [
                    "Apoptotic Pathway-targeting Cancer Therapeutic"
                ],
                "category": "agent category",
                "count": 165
            },
            {
                "name": "Cancer Diagnostic or Therapeutic Procedure",
                "codes": [
                    "C79426"
                ],
                "synonyms": [],
                "category": "agent category",
                "count": 9
            },
            {
                "name": "Cancer Therapeutic Procedure",
                "codes": [
                    "C16212"
                ],
                "synonyms": [
                    "Cancer Therapeutic Procedure",
                    "Cancer Therapy",
                    "Cancer Treatment",
                    "Malignant Neoplasm Therapy",
                    "Malignant Neoplasm Treatment"
                ],
                "category": "agent category",
                "count": 9
            },
            {
                "name": "Diagnostic, Therapeutic, or Research Equipment",
                "codes": [
                    "C19238"
                ],
                "synonyms": [
                    "Diagnostic, Therapeutic, and Research Equipment",
                    "Equipment",
                    "Hardware"
                ],
                "category": "agent category",
                "count": 34
            }
        ]
    }
    res.json({apiResults: data})
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

