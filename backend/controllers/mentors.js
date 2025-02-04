const express = require('express');
const router = express.Router();

//route: PORT/api/mentor/
router.get('/', (req, res) => {
	if(req.query.pageOffset == null || req.query.pageSize == null || req.query.careers == null || req.query.interests == null) {
		res.send({'hasError': true, 'data': []});
		return;
	}
	
	var data = [
	{'id': 1, 'url': 'https://randomuser.me/api/portraits/men/47.jpg', 'name': 'Ren Lemis', 'profession': 'Carpenter'			, 'company': 'Home Depot'			, 'academic_info' : 'Tampa Technical School'	, 'degree' : 'Carpentry'				, 'interests': ['Cooking', 'Finance']},
	{'id': 2, 'url': 'https://randomuser.me/api/portraits/men/83.jpg', 'name': 'Andrew Smith', 'profession': 'Software Engineer'	, 'company': 'JP Morgan & Chase'	, 'academic_info' : 'MIT'						, 'degree' : 'Electrical Engineering'	, 'interests': ['Mathematics', 'Anthropology']},
	{'id': 3, 'url': 'https://randomuser.me/api/portraits/women/65.jpg', 'name': 'Karen Smith', 'profession': 'Quant'				, 'company': 'Renisance'			, 'academic_info' : 'Harvard'					, 'degree' : 'Mathematics'				, 'interests': ['History', 'Game Theory']},
	
	{'id': 4, 'url': 'https://randomuser.me/api/portraits/women/48.jpg', 'name': 'Susan Doe', 'profession': 'Project Manager'	, 'company': 'Google'				, 'academic_info' : 'UC Berkley'				, 'degree' : 'Business Admin'			, 'interests': ['VR', 'Basketball']},
	{'id': 5, 'url': 'https://randomuser.me/api/portraits/men/92.jpg', 'name': 'Sam Johnson', 'profession': 'Project Manager'	, 'company': 'Visa'					, 'academic_info' : 'UConn'						, 'degree' : 'Mechanical Engineering'	, 'interests': ['3D Printing', 'Rockets']},
	{'id': 6, 'url': 'https://randomuser.me/api/portraits/women/62.jpg', 'name': 'Vivi Sharpe', 'profession': 'Software Engineer'	, 'company': 'Golden State Warriors', 'academic_info' : 'AUT'						, 'degree' : 'Mathematics'				, 'interests': ['Sports Analytics', 'Game Theory']}
	];
	
	var start_index = req.query.pageOffset * req.query.pageSize;
	var end_index   = start_index + req.query.pageSize;
	
	var filtered_data = data;
	
	if(req.query.careers.length != 0) {
		filtered_data = filtered_data.filter(x => req.query.careers.includes(x['profession']) );
	} 
	
	if(req.query.interests.length != 0) {
		filtered_data = filtered_data.filter(x => req.query.interests.includes(x['interests']) );
	}
	
	res.json(data);
});



router.post('/', (req, res) => {
	console.log(req.body);
	// didn't send query params
	if(req.body.pageOffset == null || req.body.pageSize == null || req.body.careers == null || req.body.interests == null) {
		res.json([]);
		return;
	}
	
	var data = [
	{'id': 1, 'url': 'https://randomuser.me/api/portraits/men/47.jpg', 'name': 'Ren Lemis', 'profession': 'Carpenter'			, 'company': 'Home Depot'			, 'academic_info' : 'Tampa Technical School'	, 'degree' : 'Carpentry'				, 'interests': ['Cooking', 'Finance']},
	{'id': 2, 'url': 'https://randomuser.me/api/portraits/men/83.jpg', 'name': 'Andrew Smith', 'profession': 'Software Engineer'	, 'company': 'JP Morgan & Chase'	, 'academic_info' : 'MIT'						, 'degree' : 'Electrical Engineering'	, 'interests': ['Mathematics', 'Anthropology']},
	{'id': 3, 'url': 'https://randomuser.me/api/portraits/women/65.jpg', 'name': 'Karen Smith', 'profession': 'Quant'				, 'company': 'Renisance'			, 'academic_info' : 'Harvard'					, 'degree' : 'Mathematics'				, 'interests': ['History', 'Game Theory']},
	
	{'id': 4, 'url': 'https://randomuser.me/api/portraits/women/48.jpg', 'name': 'Susan Doe', 'profession': 'Project Manager'	, 'company': 'Google'				, 'academic_info' : 'UC Berkley'				, 'degree' : 'Business Admin'			, 'interests': ['VR', 'Basketball']},
	{'id': 5, 'url': 'https://randomuser.me/api/portraits/men/92.jpg', 'name': 'Sam Johnson', 'profession': 'Project Manager'	, 'company': 'Visa'					, 'academic_info' : 'UConn'						, 'degree' : 'Mechanical Engineering'	, 'interests': ['3D Printing', 'Rockets']},
	{'id': 6, 'url': 'https://randomuser.me/api/portraits/women/62.jpg', 'name': 'Vivi Sharpe', 'profession': 'Software Engineer'	, 'company': 'Golden State Warriors', 'academic_info' : 'AUT'						, 'degree' : 'Mathematics'				, 'interests': ['Sports Analytics', 'Game Theory']}

	];
	
	var start_index = req.body.pageOffset * req.body.pageSize;
	var end_index   = start_index + req.body.pageSize;
	
	var filtered_data = data;
	
	if(req.body.careers.length != 0) {
		filtered_data = filtered_data.filter(x => req.body.careers.includes(x['profession']) );
	} 
	
	if(req.body.interests.length != 0) {
		filtered_data = filtered_data.filter(x => 
			x['interests'].filter(interest => 
			req.body.interests.includes(interest))
			.length != 0
		);
	} 
	
	console.log(req.body.interests);
	console.log(data.filter(x => req.body.interests.includes(x['interests']) ));
	
	
	
	res.json(filtered_data.slice(start_index, end_index));
});








router.post('/question', (req, res) => {
	// didn't send query params
	if(req.body.mentor_id == null || req.body.question == null) {
		res.json({'hasError': true});
		return;
	}
	
	console.log(req.body);
	
	
	res.json({'hasError': false});
});






module.exports = router;