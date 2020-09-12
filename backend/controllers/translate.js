const express = require('express');
const router = express.Router();
const AWS = require('aws-sdk');
const translate = new AWS.Translate();

router.post('/', (req, res) => {
    const {sourceLanguage, targetLanguage, text} = req.body;
    const params = {
        SourceLanguageCode: sourceLanguage,
        TargetLanguageCode: targetLanguage,
        Text: text
    }

    translate.translateText(params, (err, data) => {
        if (err) {
            console.log(err);
        }
        res.json({text: data.TranslatedText});
    })
})

module.exports = router;