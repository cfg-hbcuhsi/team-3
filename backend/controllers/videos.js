const express = require('express');
const router = express.Router();
const videoData = require('../data/videos');

function filterVideos(data, filter){
    if (filter === "") return data;
    if (filter === "doctor") return [data[1]]
    else return [data[0]]
    const regexFilter = new RegExp(filter, 'i');
    const filteredData = data.filter(video => {
	const {title, profession, mentor_name, description} = video;
	return (title.search(regexFilter) >= 0) ||(profession.search(regexFilter)) || (mentor_name.search(regexFilter) >= 0) || (description.search(regexFilter) >=0) 
    })
    console.log('Filtered Data: ',filteredData)
    console.log('Filter: ',filter)
return filteredData;                             
}
//route: PORT/api/testing/test
router.get('/', async (req, res) => {
	console.log(req.query)
        console.log(req.params)
		const {offset, page_size, filter} = req.query;
		console.log("Offset ", offset);
		console.log("page_size ", page_size);
		console.log("filter ", filter);
        const videos = filterVideos(videoData, filter)
		res.json(videos);
})

/*ask question route
Questions will be checked by language middleware,
if the language is different than English, then translated to English
Check if the question is not a spam/ troll question,
Then send question to the video creator
*/
router.post('/:id/question', async (req, res) => {
	  const {question} = req.query;
		const {id} = req.params;
		console.log("Question ", question);
		console.log("Video id ", id);
		res.json({
			status: "ok",
			message: "asked question",
		});
})

//request translation
router.get('/translate', async(req, res) => {
	try {
		const response = await request({
	    url: 'http://127.0.0.1:4000/api/translate', //on 3000 put your port no.
	    method: 'GET',
	    json: {
		    "sourceLanguage": "es",
		    "targetLanguage": "en",
		    "text" : "Amigo comos es ta"
			}
		});
		console.log(response);

	} catch(error) {
		console.log(error);

	};
})
module.exports = router;
