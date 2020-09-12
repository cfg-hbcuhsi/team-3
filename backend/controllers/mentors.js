const express = require('express');
const router = express.Router();

//route: PORT/api/mentor/
router.post('/', (req, res) => {
	console.log(req.body);
	// didn't send query params
	if(req.body.pageOffset == null || req.body.pageSize == null || req.body.careers == null || req.body.interests == null) {
		res.send({'hasError': true, 'data': []});
		return;
	}
	
	var data = [
	{'id': 1, 'name': 'Mentor 1', 'profession': 'Carpenter'			, 'company': 'Home Depot'			, 'academic_info' : 'Tampa Technical School'	, 'degree' : 'Carpentry'				, 'interests': ['cooking', 'finance']},
	{'id': 2, 'name': 'Mentor 2', 'profession': 'Software Engineer'	, 'company': 'JP Morgan & Chase'	, 'academic_info' : 'MIT'						, 'degree' : 'Electrical Engineering'	, 'interests': ['mathematics', 'anthropology']},
	{'id': 3, 'name': 'Mentor 3', 'profession': 'Quant'				, 'company': 'Renisance'			, 'academic_info' : 'Harvard'					, 'degree' : 'Mathematics'				, 'interests': ['history', 'game theory']},
	
	{'id': 4, 'name': 'Mentor 4', 'profession': 'Project Manager'	, 'company': 'Google'				, 'academic_info' : 'UC Berkley'				, 'degree' : 'Business Admin'			, 'interests': ['vr']},
	{'id': 5, 'name': 'Mentor 5', 'profession': 'Project Manager'	, 'company': 'Visa'					, 'academic_info' : 'UConn'						, 'degree' : 'Mechanical Engineering'	, 'interests': ['3d printing', 'rockets']},
	{'id': 6, 'name': 'Mentor 6', 'profession': 'Software Engineer'	, 'company': 'Golden State Warriors', 'academic_info' : 'AUT'						, 'degree' : 'Mathematics'				, 'interests': ['sports analytics', 'game theory']}
	];
	
	var start_index = req.body.pageOffset * req.body.pageSize;
	var end_index   = start_index + req.body.pageSize;
	
	var filtered_data = data;
	
	if(req.body.careers.length != 0) {
		console.log('a');
		filtered_data = filtered_data.filter(x => req.body.careers.includes(x['profession']) );
	} 
	
	if(req.body.interests.length != 0) {
		console.log('b');
		filtered_data = filtered_data.filter(x => req.body.interests.includes(x['interests']) );
	} 
	
	
	
	res.send({'hasError': false, 'data': filtered_data.slice(start_index, end_index)});
});




router.post('/question', (req, res) => {
	// didn't send query params
	if(req.body.mentor_id == null || req.body.question == null) {
		res.send({'hasError': true});
		return;
	}
	
	console.log(req.body);
	
	
	res.send({'hasError': false});
});






module.exports = router;