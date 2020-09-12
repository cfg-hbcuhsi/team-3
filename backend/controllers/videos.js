const express = require('express');
const router = express.Router();
const videoData = require('../data/videos');

function filterVideos(data, filter){
	const filteredData = data.filter(video => {
		const {title, profession, mentor_name, description} = video;
		const arr_str = `${title} ${profession} ${mentor_name} ${description}`.toLowerCase().split(" ")
		const arr_filter = filter.toLowerCase().split(" ")
		for (let index = 0; index < arr_filter.length; ++index) {
			let str = arr_filter[index]
			if (arr_str.includes(str))
				return true
		}
})
return filteredData;
}
//route: PORT/api/testing/test
router.get('/', async (req, res) => {
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
router.post('/question', async (req, res) => {
	  const {question, id} = req.body;
		console.log("Video id ", id);
		console.log("Question ", question);
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
